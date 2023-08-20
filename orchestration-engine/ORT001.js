// ORT001.js

class Task {
    constructor(id, executeFunc, dependencies = []) {
        this.id = id;
        this.executeFunc = executeFunc;
        this.dependencies = dependencies;
        this.status = 'pending'; // possible values: 'pending', 'running', 'completed', 'failed'
    }

    // Executes the task's function
    execute(inputData) {
        this.status = 'running';
        try {
            let result = this.executeFunc(inputData);
            this.status = 'completed';
            return result;
        } catch (error) {
            this.status = 'failed';
            throw error;
        }
    }

    // Checks if all dependencies are completed
    canExecute(tasks) {
        for (let dep of this.dependencies) {
            if (tasks[dep].status !== 'completed') {
                return false;
            }
        }
        return true;
    }
}

class TaskManager {
    constructor() {
        this.tasks = {};
    }

    addTask(taskId, executeFunc, dependencies = []) {
        if (this.tasks[taskId]) {
            throw new Error(`Task with ID ${taskId} already exists.`);
        }
        this.tasks[taskId] = new Task(taskId, executeFunc, dependencies);
        return taskId;
    }

    updateTask(taskId, updatedExecuteFunc, updatedDependencies) {
        if (!this.tasks[taskId]) {
            throw new Error(`Task with ID ${taskId} does not exist.`);
        }
        this.tasks[taskId].executeFunc = updatedExecuteFunc;
        this.tasks[taskId].dependencies = updatedDependencies;
        return true;
    }

    executeTask(taskId, inputData) {
        if (!this.tasks[taskId]) {
            throw new Error(`Task with ID ${taskId} does not exist.`);
        }
        if (!this.tasks[taskId].canExecute(this.tasks)) {
            throw new Error(`Task with ID ${taskId} has uncompleted dependencies.`);
        }
        return this.tasks[taskId].execute(inputData);
    }

    removeTask(taskId) {
        if (!this.tasks[taskId]) {
            throw new Error(`Task with ID ${taskId} does not exist.`);
        }
        delete this.tasks[taskId];
        return true;
    }

    listAllTasks() {
        return Object.keys(this.tasks);
    }
}

module.exports = TaskManager;
