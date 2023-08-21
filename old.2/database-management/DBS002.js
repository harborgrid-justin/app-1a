// DBS002.js

const mongoose = require('mongoose');

/**
 * Schema for Orchestration Rules.
 */
const OrchestrationRuleSchema = new mongoose.Schema({
    orchestrationID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    tasks: {
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
OrchestrationRuleSchema.pre('save', function(next) {
    this.updatedDate = Date.now();
    next();
});

const OrchestrationRuleModel = mongoose.model('OrchestrationRule', OrchestrationRuleSchema);

module.exports = OrchestrationRuleModel;
