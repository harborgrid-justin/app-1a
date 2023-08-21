const express = require('express');
const router = express.Router();
const RuleRepository = require('../business-rule-engine/BRR001.js');

// Create a new business rule
router.post('/create', async (req, res) => {
    try {
        const ruleData = req.body;
        const newRule = await RuleRepository.createRule(ruleData);
        res.status(201).json({ message: 'Business rule created!', ruleId: newRule._id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating business rule', error: error.message });
    }
});

// Get a specific business rule by ID
router.get('/:ruleId', async (req, res) => {
    try {
        const ruleId = req.params.ruleId;
        const rule = await RuleRepository.getRuleById(ruleId);
        if (rule) {
            res.status(200).json(rule);
        } else {
            res.status(404).json({ message: 'Rule not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving business rule', error: error.message });
    }
});

// Update a business rule
router.put('/update/:ruleId', async (req, res) => {
    try {
        const ruleId = req.params.ruleId;
        const updatedData = req.body;
        const updatedRule = await RuleRepository.updateRule(ruleId, updatedData);
        if (updatedRule) {
            res.status(200).json({ message: 'Business rule updated!', updatedRule });
        } else {
            res.status(404).json({ message: 'Rule not found for update' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating business rule', error: error.message });
    }
});

// Delete a business rule
router.delete('/delete/:ruleId', async (req, res) => {
    try {
        const ruleId = req.params.ruleId;
        const result = await RuleRepository.deleteRule(ruleId);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Business rule deleted!' });
        } else {
            res.status(404).json({ message: 'Rule not found for deletion' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting business rule', error: error.message });
    }
});

module.exports = router;
