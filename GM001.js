// GM001.js

/**
 * A centralized repository for global error messages used throughout the application.
 * This makes it easier to manage and update error messages from a single location.
 */
class GlobalMessages {
    /**
     * Returns a standardized error message based on a given error code.
     * @param {string} errorCode - The unique code associated with a specific error.
     * @return {string} - The corresponding error message.
     */
    static getErrorMessage(errorCode) {
        const errorMessages = {
            "E001": "Invalid input detected.",
            "E002": "Database connection failed.",
            "E003": "Authentication failed. Please try again.",
            "E004": "Operation timed out. Please try again later.",
            "E005": "Internal server error. Contact support if the issue persists.",
            // ... other error codes can be added as needed
        };

        return errorMessages[errorCode] || "An unknown error occurred.";
    }

    /**
     * Returns a standardized info message based on a given info code.
     * @param {string} infoCode - The unique code associated with a specific informational message.
     * @return {string} - The corresponding info message.
     */
    static getInfoMessage(infoCode) {
        const infoMessages = {
            "I001": "Operation completed successfully.",
            "I002": "Your data has been saved.",
            // ... other info codes can be added as needed
        };

        return infoMessages[infoCode] || "Operation successful.";
    }
}

module.exports = GlobalMessages;
