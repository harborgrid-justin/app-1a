// ORW001.js

class Task {
    constructor(taskFunc) {
        if (typeof taskFunc !== 'function') {
            throw new Error('Task must be initialized with a function.');
        }
        this.taskFunc = taskFunc;
    }

    execute(data) {
        return this.taskFunc(data);
    }
}

class Workflow {
    constructor() {
        this.tasks = [];
    }

    /**
     * Adds a task to the workflow.
     * @param {Task} task - A task instance.
     */
    addTask(task) {
        if (!(task instanceof Task)) {
            throw new Error('Only instances of Task can be added to the workflow.');
        }
        this.tasks.push(task);
    }

    /**
     * Executes the workflow.
     * @param {object} data - Initial data for the workflow.
     * @returns {Promise<object>} - Final output after executing all tasks.
     */
    async execute(data) {
        let currentData = data;
        for (let task of this.tasks) {
            currentData = await task.execute(currentData);
        }
        return currentData;
    }
}

module.exports = {
    Workflow,
    Task
};
