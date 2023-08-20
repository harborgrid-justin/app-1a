const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority"; // Replace with your URI

let client;

const connectToDb = async () => {
    if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    return client;
};

module.exports = {

    /**
     * Executes a simple find query against the database.
     * @param {string} collectionName The name of the MongoDB collection.
     * @param {Object} query The MongoDB query.
     * @returns {Promise} The result of the query.
     */
    executeQuery: async (collectionName, query) => {
        const client = await connectToDb();
        const db = client.db(); // Use default database or specify name
        const collection = db.collection(collectionName);

        return await collection.find(query).toArray();
    }
};
