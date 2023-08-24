const express = require('express');
const bodyParser = require('body-parser');
const { Action } = require('./services/services-db');
const statusRouter = require('./status');
const { OrchestrationEngine } = require('./services/services-one');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like CSS or client-side JS if any)
app.use(express.static('public'));

// Routes
app.use('/status', statusRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submitAction', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});