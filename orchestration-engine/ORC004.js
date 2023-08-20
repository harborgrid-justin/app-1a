// ORC004.js - Test Configuration for Orchestration Engine

const testConfig = {
    database: {
        host: 'localhost',
        port: 27017,
        name: 'testOrchestrationDB'
    },
    logging: {
        level: 'debug', // Verbose logging for tests
        destination: './logs/test.log'
    },
    serviceEndpoints: {
        taskService: 'http://localhost:8082/tasks',
        workflowService: 'http://localhost:8083/workflows'
    },
    authentication: {
        jwtSecret: 'testSecretKey'
    }
};

module.exports = testConfig;
