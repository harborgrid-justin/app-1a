const ConditionsEngineAlpha = require('./engine_one.js');
const OrchestrationEngine = require('./engine_two.js');
const TemporalConditionsEngine = require('./engine_three.js');

class DecisionEngine {
    constructor() {
        this.conditionsEngine = new ConditionsEngineAlpha();
        this.orchestrationEngine = new OrchestrationEngine();
        this.temporalEngine = new TemporalConditionsEngine();
    }

    // Evaluate conditions using the ConditionsEngineAlpha
    evaluateConditions(data, conditions) {
        return this.conditionsEngine.evaluate(conditions, data);
    }

    // Make decisions based on orchestration rules
    orchestrateDecision(data) {
        return this.orchestrationEngine.decide(data);
    }

    // Evaluate temporal conditions
    evaluateTemporalConditions(data, conditions) {
        return this.temporalEngine.evaluate(conditions, data);
    }

    // Comprehensive decision-making function
    makeDecision(data, conditions) {
        const isConditionMet = this.evaluateConditions(data, conditions);
        const orchestrationDecision = this.orchestrateDecision(data);
        const isTemporalConditionMet = this.evaluateTemporalConditions(data, conditions);

        // Combine the results of the three engines to make a final decision
        if (isConditionMet && orchestrationDecision === 'approved' && isTemporalConditionMet) {
            return 'approved';
        } else {
            return 'rejected';
        }
    }

    // Extend with more functionalities as needed
    // ...
}

module.exports = DecisionEngine;
