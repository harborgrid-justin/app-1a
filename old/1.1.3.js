class BusinessRulesEngine {
    constructor() {
        this.businessRulesRepository = [];
        this.lastRuleId = 0;  // To track the last assigned rule ID
    }

    isDuplicateOrConflicting(newRule) {
        let duplicateFound = this.businessRulesRepository.some(rule => 
            rule.condition === newRule.condition && rule.action === newRule.action
        );

        if (duplicateFound) {
            return {
                isDuplicate: true,
                message: 'Duplicate rule found in the system.'
            };
        }

        // This is the same isConflictingCondition function from the previous code
        let conflictingRuleFound = this.businessRulesRepository.some(rule => 
            this.isConflictingCondition(rule.condition, newRule.condition) && 
            rule.action !== newRule.action
        );

        if (conflictingRuleFound) {
            return {
                isConflict: true,
                message: 'Conflicting rule found in the system.'
            };
        }

        return {};
    }

    isConflictingCondition(existingCondition, newCondition) {
        return existingCondition.replace('>', '<=') === newCondition || 
               existingCondition.replace('<', '>=') === newCondition;
    }

    saveRuleToRepository(ruleData) {
        const { isDuplicate, isConflict, message } = this.isDuplicateOrConflicting(ruleData);
        if (isDuplicate || isConflict) {
            return {
                status: 'error',
                message: message
            };
        }

        this.lastRuleId += 1;
        ruleData.id = this.lastRuleId;

        this.businessRulesRepository.push(ruleData);

        return {
            status: 'success',
            message: 'Rule data has been stored successfully.',
            ruleId: this.lastRuleId
        };
    }
}

// Example usage:
const ruleEngine = new BusinessRulesEngine();
const ruleDataExample = {
    condition: 'productPrice > 150',
    action: 'applyDiscount(15%)'
};

console.log(ruleEngine.saveRuleToRepository(ruleDataExample));
console.log(ruleEngine.businessRulesRepository);
