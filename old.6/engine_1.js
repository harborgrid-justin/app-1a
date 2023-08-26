class OrchestrationEngine {
    constructor() {
        this.rules = new Map();
        this.decisions = new Map();
        this.taskQueue = [];
        this.subscribers = [];
    }

    addRule(name, fn, weight = 1) {
        this.rules.set(name, { fn, weight });
        return this;
    }

    decide(data) {
        let decisionPoints = 0;
        let decisionMade = 'default';

        for (const [name, rule] of this.rules.entries()) {
            const result = rule.fn(data);
            if (result === "requiresHuman") {
                this.taskQueue.push({ task: name, data });
                this.notifySubscribers({ type: 'task', data: { task: name, data } });
            } else if (this.decisions.has(result) && rule.weight > decisionPoints) {
                decisionPoints = rule.weight;
                decisionMade = result;
                break;  // Shockingly innovative: Stop further evaluations once we have a decision.
            }
        }

        this.notifySubscribers({ type: 'decision', data: decisionMade });
        return decisionMade;
    }

    addDecision(name) {
        this.decisions.set(name, true);
        return this;
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    notifySubscribers(notification) {
        this.subscribers.forEach(fn => fn(notification));
    }

    getTasks() {
        return this.taskQueue;
    }

    async fetchData(query) {
        // Pseudocode: Use MongoDB Node.js driver methods.
        let data = await MongoDB.find(query);
        return data;
    }

    async storeDecision(decision) {
        // Pseudocode: Store decision in MongoDB.
        await MongoDB.insert({ decision, timestamp: Date.now() });
    }

    sendDecision(decision) {
        // Pseudocode: Use WebSockets or similar to push this to the frontend.
        FrontendAPI.pushNotification({ type: 'decision', data: decision });
    }

    sendTask(task) {
        // Pseudocode: Use WebSockets or similar to push this to the frontend.
        FrontendAPI.pushNotification({ type: 'task', data: task });
    }
    
}

// Usage:
const engine = new OrchestrationEngine()
    .addRule('budgetCheck', data => data.budget > 5000 ? 'premium' : 'standard', 2)
    .addRule('timeCheck', data => data.time < 3 ? 'express' : 'standard', 1)
    .addRule('accountCheck', data => data.isVerified ? true : "requiresHuman", 1)
    .addDecision('premium')
    .addDecision('express')
    .addDecision('standard')
    .subscribe(notification => {
        console.log(`Received notification of type ${notification.type}:`, notification.data);
    });

let project = {
    budget: 6000,
    time: 2,
    isVerified: false
};

console.log(engine.decide(project));
