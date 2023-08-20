const { v4: uuidv4 } = require('uuid');

class RuleEngine {
    constructor() {
        this.ruleRepository = [];
    }

    generateUniqueRuleId() {
        return uuidv4();
    }

    _createMetadata(inputMetadata) {
        const defaultMetadata = {
            createdBy: 'Unknown',
            createdAt: new Date().toISOString(),
            lastModifiedBy: 'Unknown',
            lastModifiedAt: new Date().toISOString(),
            ruleVersion: 1
        };

        return { ...defaultMetadata, ...inputMetadata };
    }

    isValidRuleData(ruleData) {
        // Simple validation for now, can be expanded as needed
        return ruleData.condition && ruleData.action;
    }

    createRule(ruleData) {
        if (!this.isValidRuleData(ruleData)) {
            return {
                status: 'error',
                message: 'Invalid rule data provided.'
            };
        }

        const ruleId = this.generateUniqueRuleId();
        const metadata = this._createMetadata(ruleData.metadata);

        const newRule = {
            id: ruleId,
            condition: ruleData.condition,
            action: ruleData.action,
            metadata: metadata
        };

        this.ruleRepository.push(newRule);

        return {
            status: 'success',
            message: 'Rule has been successfully created.',
            ruleId: ruleId
        };
    }

    updateRule(ruleId, updatedData) {
        const ruleIndex = this.ruleRepository.findIndex(rule => rule.id === ruleId);
        if (ruleIndex === -1) {
            return {
                status: 'error',
                message: 'Rule not found.'
            };
        }

        const currentRule = this.ruleRepository[ruleIndex];
        const updatedMetadata = {
            ...currentRule.metadata,
            ...updatedData.metadata,
            ruleVersion: currentRule.metadata.ruleVersion + 1,
            lastModifiedAt: new Date().toISOString()
        };

        const updatedRule = {
            ...currentRule,
            ...updatedData,
            metadata: updatedMetadata
        };

        this.ruleRepository[ruleIndex] = updatedRule;

        return {
            status: 'success',
            message: 'Rule has been successfully updated.'
        };
    }
}

// Example usage:
const ruleEngine = new RuleEngine();

const ruleDataExample = {
    condition: 'productPrice > 300',
    action: 'applyDiscount(30%)',
    metadata: {
        createdBy: 'SystemAdmin',
        createdAt: new Date().toISOString()
    }
};

const response = ruleEngine.createRule(ruleDataExample);
console.log(response);
console.log('Current rule repository:', ruleEngine.ruleRepository);
