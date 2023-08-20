// BRB001.js

class BaseRule {
    /**
     * Constructor for the BaseRule class.
     * @param {string} ruleId - Unique identifier for the rule.
     * @param {Object} conditions - Set of conditions that need to be met for the rule.
     * @param {Function} action - The action to be executed when conditions are met.
     */
    constructor(ruleId, conditions, action) {
        this.ruleId = ruleId;
        this.conditions = conditions;
        this.action = action;
    }

    /**
     * Evaluates the rule based on the provided data.
     * @param {Object} data - Data against which conditions are evaluated.
     * @return {boolean} - Whether the rule conditions are met.
     */
    evaluate(data) {
        for (let condition of Object.keys(this.conditions)) {
            if (data[condition] !== this.conditions[condition]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Executes the rule action.
     * @param {Object} data - Data which might be needed for the action.
     */
    execute(data) {
        if (this.evaluate(data)) {
            this.action(data);
        }
    }
}

module.exports = BaseRule;
