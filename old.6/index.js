const ConditionsEngineAlpha = require('./engine_one.js');

const conditionsEngineAlpha = new ConditionsEngineAlpha();

try {
    const condition = {
        type: 'AND',
        conditions: [
            { type: 'NUMERIC_COMPARISON', field: 'age', operator: '>', value: 18 },
            {
                type: 'OR',
                conditions: [
                    { type: 'STRING_COMPARISON', field: 'country', operator: '===', value: 'USA' },
                    { type: 'STRING_COMPARISON', field: 'country', operator: '===', value: 'Canada' }
                ]
            }
        ]
    };

    const data = { age: 25, country: 'USA' };
    const result = conditionsEngineAlpha.evaluate(condition, data);
    console.log(result); // Expected: true
} catch (error) {
    console.error(`Error occurred: ${error.message}`);
}

// Potentially, you can add more features or methods in the app...