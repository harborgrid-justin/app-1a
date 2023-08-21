// BRA001.JS is indicative of the Actions class or module within the Business Rule Engine. Actions represent the steps or operations that should be carried out when certain conditions (defined in the Conditions module) are met.
// Actions are defined as functions within the Actions module. Each function is named according to the action it performs. The function name should be descriptive of the action it performs.

// BRA001.js

class Action {
    constructor(id, executeFunc) {
        this.id = id;
        this.executeFunc = executeFunc;
    }

    execute(inputData) {
        return this.executeFunc(inputData);
    }
}

class ActionsManager {
    constructor() {
        this.actions = {};
    }

    addAction(actionId, executeFunc) {
        if (this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} already exists.`);
        }
        this.actions[actionId] = new Action(actionId, executeFunc);
        return actionId;
    }

    updateAction(actionId, updatedExecuteFunc) {
        if (!this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        this.actions[actionId].executeFunc = updatedExecuteFunc;
        return true;
    }

    executeAction(actionId, inputData) {
        if (!this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        return this.actions[actionId].execute(inputData);
    }

    removeAction(actionId) {
        if (!this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        delete this.actions[actionId];
        return true;
    }

    listAllActions() {
        return Object.keys(this.actions);
    }
}

module.exports = ActionsManager;
