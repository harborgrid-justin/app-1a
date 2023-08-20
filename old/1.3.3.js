// Sample in-memory business rules repository for demonstration.
// In a real-world scenario, this would typically be a database or other persistent storage mechanism.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function ruleIdExists(ruleId) {
    // Check if the Rule ID exists in the repository
    const ruleExists = businessRulesRepository.some(rule => rule.id === ruleId);
    
    if (ruleExists) {
        return {
            status: 'success',
            message: 'Rule ID found in the repository.'
        };
    } else {
        return {
            status: 'error',
            message: 'Rule ID not found in the repository.'
        };
    }
}

// Example usage:
const sampleRuleId = '1';
console.log(ruleIdExists(sampleRuleId));
