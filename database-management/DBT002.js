module.exports = {
    /**
     * Commits the current transaction in the session.
     * @param {Object} session - The session object.
     * @returns {Promise} Resolves when the transaction is committed.
     */
    commitTransaction: async (session) => {
        try {
            await session.commitTransaction();
        } finally {
            session.endSession();
        }
    },

    /**
     * Aborts and rolls back the current transaction in the session.
     * @param {Object} session - The session object.
     * @returns {Promise} Resolves when the transaction is rolled back.
     */
    rollbackTransaction: async (session) => {
        try {
            await session.abortTransaction();
        } finally {
            session.endSession();
        }
    }
};
