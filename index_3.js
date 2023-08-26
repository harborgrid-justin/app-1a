const readline = require('readline');
const ConditionsEngineAlpha = require('./engine_one');

const engine = new ConditionsEngineAlpha();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dataHistory = []; // Store data for suggesting conditions

function mainPrompt() {
    rl.question('Choose an option:\n1. Add data\n2. Test condition\n3. Get suggestion\n4. Exit\n', choice => {
        switch(choice) {
            case '1':
                addDataPrompt();
                break;
            case '2':
                testConditionPrompt();
                break;
            case '3':
                getSuggestion();
                break;
            case '4':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please choose again.');
                mainPrompt();
                break;
        }
    });
}

function addDataPrompt() {
    rl.question('Enter data in JSON format (e.g. {"age": 25, "country": "USA"}):\n', dataInput => {
        try {
            const data = JSON.parse(dataInput);
            dataHistory.push(data);
            console.log('Data added successfully.');
        } catch (error) {
            console.log('Invalid JSON format. Please try again.');
        }
        mainPrompt();
    });
}

function testConditionPrompt() {
    rl.question('Enter condition in JSON format:\n', conditionInput => {
        try {
            const condition = JSON.parse(conditionInput);
            const result = engine.evaluate(condition, dataHistory[dataHistory.length - 1]);
            console.log(`Evaluation result: ${result}`);
        } catch (error) {
            console.log('Invalid condition or error in evaluation. Please try again.');
        }
        mainPrompt();
    });
}

function getSuggestion() {
    const suggestions = engine.suggestCondition(dataHistory);
    console.log('Suggested conditions:', suggestions);
    mainPrompt();
}

// Start the prompt
mainPrompt();