const express = require('express');
const IntegratedEngine = require('./engine_int1_5.js');

const app = express();
const PORT = 8080;

const engine = new IntegratedEngine();

app.use(express.json());

app.post('/addTask', (req, res) => {
    try {
        engine.addTask(req.body);
        res.status(200).send('Task added successfully.');
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.get('/assignTask', (req, res) => {
    try {
        const task = engine.assignTask(req.query);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).send('No suitable task found.');
        }
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

