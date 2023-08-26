const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const OrchestrationEngine = require('./public/engine_two.js');

const app = express();
const PORT = 3000;
const engine = new OrchestrationEngine();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// API endpoint to evaluate data
app.post('/api/evaluate', (req, res) => {
    try {
        const data = req.body;
        const decision = engine.decide(data);
        res.json({ decision });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve index_two.html as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index_two.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
