const AdvancedDecisionEngine = require('./engine_four.js');
const DynamicTaskEngine = require('./engine_five.js');

class IntegratedEngine {
    constructor() {
        this.advancedDecisionEngine = new AdvancedDecisionEngine();
        this.dynamicTaskEngine = new DynamicTaskEngine();
    }

    addTask(task) {
        this.dynamicTaskEngine.addTask(task);
    }

    assignTask(data) {
        const task = this.dynamicTaskEngine.getTask();
        const decision = this.advancedDecisionEngine.evaluateDecision(data);
        if (decision === 'approve') {
            return task;
        } else {
            // Re-add the task if the decision is not to approve
            this.addTask(task);
            return null;
        }
    }
}

module.exports = IntegratedEngine;
