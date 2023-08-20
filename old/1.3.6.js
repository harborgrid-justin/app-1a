// Sample in-memory business rules repository for demonstration.
// In a real-world scenario, this would typically be a database or other persistent storage mechanism.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function updateRuleAndReturnConfirmation(ruleId, updatedData) {
    // Check if the Rule ID exists in the repository
    const ruleIndex = businessRulesRepository.findIndex(rule => rule.id === ruleId);
    
    // If Rule ID doesn't exist, return an error message
    if (ruleIndex === -1) {
        return {
            status: 'error',
            message: 'Rule ID not found in the repository.'
        };
    }
    
    // Update the rule data
    for (let key in updatedData) {
        businessRulesRepository[ruleIndex][key] = updatedData[key];
    }
    
    return {
        status: 'success',
        message: 'Rule data has been successfully updated.'
    };
}

// Example usage:
const sampleRuleId = '1';
const sampleUpdatedData = {
    category: 'Pricing Deluxe',
    condition: 'productPrice > 200',
    action: 'applyDiscount(20%)'
};

console.log(updateRuleAndReturnConfirmation(sampleRuleId, sampleUpdatedData));
