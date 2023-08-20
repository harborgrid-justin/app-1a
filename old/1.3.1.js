// Sample in-memory business rules repository for demonstration.
// In a real-world scenario, this would typically be a database or other persistent storage mechanism.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function isValidUUID(value) {
    // A very basic UUID validation regex. For stricter validation, consider a more comprehensive regex or a library.
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(value);
}

function validateRuleId(ruleId) {
    // Check if the Rule ID is in the correct UUID format
    if (!isValidUUID(ruleId)) {
        return {
            status: 'error',
            message: 'Invalid Rule ID format.'
        };
    }
    
    // Check if the Rule ID exists in the repository
    const ruleExists = businessRulesRepository.some(rule => rule.id === ruleId);
    if (!ruleExists) {
        return {
            status: 'error',
            message: 'Rule ID not found in the repository.'
        };
    }

    return {
        status: 'success',
        message: 'Valid Rule ID.'
    };
}

// Example usage:
const sampleRuleId = '1'; // Assuming IDs are UUIDs. Here, it's just a simple string for demonstration.
console.log(validateRuleId(sampleRuleId));
