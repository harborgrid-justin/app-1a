const ConditionsEngineAlpha = require('./engine_one');

const engine = new ConditionsEngineAlpha();

// 1. Testing basic condition evaluation
const testConditionEvaluation = () => {
    const condition1 = {
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

    const data1 = { age: 25, country: 'USA' };
    console.log(engine.evaluate(condition1, data1)); // Should print true

    const condition2 = {
        type: 'NOT',
        condition: { type: 'STRING_COMPARISON', field: 'name', operator: '==', value: 'Alice' }
    };
    
    const data2 = { name: 'Bob' };
    console.log(engine.evaluate(condition2, data2)); // Should print true
};

// 2. Testing custom functions
const testCustomFunctions = () => {
    engine.addCustomFunction('isAdult', (data) => {
        return data.age && data.age > 18;
    });

    console.log(engine.evaluateCustomFunction('isAdult', { age: 20 })); // Should print true
};

// 3. Testing event triggers
const testEventTriggers = () => {
    engine.on('dataEvaluated', (data) => {
        console.log(`Data evaluated for: ${data.name}`);
    });

    engine.trigger('dataEvaluated', { name: 'Charlie' }); // Should print "Data evaluated for: Charlie"
};

// 4. Testing suggestion system
const testSuggestionSystem = () => {
    const dataHistory = [
        { age: 20, country: 'USA' },
        { age: 25, country: 'Canada' },
        { age: 30, country: 'UK' }
    ];
    const suggestions = engine.suggestCondition(dataHistory);
    console.log(suggestions); // Should print an array of suggestions, one of which might be based on the average age
};

// Run the tests
testConditionEvaluation();
testCustomFunctions();
testEventTriggers();
testSuggestionSystem();