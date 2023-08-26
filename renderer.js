const { ConditionsEngineAlpha } = require('./engine_one.js');

const engine = new ConditionsEngineAlpha();

document.getElementById('evaluateBtn').addEventListener('click', () => {
    const dataInput = document.getElementById('dataInput').value;
    const conditionInput = document.getElementById('conditionInput').value;

    let data, condition, result;

    try {
        data = JSON.parse(dataInput);
        condition = JSON.parse(conditionInput);
        result = engine.evaluate(condition, data);
        document.getElementById('resultOutput').innerText = result.toString();
    } catch (error) {
        document.getElementById('resultOutput').innerText = "Error in evaluation!";
    }
});
