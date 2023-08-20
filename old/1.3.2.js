// Predefined formats for valid rule data.
// This is a basic example and should be tailored to specific needs.
const validRuleDataFormats = {
    category: value => typeof value === 'string' && value.trim() !== '',
    condition: value => typeof value === 'string' && value.trim() !== '',
    action: value => typeof value === 'string' && value.trim() !== ''
    // ... you can add more fields as needed
};

function validateUpdatedRuleData(updatedData) {
    for (let key in updatedData) {
        const validator = validRuleDataFormats[key];
        
        // If the key is not recognized or the value doesn't match the valid format, return an error
        if (!validator || !validator(updatedData[key])) {
            return {
                status: 'error',
                message: `Invalid data format for key: ${key}`
            };
        }
    }

    return {
        status: 'success',
        message: 'All updated data is valid.'
    };
}

// Example usage:
const sampleUpdatedData = {
    category: 'Pricing',
    condition: 'productPrice > 150',
    action: 'applyDiscount(15%)'
};

console.log(validateUpdatedRuleData(sampleUpdatedData));
