const express = require('express');
const router = express.Router();
const TemporalConditionsEngine = require('../engine_three.js');
const temporalEngine = new TemporalConditionsEngine();

router.post('/logEvent', async (req, res) => {
    const { eventName, data, metadata } = req.body;
    try {
        await temporalEngine.logEvent(eventName, data, metadata);
        res.status(200).send('Event logged successfully');
    } catch (error) {
        res.status(500).send('Error logging event');
    }
});

router.get('/checkPattern', async (req, res) => {
    const { eventName, times, duration } = req.query;
    try {
        const result = await temporalEngine.checkPattern(eventName, parseInt(times), parseInt(duration));
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).send('Error checking pattern');
    }
});

module.exports = router;
