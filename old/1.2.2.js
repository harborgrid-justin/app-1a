const businessRulesRepository = [
    { id: '1', category: 'Pricing', condition: 'productPrice > 100', action: 'applyDiscount(10%)' },
    { id: '2', category: 'Shipping', condition: 'weight > 50', action: 'applyExtraShippingFee()' },
    // ... other rules
];

const validFilterFormats = {
    id: value => typeof value === 'string',
    category: value => typeof value === 'string' && value.trim() !== '',
    condition: value => typeof value === 'string' && value.trim() !== '',
    action: value => typeof value === 'string' && value.trim() !== ''
};

function isValidFilter(filters) {
    return Object.keys(filters).every(key => {
        const validator = validFilterFormats[key];
        return validator && validator(filters[key]);
    });
}

function applyFiltersToRepository(filters) {
    // Validate the filters first
    if (!isValidFilter(filters)) {
        return {
            status: 'error',
            message: 'Invalid filters provided.',
            data: []
        };
    }

    // Filter the rules based on provided criteria
    const filteredRules = businessRulesRepository.filter(rule => {
        return Object.keys(filters).every(key => {
            return rule[key].toLowerCase().includes(filters[key].toLowerCase());
        });
    });

    return {
        status: 'success',
        message: `${filteredRules.length} rule(s) found.`,
        data: filteredRules
    };
}

// Example usage:
const sampleFilters = {
    category: 'Pricing',
    condition: 'productPrice'
};

const response = applyFiltersToRepository(sampleFilters);
console.log(response);
