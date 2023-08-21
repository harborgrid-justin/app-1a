// GLV001.js

class GlobalVariables {
    constructor() {
        // Private variable storage
        this._variables = {
            appVersion: '1.0.0',
            apiEndpoint: 'https://api.example.com/',
            maxRetries: 3,
            defaultTimeout: 5000, // in milliseconds
            // ... any other global variables
        };
    }

    /**
     * Retrieve the value of a global variable.
     * @param {string} key - The key associated with the global variable.
     * @returns {any} - The value of the global variable.
     */
    get(key) {
        return this._variables[key];
    }

    /**
     * Set the value of a global variable.
     * @param {string} key - The key associated with the global variable.
     * @param {any} value - The value to set.
     */
    set(key, value) {
        this._variables[key] = value;
    }

    /**
     * Check if a global variable exists.
     * @param {string} key - The key associated with the global variable.
     * @returns {boolean} - True if exists, false otherwise.
     */
    has(key) {
        return key in this._variables;
    }

    /**
     * Delete a global variable.
     * @param {string} key - The key associated with the global variable.
     */
    delete(key) {
        if (this.has(key)) {
            delete this._variables[key];
        }
    }
}

// Singleton pattern ensures that a class has only one instance and provides a global point to access it.
const globalVarsInstance = new GlobalVariables();

module.exports = globalVarsInstance;
