const BaseRule = require('./businessRulesEngine/BRB001.js');
const ConditionEvaluator = require('./businessRulesEngine/BRC001.js');

class RuleManager {
    constructor() {
        this.evaluator = new ConditionEvaluator();
        console.log("A1!");
    }

    createRule(ruleId, conditions, action) {
        // Register conditions with the evaluator
        for (let conditionId in conditions) {
            this.evaluator.registerCondition(conditionId, conditions[conditionId]);
            console.log("B1!");
        }
    
        // Create a new BaseRule instance
        const ruleConditions = Object.keys(conditions);
        return new BaseRule(ruleId, ruleConditions, action);
        console.log("C1!");
    }    

    executeRule(rule, data) {
        // Evaluate conditions using the ConditionEvaluator
        for (let conditionId of rule.conditions) {
            if (!this.evaluator.evaluate(conditionId, data)) {
                return; // Condition not met, so exit
                console.log("D1!");
            }
        }
    
        // If all conditions are met, execute the rule's action
        rule.execute(data);
    }    
}

module.exports = RuleManager;

