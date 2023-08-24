// Business Rule Evaluation Functions
function evaluateCondition(action, condition) {
    const fieldValue = getNestedValue(action, condition.field);
    switch (condition.operator) {
        case "exists":
            return !!fieldValue;
        case "equals":
            return fieldValue === condition.value;
        case "notEquals":
            return fieldValue !== condition.value;
        // ... other operators can be added as needed
        default:
            return false;
    }
}

function evaluateBusinessRule(action, rule) {
    const results = rule.conditions.map(condition => evaluateCondition(action, condition));
    if (rule.logic === "AND") {
        return results.every(result => result);
    } else if (rule.logic === "OR") {
        return results.some(result => result);
    }
    return false;
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Orchestration Engine and Workflows
class OrchestrationEngine {
    constructor() {
        this.workflows = {
            "WF-001": new ReviewWorkflow(),
            "WF-002": new ApprovalWorkflow()
        };
    }

    processAction(action) {
        if (!action.orchestration || !action.orchestration.currentWorkflowId) {
            console.error('Orchestration details or currentWorkflowId missing from the action.');
            return;
        }

        const currentWorkflow = this.workflows[action.orchestration.currentWorkflowId];
        if (!currentWorkflow) {
            console.error(`Workflow with ID ${action.orchestration.currentWorkflowId} not found.`);
            return;
        }

        const outcome = currentWorkflow.execute(action);

        // Update the action's orchestration history
        action.orchestration.history.push({
            workflowId: action.orchestration.currentWorkflowId,
            timestamp: new Date().toISOString(),
            outcome: outcome
        });

        // Determine the next workflow based on the outcome
        if (outcome === "Reviewed") {
            action.orchestration.currentWorkflowId = "WF-002";
            this.processAction(action);
        }
    }
}

class ReviewWorkflow {
    execute(action) {
        console.log(`Processing action ${action.id} in Review Workflow.`);
        if (action.properties.priority === "High" && action.properties.status === "Pending") {
            console.log(`Action ${action.id} has been reviewed.`);
            return "Reviewed";
        } else {
            console.log(`Action ${action.id} needs further review.`);
            return "Needs Further Review";
        }
    }
}

class ApprovalWorkflow {
    execute(action) {
        console.log(`Processing action ${action.id} in Approval Workflow.`);
        if (action.properties.assignee.role === "Reviewer") {
            console.log(`Action ${action.id} has been approved.`);
            return "Approved";
        } else {
            console.log(`Action ${action.id} has been rejected.`);
            return "Rejected";
        }
    }
}

module.exports = {
    OrchestrationEngine,
    ReviewWorkflow,
    ApprovalWorkflow,
    evaluateBusinessRule
};
