const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI || "mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority"; // Replace with your URI

let client;

module.exports = {
    /**
     * Establishes a connection to the MongoDB database.
     * @returns {Promise} Returns the connected client.
     */
    connect: async () => {
        if (!client) {
            client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        }
        return client;
    },

    /**
     * Returns the existing database client.
     * @returns {Object} The MongoDB client.
     */
    getClient: () => {
        if (!client) {
            throw new Error("DB not initialized. Call connect() first.");
        }
        return client;
    }
};
