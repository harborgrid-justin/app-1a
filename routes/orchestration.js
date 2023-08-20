const express = require('express');
const router = express.Router();
const OrchestrationRepository = require('../orchestration-engine/ORR001.js');

// Create a new orchestration workflow
router.post('/create', async (req, res) => {
    try {
        const workflowData = req.body;
        const newWorkflow = await OrchestrationRepository.createWorkflow(workflowData);
        res.status(201).json({ message: 'Orchestration workflow created!', workflowId: newWorkflow._id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating orchestration workflow', error: error.message });
    }
});

// Get a specific orchestration workflow by ID
router.get('/:workflowId', async (req, res) => {
    try {
        const workflowId = req.params.workflowId;
        const workflow = await OrchestrationRepository.getWorkflowById(workflowId);
        if (workflow) {
            res.status(200).json(workflow);
        } else {
            res.status(404).json({ message: 'Workflow not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orchestration workflow', error: error.message });
    }
});

// Update an orchestration workflow
router.put('/update/:workflowId', async (req, res) => {
    try {
        const workflowId = req.params.workflowId;
        const updatedData = req.body;
        const updatedWorkflow = await OrchestrationRepository.updateWorkflow(workflowId, updatedData);
        if (updatedWorkflow) {
            res.status(200).json({ message: 'Orchestration workflow updated!', updatedWorkflow });
        } else {
            res.status(404).json({ message: 'Workflow not found for update' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating orchestration workflow', error: error.message });
    }
});

// Delete an orchestration workflow
router.delete('/delete/:workflowId', async (req, res) => {
    try {
        const workflowId = req.params.workflowId;
        const result = await OrchestrationRepository.deleteWorkflow(workflowId);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Orchestration workflow deleted!' });
        } else {
            res.status(404).json({ message: 'Workflow not found for deletion' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting orchestration workflow', error: error.message });
    }
});

module.exports = router;
