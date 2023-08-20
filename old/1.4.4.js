// Sample in-memory business rules repository for demonstration.
// In a real-world scenario, this would typically be a database or other persistent storage mechanism.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function deleteRuleAndReturnConfirmation(ruleId) {
    // Find the index of the rule by Rule ID
    const ruleIndex = businessRulesRepository.findIndex(rule => rule.id === ruleId);
    
    // If Rule ID doesn't exist, return an error message
    if (ruleIndex === -1) {
        return {
            status: 'error',
            message: 'Rule ID not found in the repository.'
        };
    }
    
    // Delete the rule from the repository
    businessRulesRepository.splice(ruleIndex, 1);
    
    return {
        status: 'success',
        message: 'Rule has been successfully deleted.'
    };
}

// Example usage:
const sampleRuleId = '1';
console.log(deleteRuleAndReturnConfirmation(sampleRuleId));
