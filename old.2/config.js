const path = require('path');

module.exports = {
    // Server settings
    server: {
        port: process.env.PORT || 3000,
    },

    // Database settings
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'business_rules_db',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        reconnectTries: process.env.DB_RECONNECT_TRIES || 5,
    },

    // Business Rules Engine settings
    businessRules: {
        rulesDirectory: path.join(__dirname, '../business-rule-engine/rules'),
        maxConditions: 100,
        maxActions: 50,
    },

    // Orchestration settings
    orchestration: {
        workflowsDirectory: path.join(__dirname, '../orchestration-engine/workflows'),
        maxTasks: 1000,
        retryLimit: 5,
    },

    // Logging
    logging: {
        level: process.env.LOG_LEVEL || 'info',
        logDirectory: path.join(__dirname, '../logs'),
    },

    // State Management
    stateManagement: {
        stateDirectory: path.join(__dirname, '../state-management/states'),
    },

    // Data Transformation
    dataTransformation: {
        transformationDirectory: path.join(__dirname, '../data-transformation/transformations'),
        maxTransformations: 100,
    },

    // Storage Management
    storage: {
        storageDirectory: path.join(__dirname, '../storage'),
        maxStorageSize: process.env.MAX_STORAGE_SIZE || '10GB',
    },

    // Frontend Framework
    frontend: {
        assetsDirectory: path.join(__dirname, '../frontend-framework/assets'),
        maxAssetSize: process.env.MAX_ASSET_SIZE || '5MB',
    },

    // Human Task Management
    humanTask: {
        taskDirectory: path.join(__dirname, '../human-task-management/tasks'),
        maxActiveTasks: 1000,
    },

    // Error Management
    errorManagement: {
        errorDirectory: path.join(__dirname, '../error-management/errors'),
        maxLoggedErrors: 10000,
    },

    // Compensation Management
    compensation: {
        compensationDirectory: path.join(__dirname, '../compensation-management/compensations'),
        maxCompensations: 100,
    },

    // Task Dependency Management
    taskDependency: {
        dependencyDirectory: path.join(__dirname, '../task-dependency-management/dependencies'),
        maxDependencies: 500,
    },

    // REST API
    restAPI: {
        apiVersion: process.env.API_VERSION || 'v1',
        apiDirectory: path.join(__dirname, '../rest-api'),
        rateLimit: process.env.RATE_LIMIT || 100, // requests per minute
    },

    // External Module Management
    externalModules: {
        modulesDirectory: path.join(__dirname, '../external-module-management/modules'),
    },

    // Utility Services
    utilityServices: {
        utilityDirectory: path.join(__dirname, '../utility-services/utilities'),
    },

    // And any other services or configurations you might need...
};

