class InvalidConditionError extends Error {}
class InvalidOperatorError extends Error {}

class ConditionsEngineAlpha {
    constructor() {
        this.customFunctions = {};
        this.eventListeners = {};
        this.evaluators = {
            'AND': this.evaluateAnd.bind(this),
            'OR': this.evaluateOr.bind(this),
            'NOT': this.evaluateNot.bind(this),
            'NUMERIC_COMPARISON': this.evaluateNumeric.bind(this),
            'STRING_COMPARISON': this.evaluateString.bind(this),
            'DATE_COMPARISON': this.evaluateDate.bind(this),
            'ARRAY_OPERATION': this.evaluateArray.bind(this)
        };
    }

    evaluate(condition, data) {
        if (!condition || typeof condition !== 'object' || !data || typeof data !== 'object') {
            throw new InvalidConditionError("Invalid input for evaluation.");
        }

        const evaluator = this.evaluators[condition.type];
        if (!evaluator) {
            throw new InvalidOperatorError(`Invalid condition type: ${condition.type}`);
        }
        return evaluator(condition, data);
    }

    evaluateAnd(condition, data) {
        return condition.conditions.every(subCondition => this.evaluate(subCondition, data));
    }

    evaluateOr(condition, data) {
        return condition.conditions.some(subCondition => this.evaluate(subCondition, data));
    }

    evaluateNot(condition, data) {
        return !this.evaluate(condition.condition, data);
    }

    evaluateNumeric(condition, data) {
        const { operator, field, value } = condition;
        const val = data[field];
        switch (operator) {
            case '>': return val > value;
            case '<': return val < value;
            case '>=': return val >= value;
            case '<=': return val <= value;
            case '===': return val === value;
            default: throw new Error(`Invalid numeric operator: ${operator}`);
        }
    }

    evaluateString(condition, data) {
        const val = data[condition.field];
        switch (condition.operator) {
            case 'eq': return val === condition.value;
            case 'contains': return val.includes(condition.value);
            default: throw new InvalidOperatorError(`Invalid string operator: ${condition.operator}`);
        }
    }

    evaluateDate(condition, data) {
        const d1 = new Date(data[condition.field]);
        const d2 = new Date(condition.value);
        if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
            throw new InvalidConditionError("Invalid date format.");
        }
        switch (condition.operator) {
            case 'gt': return d1 > d2;
            case 'lt': return d1 < d2;
            case 'eq': return d1.getTime() === d2.getTime();
            default: throw new InvalidOperatorError(`Invalid date operator: ${condition.operator}`);
        }
    }

    evaluateArray(condition, data) {
        const array = data[condition.field];
        if (!Array.isArray(array)) {
            throw new InvalidConditionError("Expected an array for evaluation.");
        }
        switch (condition.operator) {
            case 'includesAll': return condition.values.every(val => array.includes(val));
            case 'includesAny': return condition.values.some(val => array.includes(val));
            default: throw new InvalidOperatorError(`Invalid array operator: ${condition.operator}`);
        }
    }

    addCustomFunction(name, func) {
        if (typeof func !== 'function') {
            throw new TypeError(`Expected a function for custom function: ${name}`);
        }
        this.customFunctions[name] = func;
    }

    evaluateCustomFunction(name, data) {
        const customFunc = this.customFunctions[name];
        if (!customFunc) {
            throw new Error(`Function ${name} not found.`);
        }
        return customFunc(data);
    }

    on(event, action) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(action);
    }

    trigger(event, data) {
        const listeners = this.eventListeners[event];
        if (listeners) {
            listeners.forEach(action => action(data));
        }
    }

    suggestCondition(dataHistory) {
        if (!Array.isArray(dataHistory)) {
            throw new InvalidConditionError("Expected an array for data history.");
        }
        const suggestions = [];
        const ageSum = dataHistory.reduce((sum, data) => sum + (data.age || 0), 0);
        const avgAge = ageSum / dataHistory.length;
        suggestions.push({
            type: 'NUMERIC_COMPARISON',
            field: 'age',
            operator: 'lt',
            value: avgAge
        });
        return suggestions;
    }
}

module.exports = ConditionsEngineAlpha;