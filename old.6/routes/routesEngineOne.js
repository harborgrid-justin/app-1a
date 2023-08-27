const express = require('express');
const router = express.Router();
const ConditionsEngineAlpha = require('../engine_one.js');
const conditionsEngine = new ConditionsEngineAlpha();

router.post('/evaluateCondition', (req, res) => {
    const { condition, data } = req.body;
    try {
        const result = conditionsEngine.evaluate(condition, data);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).send(`Error occurred: ${error.message}`);
    }
});

module.exports = router;
