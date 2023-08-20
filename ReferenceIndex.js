// Business Rule Engine imports
const BaseRule = require('./business-rule-engine/BRB001.js');                
const RuleRepository = require('./business-rule-engine/BRR001.js');
const Conditions = require('./business-rule-engine/BRC001.js');
const Actions = require('./business-rule-engine/BRA001.js');
const ServiceRegistry = require('./business-rule-engine/BRS001.js');
const MessagePublisher = require('./business-rule-engine/BRP001.js');
const MessageConsumer = require('./business-rule-engine/BRC002.js');
const Logger = require('./business-rule-engine/BRL001.js');
const ErrorHandler = require('./business-rule-engine/BRE001.js');
const BRConfigDevelopment = require('./config/BRC004.js');
const BRConfigProduction = require('./config/BRC005.js');
const BRConfigTest = require('./config/BRC006.js');

// Orchestration Engine imports
const Workflow = require('./orchestration-engine/ORW001.js');
const Task = require('./orchestration-engine/ORT001.js');
const OrchestrationRepository = require('./orchestration-engine/ORR001.js');
const OrchestrationLogger = require('./orchestration-engine/ORL001.js');
const OrchestrationErrorHandler = require('./orchestration-engine/ORE001.js');
const ORConfigDevelopment = require('./config/ORC002.js');
const ORConfigProduction = require('./config/ORC003.js');
const ORConfigTest = require('./config/ORC004.js');

// Database Management imports
const DatabaseQuery1 = require('./database-management/DBQ001.js');
const DatabaseQuery2 = require('./database-management/DBQ002.js');
const DatabaseConnection1 = require('./database-management/DBC001.js');
const DatabaseConnection2 = require('./database-management/DBC002.js');
const DatabaseTest1 = require('./database-management/DBT001.js');
const DatabaseTest2 = require('./database-management/DBT002.js');

// Data Transformation imports
const DataTransformationModule1 = require('./data-transformation/DTM001.js');
const DataTransformationUtility1 = require('./data-transformation/DTU001.js');
const DataTransformationService1 = require('./data-transformation/DTS001.js');
const DataTransformationError1 = require('./data-transformation/DTE001.js');
const DataTransformationValidation1 = require('./data-transformation/DTV001.js');
const DataTransformationModule2 = require('./data-transformation/DTM002.js');

// State Management imports
const StateService1 = require('./state-management/STS001.js');
const StateService2 = require('./state-management/STS002.js');

// Global Management imports
const GlobalVariables = require('./global-management/GLV001.js');

// Event Management imports
const Event1 = require('./event-management/EVE001.js');
const Event2 = require('./event-management/EVE002.js');
const Event3 = require('./event-management/EVE003.js');

// Notification Management imports
const Notification1 = require('./notification-management/NOT001.js');

// Frontend Framework imports
const FrontendJS1 = require('./frontend-framework/FEJ001.js');
const FrontendHTML1 = require('./frontend-framework/FEH001.js');
const FrontendHTML2 = require('./frontend-framework/FEH002.js');
const FrontendUtility1 = require('./frontend-framework/FEU001.js');
const FrontendComponent1 = require('./frontend-framework/FEC001.js');
const FrontendJS2 = require('./frontend-framework/FEJ002.js');
const FrontendServiceWorker = require('./frontend-framework/FESW001.js');
const FrontendServiceMesh1 = require('./frontend-framework/FESM001.js');

// Memory Management imports
const MemoryManagement1 = require('./memory-management/MEM001.js');
const MemoryManagement6 = require('./memory-management/MEM006.js');

// Documentation imports
// Note: Documentation files are typically not imported in this way since they are not JavaScript files.
// However, for the sake of this structure, I'm including them here.
const Doc1 = './documentation/DOC001.md';
const Doc2 = './documentation/DOC002.md';
const Doc3 = './documentation/DOC003.md';
const Doc4 = './documentation/DOC004.md';
const Doc5 = './documentation/DOC005.md';
const Doc6 = './documentation/DOC006.md';

module.exports = {
    // Business Rule Engine exports
    BaseRule,
    RuleRepository,
    Conditions,
    Actions,
    ServiceRegistry,
    MessagePublisher,
    MessageConsumer,
    Logger,
    ErrorHandler,
    BRConfigDevelopment,
    BRConfigProduction,
    BRConfigTest,

    // Orchestration Engine exports
    Workflow,
    Task,
    OrchestrationRepository,
    OrchestrationLogger,
    OrchestrationErrorHandler,
    ORConfigDevelopment,
    ORConfigProduction,
    ORConfigTest,

    // Database Management exports
    DatabaseQuery1,
    DatabaseQuery2,
    DatabaseConnection1,
    DatabaseConnection2,
    DatabaseTest1,
    DatabaseTest2,

    // Data Transformation exports
    DataTransformationModule1,
    DataTransformationUtility1,
    DataTransformationService1,
    DataTransformationError1,
    DataTransformationValidation1,
    DataTransformationModule2,

    // State Management exports
    StateService1,
    StateService2,

    // Global Management exports
    GlobalVariables,

    // Event Management exports
    Event1,
    Event2,
    Event3,

    // Notification Management exports
    Notification1,

    // Frontend Framework exports
    FrontendJS1,
    FrontendHTML1,
    FrontendHTML2,
    FrontendUtility1,
    FrontendComponent1,
    FrontendJS2,
    FrontendServiceWorker,
    FrontendServiceMesh1,

    // Memory Management exports
    MemoryManagement1,
    MemoryManagement6,

    // Documentation exports
    Doc1,
    Doc2,
    Doc3,
    Doc4,
    Doc5,
    Doc6
};
