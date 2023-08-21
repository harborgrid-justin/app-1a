// ORL001.js

const fs = require('fs');
const path = require('path');

class OrchestrationLogger {
    /**
     * Constructor to initialize the log file.
     * @param {string} logFilePath - The path to the log file.
     */
    constructor(logFilePath = path.join(__dirname, 'orchestration-log.txt')) {
        this.logFilePath = logFilePath;
    }

    /**
     * Logs a message to the log file with a timestamp.
     * @param {string} message - The message to log.
     */
    log(message) {
        const timestamp = new Date().toISOString();
        const formattedMessage = `${timestamp} - ${message}\n`;

        fs.appendFileSync(this.logFilePath, formattedMessage, 'utf8');
    }

    /**
     * Logs an error message to the log file.
     * @param {string} errorMessage - The error message to log.
     */
    error(errorMessage) {
        this.log(`ERROR: ${errorMessage}`);
    }

    /**
     * Logs an info message to the log file.
     * @param {string} infoMessage - The info message to log.
     */
    info(infoMessage) {
        this.log(`INFO: ${infoMessage}`);
    }

    /**
     * Logs a warning message to the log file.
     * @param {string} warningMessage - The warning message to log.
     */
    warn(warningMessage) {
        this.log(`WARN: ${warningMessage}`);
    }
}

// Exporting an instance of the OrchestrationLogger so it can be used as a singleton throughout the application.
module.exports = new OrchestrationLogger();
