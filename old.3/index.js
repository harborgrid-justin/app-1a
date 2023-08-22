const fs = require('fs');
const path = require('path');

// Load configuration
// const config = require('./config/config.json');

// Load services
const ActionsManager = require('./services/businessRulesEngine/BRA001.js');
const AdvancedActions = require('./services/businessRulesEngine/BRA002.js');
// const BaseRule = require('./services/businessRulesEngine/BRB001.js');
// const AdvancedRule = require('./services/businessRulesEngine/BRB002.js');
// const RuleGroup = require('./services/businessRulesEngine/BRB003.js');
// const BRErrorHandler = require('./services/businessRulesEngine/BRE001.js');
// const ConditionEvaluator = require('./services/businessRulesEngine/BRC001.js');
// const Logger = require('./services/businessRulesEngine/BRL001.js');
const RuleSchema = require('./services/businessRulesEngine/BRR001.js');
const MessagePublisher = require('./services/businessRulesEngine/BRP001.js');
const RuleManagerOne = require('./services/createRule.js');

// Initialize services
// const actionsManager = new ActionsManager();
// const advancedActions = new AdvancedActions();
// const baseRule = new BaseRule();
// const advancedRule = new AdvancedRule();
// const ruleGroup = new RuleGroup();
// const brErrorHandler = new BRErrorHandler();
// const conditionEvaluator = new ConditionEvaluator();
// const logger = new Logger();
// const ruleSchema = new RuleSchema();
// const messagePublisher = new MessagePublisher();

console.log("Services initialized successfully!");

// Sample operation to demonstrate functionality
// This is just a placeholder. You can replace this with actual operations based on your application's requirements.
console.log("Executing a sample operation...");
// baseRule.execute();

const ruleManager = new RuleManagerOne();

// Define conditions and action
const conditions = {
    isAdult: (data) => data.age >= 18
};
console.log("A!");

const action = (data) => {
    console.log(`Action executed for user: ${data.name}`);
};
console.log("B!");

// Create a new rule
const rule = ruleManager.createRule('RULE_001', conditions, action);

// Sample data to test
const userData = {
    name: 'John Doe',
    age: 18
};

// Execute the rule
ruleManager.executeRule(rule, userData);
console.log("C!");