const validFilterFormats = {
    ruleId: value => typeof value === 'string', // Assuming UUIDs as strings
    category: value => typeof value === 'string' && value.trim() !== '',
    condition: value => typeof value === 'string' && value.trim() !== '',
    action: value => typeof value === 'string' && value.trim() !== ''
    // ... add more filters as needed
};

function validateFilters(filters) {
    const errors = [];

    Object.keys(filters).forEach(key => {
        const validator = validFilterFormats[key];

        if (!validator || !validator(filters[key])) {
            errors.push(`Invalid filter format for key: ${key}`);
        }
    });

    if (errors.length > 0) {
        return {
            status: 'error',
            message: errors.join(' | ')
        };
    }

    return {
        status: 'success',
        message: 'All filters are valid.'
    };
}

// Example usage:
const sampleFilters = {
    ruleId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', // UUID format
    category: 'Pricing',
    condition: 'productPrice > 100',
    action: 'applyDiscount'
};

console.log(validateFilters(sampleFilters));
