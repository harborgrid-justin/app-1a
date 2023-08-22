// BRC001.js

class ConditionEvaluator {
    constructor() {
        this.conditions = {};
    }

    /**
     * Registers a new condition function.
     * @param {string} conditionId - A unique identifier for the condition.
     * @param {function} conditionFunc - The function that evaluates the condition.
     * @returns {boolean} - Returns true if the condition is successfully registered.
     */
    registerCondition(conditionId, conditionFunc) {
        if (this.conditions[conditionId]) {
            throw new Error(`Condition with ID ${conditionId} is already registered.`);
        }
        this.conditions[conditionId] = conditionFunc;
        return true;
    }

    /**
     * Evaluates a registered condition.
     * @param {string} conditionId - The unique identifier for the condition.
     * @param {object} data - The data required for evaluating the condition.
     * @returns {boolean} - Returns the result of the condition evaluation.
     */
    evaluate(conditionId, data) {
        const conditionFunc = this.conditions[conditionId];
        if (!conditionFunc) {
            throw new Error(`Condition with ID ${conditionId} is not registered.`);
        }
        return conditionFunc(data);
    }

    /**
     * Unregisters a condition.
     * @param {string} conditionId - The unique identifier for the condition to be unregistered.
     * @returns {boolean} - Returns true if the condition is successfully unregistered.
     */
    unregisterCondition(conditionId) {
        if (!this.conditions[conditionId]) {
            throw new Error(`Condition with ID ${conditionId} is not registered.`);
        }
        delete this.conditions[conditionId];
        return true;
    }

    /**
     * Lists all registered conditions.
     * @returns {string[]} - An array of all registered condition IDs.
     */
    listAllConditions() {
        return Object.keys(this.conditions);
    }
}

module.exports = ConditionEvaluator;
