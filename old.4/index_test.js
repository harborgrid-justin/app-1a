// index_test.js

const express = require('express');
const bodyParser = require('body-parser');

// const statusRouter = require('status');
const { OrchestrationEngine } = require('services/services-one.js');
const { Action } = require('services/services-db');

const app = express();
const TEST_PORT = 3001; // Using a different port for testing

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like CSS or client-side JS if any)
app.use(express.static('public'));

// Routes
// app.use('/status', statusRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submitTestAction', async (req, res) => {
    const actionData = req.body;

    // Create a new action instance
    const actionInstance = new Action(actionData);

    try {
        // Save the action to the database
        await actionInstance.save();

        // Process the action using the OrchestrationEngine
        const engine = new OrchestrationEngine();

        // Check if orchestration details are present in the action
        if (!actionData.orchestration || !actionData.orchestration.currentWorkflowId) {
            console.error('Orchestration details or currentWorkflowId missing from the action.');
            res.send('Error: Orchestration details missing from the action.');
            return;
        }

        engine.processAction(actionData);

        // Send back a message indicating the action's final status
        res.send(`Action processed with final status: ${actionData.properties.status}`);
    } catch (err) {
        console.error('Error:', err);
        res.send('Error processing action.');
    }
});

app.listen(TEST_PORT, () => {
    console.log(`Test server running at http://localhost:${TEST_PORT}/`);
});
