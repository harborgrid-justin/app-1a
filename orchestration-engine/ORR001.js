// ORR001.js

class OrchestrationRepository {
    constructor() {
        this.workflows = {}; // In-memory storage for workflows
    }

    /**
     * Saves a workflow to the repository.
     * @param {string} workflowId - Unique identifier for the workflow.
     * @param {object} workflow - Workflow instance.
     */
    save(workflowId, workflow) {
        if (this.workflows[workflowId]) {
            throw new Error(`Workflow with ID ${workflowId} already exists.`);
        }
        this.workflows[workflowId] = workflow;
    }

    /**
     * Retrieves a workflow from the repository.
     * @param {string} workflowId - Unique identifier for the workflow.
     * @returns {object} - Workflow instance.
     */
    get(workflowId) {
        const workflow = this.workflows[workflowId];
        if (!workflow) {
            throw new Error(`Workflow with ID ${workflowId} not found.`);
        }
        return workflow;
    }

    /**
     * Deletes a workflow from the repository.
     * @param {string} workflowId - Unique identifier for the workflow.
     */
    delete(workflowId) {
        if (!this.workflows[workflowId]) {
            throw new Error(`Workflow with ID ${workflowId} not found.`);
        }
        delete this.workflows[workflowId];
    }

    /**
     * Checks if a workflow exists in the repository.
     * @param {string} workflowId - Unique identifier for the workflow.
     * @returns {boolean} - True if the workflow exists, otherwise false.
     */
    exists(workflowId) {
        return !!this.workflows[workflowId];
    }
}

module.exports = OrchestrationRepository;
