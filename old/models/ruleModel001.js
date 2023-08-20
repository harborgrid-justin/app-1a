const mongoose = require('mongoose');

// Define the schema for the rules
const ruleSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
    condition: {
        type: String,
        required: true,
        trim: true
    },
    action: {
        type: String,
        required: true,
        trim: true
    },
    // Additional fields can be added here as needed
},
{
    timestamps: true  // This will add createdAt and updatedAt fields
});

// Create a model from the schema
const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
