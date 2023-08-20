// BRB003.js - Business Rule Groups and Prioritization

const { AdvancedRule } = require('./BRB002.js'); // Importing AdvancedRule from BRB002 for usage

/**
 * RuleGroup class holds a collection of AdvancedRules and provides functionality to 
 * evaluate and execute them based on their priority.
 */
class RuleGroup {
    constructor(id) {
        this.id = id;
        this.rules = [];
    }

    /**
     * Add a rule to the RuleGroup.
     * @param {AdvancedRule} rule - The rule to be added.
     */
    addRule(rule) {
        this.rules.push(rule);
    }

    /**
     * Evaluate and execute rules based on their priority.
     * @param {Object} data - Data object to evaluate the rules against.
     */
    evaluateAndExecute(data) {
        // Sort the rules by their priority.
        this.rules.sort((a, b) => a.priority - b.priority);

        for (const rule of this.rules) {
            rule.evaluateAndExecute(data);
        }
    }
}

/**
 * Function to create a new RuleGroup.
 * @param {string} id - RuleGroup ID.
 * @returns {RuleGroup} - The created RuleGroup object.
 */
function createRuleGroup(id) {
    return new RuleGroup(id);
}

module.exports = {
    RuleGroup,
    createRuleGroup
};
