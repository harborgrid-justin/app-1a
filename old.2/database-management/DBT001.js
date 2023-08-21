const dbConnection = require('./DBC001.js');

module.exports = {
    /**
     * Begins a session and transaction.
     * @returns {Promise} Returns the session object.
     */
    beginTransaction: async () => {
        const client = dbConnection.getClient();
        const session = client.startSession();
        session.startTransaction();
        return session;
    }
};
