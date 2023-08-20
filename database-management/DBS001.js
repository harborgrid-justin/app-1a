// DBS001.js

const mongoose = require('mongoose');

/**
 * Schema for Business Rules.
 */
const BusinessRuleSchema = new mongoose.Schema({
    ruleID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    conditions: {
        type: Array,
        default: []
    },
    actions: {
        type: Array,
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    metadata: {
        type: Object,
        default: {}
    }
});

/**
 * Before saving, update the 'updatedDate'.
 */
BusinessRuleSchema.pre('save', function(next) {
    this.updatedDate = Date.now();
    next();
});

const BusinessRuleModel = mongoose.model('BusinessRule', BusinessRuleSchema);

module.exports = BusinessRuleModel;
