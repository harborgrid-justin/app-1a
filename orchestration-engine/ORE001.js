// ORE001.js

class OrchestrationError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status || 500;
        this.name = 'OrchestrationError';
    }
}

class OrchestrationErrorHandler {
    /**
     * Handles errors and outputs a consistent error response.
     * @param {Error} error - The error to handle.
     * @param {Object} req - The express request object.
     * @param {Object} res - The express response object.
     * @param {Function} next - The next middleware in the Express pipeline.
     */
    static handle(error, req, res, next) {
        if (error instanceof OrchestrationError) {
            res.status(error.status).json({
                error: {
                    message: error.message,
                    status: error.status
                }
            });
        } else {
            // If the error is not an OrchestrationError, it might be a more generic error.
            // Log it and send a generic error message.
            console.error(error); // Adjust this with your preferred logging solution.
            res.status(500).json({
                error: {
                    message: 'An unexpected error occurred.',
                    status: 500
                }
            });
        }
    }
}

module.exports = {
    OrchestrationError,
    OrchestrationErrorHandler
};
