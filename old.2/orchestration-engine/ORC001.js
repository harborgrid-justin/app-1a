// ORC001.js - General Configuration for Orchestration Engine

const generalConfig = {
    engine: {
        maxConcurrentTasks: 10,
        maxWorkflowDepth: 5,
        retryLimit: 3
    },
    notifications: {
        email: {
            service: 'smtp-service-provider',
            user: 'notification@yourdomain.com',
            pass: 'password'
        }
    },
    defaults: {
        logging: {
            level: 'info',
            destination: './logs/general.log'
        }
    }
};

module.exports = generalConfig;
