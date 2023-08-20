// CFG001.js

const config = {};

// Database configuration details
config.db = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'businessRulesDB',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password'
};

// JWT (JSON Web Token) Configuration
config.jwt = {
    secret: process.env.JWT_SECRET || 'superSecretKey',
    expiresIn: process.env.JWT_EXPIRY || '24h'
};

// Server Configuration
config.server = {
    port: process.env.PORT || 3000
};

// Logging Configuration
config.logging = {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'app.log'
};

// Add more configurations as needed...

module.exports = config;
