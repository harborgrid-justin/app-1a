const dbConnection = require('./DBC001.js');

module.exports = {
    /**
     * Closes the connection to the MongoDB database.
     * @returns {Promise} Resolves when the connection is closed.
     */
    close: async () => {
        const client = dbConnection.getClient();
        if (client && client.isConnected()) {
            await client.close();
        }
    }
};
