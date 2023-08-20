// BRE001.js

class BRErrorHandler {
    constructor() {
        this._errorLog = [];
    }

    /**
     * Log an error.
     * @param {Error} error - The error to log.
     * @param {string} origin - The origin/module where the error occurred.
     */
    log(error, origin) {
        const timestamp = new Date().toISOString();
        const errorEntry = {
            timestamp,
            origin,
            message: error.message,
            stack: error.stack
        };
        this._errorLog.push(errorEntry);

        // Print the error for debugging or monitoring purposes
        console.error(`[${timestamp}] Error in ${origin}: ${error.message}`);
    }

    /**
     * Retrieve all logged errors.
     * @returns {Array} - List of error logs.
     */
    getAllErrors() {
        return this._errorLog;
    }

    /**
     * Retrieve the latest error.
     * @returns {Object|null} - The latest error log or null if there are no errors.
     */
    getLatestError() {
        return this._errorLog.length ? this._errorLog[this._errorLog.length - 1] : null;
    }

    /**
     * Clear all logged errors.
     */
    clear() {
        this._errorLog = [];
    }
}

// Singleton pattern ensures that a class has only one instance and provides a global point to access it.
const errorHandlerInstance = new BRErrorHandler();

module.exports = errorHandlerInstance;
