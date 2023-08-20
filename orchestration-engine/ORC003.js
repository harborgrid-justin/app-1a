// ORC003.js - Production Configuration for Orchestration Engine

const prodConfig = {
    database: {
        host: 'prod-db-host',
        port: 27017,
        name: 'prodOrchestrationDB'
    },
    logging: {
        level: 'info', // Less verbose than debug
        destination: './logs/prod.log'
    },
    serviceEndpoints: {
        taskService: 'http://prod-endpoint:8080/tasks',
        workflowService: 'http://prod-endpoint:8081/workflows'
    },
    authentication: {
        jwtSecret: 'secureProdSecretKey' // This should ideally be an environment variable or from a secret manager
    }
};

module.exports = prodConfig;
