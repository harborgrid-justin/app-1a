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
        if (!condition || !data) {
            throw new Error("Invalid input for evaluation.");
        }

        const evaluator = this.evaluators[condition.type];
        if (!evaluator) {
            throw new Error(`Invalid condition type: ${condition.type}`);
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
            case '===': return val === value;  // Ensuring strict comparison
            default: throw new Error(`Invalid numeric operator: ${operator}`);
        }
    }

    evaluateString(condition, data) {
        const val = data[condition.field];
        switch (condition.operator) {
            case '==': return val === condition.value; // Here we use '==' as the condition operator but still use strict comparison in JavaScript
            case 'contains': return val.includes(condition.value);
            default: throw new Error(`Invalid string operator: ${condition.operator}`);
        }
    }
    
    evaluateDate(condition, data) {
        const d1 = new Date(data[condition.field]);
        const d2 = new Date(condition.value);
        return this.evaluateNumeric({
            operator: condition.operator,
            field: d1.getTime(),
            value: d2.getTime()
        }, data);
    }

    evaluateArray(condition, data) {
        const array = data[condition.field];
        switch (condition.operator) {
            case 'includesAll': return condition.values.every(val => array.includes(val));
            case 'includesAny': return condition.values.some(val => array.includes(val));
            default: throw new Error(`Invalid array operator: ${condition.operator}`);
        }
    }

    addCustomFunction(name, func) {
        if (typeof func !== 'function') {
            throw new Error(`Expected a function for custom function: ${name}`);
        }
        this.customFunctions[name] = func;
    }

    evaluateCustomFunction(name, data) {
        if (this.customFunctions[name]) {
            return this.customFunctions[name](data);
        }
        throw new Error(`Function ${name} not found.`);
    }

    on(event, action) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(action);
    }

    trigger(event, data) {
        if (this.eventListeners[event]) {
            for (const action of this.eventListeners[event]) {
                action(data);
            }
        }
    }

    suggestCondition(dataHistory) {
        const suggestions = [];
        const ageSum = dataHistory.reduce((sum, data) => sum + data.age, 0);
        const avgAge = ageSum / dataHistory.length;
        suggestions.push({
            type: 'NUMERIC_COMPARISON',
            field: 'age',
            operator: '<',
            value: avgAge
        });
        return suggestions;
    }
}

module.exports = ConditionsEngineAlpha;