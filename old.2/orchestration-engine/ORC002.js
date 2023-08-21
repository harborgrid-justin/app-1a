// ORC002.js - Development Configuration for Orchestration Engine

const devConfig = {
    database: {
        host: 'localhost',
        port: 27017,
        name: 'devOrchestrationDB'
    },
    logging: {
        level: 'debug', // Verbose logging
        destination: './logs/dev.log'
    },
    serviceEndpoints: {
        taskService: 'http://localhost:8080/tasks',
        workflowService: 'http://localhost:8081/workflows'
    },
    authentication: {
        jwtSecret: 'devSecretKey'
    }
};

module.exports = devConfig;
