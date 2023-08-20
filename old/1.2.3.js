// 1.2.3.js

// Sample in-memory business rules repository for demonstration.
// In a real-world scenario, this would likely be a database or other persistent storage.
const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

function retrieveAllRules() {
    return businessRulesRepository;
}

// Example usage:
const allRules = retrieveAllRules();
console.log(allRules);
