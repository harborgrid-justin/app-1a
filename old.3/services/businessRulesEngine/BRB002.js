// BRB002.js - Advanced Business Rule Base

const { BaseRule } = require('./BRB001.js'); // Importing BaseRule from BRB001 for inheritance

/**
 * AdvancedRule class extends the BaseRule and introduces new features like rule chaining.
 */
class AdvancedRule extends BaseRule {
    constructor(id, conditions, actions, linkedRule) {
        super(id, conditions, actions);
        this.linkedRule = linkedRule; // An additional rule that gets triggered after the current one.
    }

    /**
     * Evaluate and execute the rule, then proceed to the linked rule if it exists.
     * @param {Object} data - Data object to evaluate the rule against.
     */
    evaluateAndExecute(data) {
        const result = super.evaluateAndExecute(data);
        if (result && this.linkedRule) {
            this.linkedRule.evaluateAndExecute(data);
        }
        return result;
    }
}

/**
 * Function to create a new AdvancedRule.
 * @param {string} id - Rule ID.
 * @param {Function} conditions - Function that checks rule conditions.
 * @param {Function} actions - Function that executes rule actions.
 * @param {AdvancedRule} linkedRule - Another AdvancedRule object that will be triggered if the current one succeeds.
 * @returns {AdvancedRule} - The created AdvancedRule object.
 */
function createAdvancedRule(id, conditions, actions, linkedRule) {
    return new AdvancedRule(id, conditions, actions, linkedRule);
}

module.exports = {
    AdvancedRule,
    createAdvancedRule
};
