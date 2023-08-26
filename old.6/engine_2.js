class ConditionsEngine {
    constructor() {
        this.customFunctions = {};
        this.eventListeners = {};
    }
    evaluate(condition, data) {
        switch (condition.type) {
            case 'AND':
                return condition.conditions.every(subCondition => this.evaluate(subCondition, data));
            case 'OR':
                return condition.conditions.some(subCondition => this.evaluate(subCondition, data));
            case 'NOT':
                return !this.evaluate(condition.condition, data);
            case 'NUMERIC_COMPARISON':
                return this.evaluateNumeric(condition.operator, data[condition.field], condition.value);
            case 'STRING_COMPARISON':
                return this.evaluateString(condition.operator, data[condition.field], condition.value);
            case 'DATE_COMPARISON':
                return this.evaluateDate(condition.operator, data[condition.field], condition.value);
            case 'ARRAY_OPERATION':
                return this.evaluateArray(condition.operator, data[condition.field], condition.values);
            default:
                throw new Error(`Invalid condition type: ${condition.type}`);
        }
    }

    evaluateNumeric(operator, value1, value2) {
        switch (operator) {
            case '>': return value1 > value2;
            case '<': return value1 < value2;
            case '>=': return value1 >= value2;
            case '<=': return value1 <= value2;
            case '==': return value1 == value2;
            default: throw new Error(`Invalid numeric operator: ${operator}`);
        }
    }

    evaluateString(operator, value1, value2) {
        switch (operator) {
            case '==': return value1 === value2;
            case 'contains': return value1.includes(value2);
            default: throw new Error(`Invalid string operator: ${operator}`);
        }
    }

    evaluateDate(operator, date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return this.evaluateNumeric(operator, d1.getTime(), d2.getTime());
    }

    evaluateArray(operator, array, values) {
        switch (operator) {
            case 'includesAll': return values.every(val => array.includes(val));
            case 'includesAny': return values.some(val => array.includes(val));
            default: throw new Error(`Invalid array operator: ${operator}`);
        }
    }

    addCustomFunction(name, func) {
        this.customFunctions[name] = func;
    }

    evaluateCustomFunction(name, data) {
        if (this.customFunctions[name]) {
            return this.customFunctions[name](data);
        }
        throw new Error(`Function ${name} not found.`);
    }

    // Event Triggers
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

    // Learning Mode (simple suggestion system based on past data evaluations)
    suggestCondition(dataHistory) {
        const suggestions = [];

        // Example: Suggesting a numeric condition based on average
        const ageSum = dataHistory.reduce((sum, data) => sum + data.age, 0);
        const avgAge = ageSum / dataHistory.length;
        suggestions.push({
            type: 'NUMERIC_COMPARISON',
            field: 'age',
            operator: '<',
            value: avgAge
        });

        // More complex suggestions can be added here...

        return suggestions;
    }
}

const conditionsEngine = new ConditionsEngine();

// Example Usage:
const condition = {
    type: 'AND',
    conditions: [
        { type: 'NUMERIC_COMPARISON', field: 'age', operator: '>', value: 18 },
        {
            type: 'OR',
            conditions: [
                { type: 'STRING_COMPARISON', field: 'country', operator: '==', value: 'USA' },
                { type: 'STRING_COMPARISON', field: 'country', operator: '==', value: 'Canada' }
            ]
        }
    ]
};

const data = { age: 25, country: 'USA' };
const result = conditionsEngine.evaluate(condition, data);
console.log(result); // true

/////////////////////////////////////////////////

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
            case '==': return val == value;
            default: throw new Error(`Invalid numeric operator: ${operator}`);
        }
    }

    evaluateString(condition, data) {
        const val = data[condition.field];
        switch (condition.operator) {
            case '==': return val === condition.value;
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

    // ... Rest of the methods remain largely unchanged ...
    
    addCustomFunction(name, func) {
        this.customFunctions[name] = func;
    }

    evaluateCustomFunction(name, data) {
        if (this.customFunctions[name]) {
            return this.customFunctions[name](data);
        }
        throw new Error(`Function ${name} not found.`);
    }

    // Event Triggers
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

    // Learning Mode (simple suggestion system based on past data evaluations)
    suggestCondition(dataHistory) {
        const suggestions = [];

        // Example: Suggesting a numeric condition based on average
        const ageSum = dataHistory.reduce((sum, data) => sum + data.age, 0);
        const avgAge = ageSum / dataHistory.length;
        suggestions.push({
            type: 'NUMERIC_COMPARISON',
            field: 'age',
            operator: '<',
            value: avgAge
        });

        // More complex suggestions can be added here...

        return suggestions;
    }

}

// ... Usage example remains unchanged ...
