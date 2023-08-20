// Utility function to validate if a property is a non-empty string
function isNonEmptyString(data) {
    return typeof data === 'string' && data.trim() !== '';
}

// A list of rules to validate ruleData
const rules = [
    {
        property: 'condition',
        validate: isNonEmptyString,
        errorMessage: 'Condition must be a non-empty string.'
    },
    {
        property: 'action',
        validate: isNonEmptyString,
        errorMessage: 'Action must be a non-empty string.'
    }
    // ... add more validation rules as needed
];

function validateRuleData(ruleData) {
    let errors = [];

    // Apply each rule on the ruleData
    for (let rule of rules) {
        if (!rule.validate(ruleData[rule.property])) {
            errors.push(rule.errorMessage);
        }
    }

    if (errors.length === 0) {
        return {
            status: 'success',
            message: 'Rule data is valid.'
        };
    } else {
        return {
            status: 'error',
            message: errors.join(' ')
        };
    }
}

// Example usage:
const ruleDataExample = {
    condition: 'productPrice > 100',
    action: 'applyDiscount(10%)'
};

console.log(validateRuleData(ruleDataExample));
