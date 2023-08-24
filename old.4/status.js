const express = require('express');
const { Action } = require('./services/services-db');
const fs = require('fs');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Fetch all actions from the database
        const actions = await Action.find();

        // Read the selectable options from the JSON file
        const selectableOptions = JSON.parse(fs.readFileSync('./selectableOptions.json', 'utf8'));

        // Render the actions in a Bootstrap table with dropdowns and update buttons
        let tableRows = actions.map(action => `
            <tr>
                <td>${action.id}</td>
                <td>${action.type}</td>
                <td>${action.properties.priority}</td>
                <td>${action.properties.status}</td>
                <td>
                    <select name="assignee">
                        ${selectableOptions.assignees.map(assignee => `<option value="${assignee}" ${assignee === action.properties.assignee.userId ? 'selected' : ''}>${assignee}</option>`).join('')}
                    </select>
                </td>
                <td>
                    <select name="documentId">
                        ${selectableOptions.documentIds.map(docId => `<option value="${docId}" ${docId === action.properties.documentId ? 'selected' : ''}>${docId}</option>`).join('')}
                    </select>
                </td>
                <td>
                    <select name="requesterId">
                        ${selectableOptions.requesterIds.map(requesterId => `<option value="${requesterId}" ${requesterId === action.properties.requesterId ? 'selected' : ''}>${requesterId}</option>`).join('')}
                    </select>
                </td>
                <td>
                    <select name="workflowId">
                        ${selectableOptions.workflowIds.map(workflowId => `<option value="${workflowId}" ${workflowId === action.orchestration.currentWorkflowId ? 'selected' : ''}>${workflowId}</option>`).join('')}
                    </select>
                </td>
                <td>
                    <button class="update-btn" data-action-id="${action.id}">Update</button>
                </td>
            </tr>
        `).join('');

        res.send(`
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const updateButtons = document.querySelectorAll('.update-btn');
                    updateButtons.forEach(btn => {
                        btn.addEventListener('click', function() {
                            const actionId = this.getAttribute('data-action-id');
                            const row = this.closest('tr');
                            const assignee = row.querySelector('[name="assignee"]').value;
                            const documentId = row.querySelector('[name="documentId"]').value;
                            const requesterId = row.querySelector('[name="requesterId"]').value;
                            const workflowId = row.querySelector('[name="workflowId"]').value;

                            fetch('/updateAction', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ actionId, assignee, documentId, requesterId, workflowId })
                            })
                            .then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    alert(data.message);
                                } else {
                                    alert('Error: ' + data.message);
                                }
                            });
                        });
                    });
                });
            </script>
            <div class="container mt-5">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Assignee</th>
                            <th>Document ID</th>
                            <th>Requester ID</th>
                            <th>Current Workflow ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        `);

    } catch (err) {
        console.error('Error fetching actions from the database:', err);
        res.send('Error fetching actions from the database.');
    }
});

router.post('/updateAction', async (req, res) => {
    const { actionId, assignee, documentId, requesterId, workflowId } = req.body;

    try {
        const action = await Action.findById(actionId);
        if (action) {
            action.properties.assignee.userId = assignee;
            action.properties.documentId = documentId;
            action.properties.requesterId = requesterId;
            action.orchestration.currentWorkflowId = workflowId;

            await action.save();
            res.json({ success: true, message: 'Action updated successfully!' });
        } else {
            res.json({ success: false, message: 'Action not found!' });
        }
    } catch (err) {
        console.error('Error updating action:', err);
        res.json({ success: false, message: 'Error updating action.' });
    }
});

module.exports = router;
