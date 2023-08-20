// BRL001.js

const winston = require('winston');

/**
 * Logger Configuration
 * We'll use winston's format system to create a logger that outputs:
 * `[timestamp] [log-level]: message`
 */
const logger = winston.createLogger({
    level: 'info', // Log only info and below (e.g., error, warn, info)
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] [${level}]: ${message}`;
        })
    ),
    transports: [
        // Write all logs to 'application.log'
        new winston.transports.File({ filename: 'application.log' }),

        // Write all logs with level 'error' and below to 'error.log'
        new winston.transports.File({ filename: 'error.log', level: 'error' }),

        // If we're not in production, also log to the console with colorized text
        ...(process.env.NODE_ENV !== 'production' ? [new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })] : [])
    ]
});

module.exports = logger;
