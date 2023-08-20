// Sample in-memory business rules repository for demonstration. 
// In a real-world scenario, this might be a database or another persistent storage mechanism.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function retrieveRules(filters) {
    // If no filters are provided, return all rules
    if (!filters || Object.keys(filters).length === 0) {
        return businessRulesRepository;
    }

    // Filter the rules based on provided criteria
    return businessRulesRepository.filter(rule => {
        for (let key in filters) {
            if (rule[key] !== filters[key]) {
                return false; // If any filter does not match, exclude the rule
            }
        }
        return true; // All filters matched
    });
}

// Example usage:
const sampleFilters = {
    category: 'Pricing',
    condition: 'productPrice > 100'
};

const rulesList = retrieveRules(sampleFilters);
console.log(rulesList);
