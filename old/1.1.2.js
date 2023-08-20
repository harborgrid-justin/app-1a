// Assuming this array represents the existing rules in the system
const existingRules = [
    {
        condition: 'productPrice > 100',
        action: 'applyDiscount(10%)'
    },
    // ... other rules
];

// Utility function to check if two conditions are conflicting
// This is a simple example and may be expanded based on more complex business logic
function isConflictingCondition(existingCondition, newCondition) {
    // For example, if one condition is "productPrice > 100" and another is "productPrice <= 100"
    // These two are conflicting conditions
    return existingCondition.replace('>', '<=') === newCondition || 
           existingCondition.replace('<', '>=') === newCondition;
}

function checkForDuplicateOrConflictingRules(newRule) {
    let duplicateFound = existingRules.some(rule => 
        rule.condition === newRule.condition && rule.action === newRule.action
    );

    if (duplicateFound) {
        return {
            status: 'error',
            message: 'Duplicate rule found in the system.'
        };
    }

    let conflictingRuleFound = existingRules.some(rule => 
        isConflictingCondition(rule.condition, newRule.condition) && 
        rule.action !== newRule.action
    );

    if (conflictingRuleFound) {
        return {
            status: 'error',
            message: 'Conflicting rule found in the system.'
        };
    }

    return {
        status: 'success',
        message: 'No duplicates or conflicting rules found.'
    };
}

// Example usage:
const newRuleExample = {
    condition: 'productPrice > 100',
    action: 'applyDiscount(10%)'
};

console.log(checkForDuplicateOrConflictingRules(newRuleExample));


console.log(checkForDuplicateOrConflictingRules(newRuleExample));
