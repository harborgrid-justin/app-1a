const DecisionEngine = require('./engine_four.js');

class Task {
    constructor(id, description, priority = 'medium') {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.status = 'pending';
    }

    complete() {
        this.status = 'completed';
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

class TaskManagementEngine {
    constructor() {
        this.tasks = new Map();
        this.decisionEngine = new DecisionEngine();
    }

    createTask(description, priority) {
        const id = `task-${Date.now()}`;
        const task = new Task(id, description, priority);
        this.tasks.set(id, task);
        return id;
    }

    getTask(id) {
        return this.tasks.get(id);
    }

    completeTask(id) {
        const task = this.getTask(id);
        if (task) {
            task.complete();
        }
    }

    setTaskPriority(id, priority) {
        const task = this.getTask(id);
        if (task) {
            task.setPriority(priority);
        }
    }

    evaluateTask(id, data) {
        const task = this.getTask(id);
        if (!task) return;

        const decision = this.decisionEngine.makeDecision(data, {
            type: 'taskEvaluation',
            taskId: id
        });

        if (decision === 'approved') {
            this.completeTask(id);
        }
    }

    listTasks(filter = {}) {
        const { status, priority } = filter;
        let tasksArray = Array.from(this.tasks.values());

        if (status) {
            tasksArray = tasksArray.filter(task => task.status === status);
        }

        if (priority) {
            tasksArray = tasksArray.filter(task => task.priority === priority);
        }

        return tasksArray;
    }

    // Extend with more functionalities as needed
    // ...
}

module.exports = TaskManagementEngine;
