const express = require('express');
const router = express.Router();
const OrchestrationEngine = require('../engine_two.js');
const orchestrationEngine = new OrchestrationEngine();

router.post('/decide', (req, res) => {
    const data = req.body;
    try {
        const decision = orchestrationEngine.decide(data);
        res.status(200).json({ decision });
    } catch (error) {
        res.status(500).send(`Error occurred: ${error.message}`);
    }
});

module.exports = router;
