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
     * Inserts a document into a specified MongoDB collection.
     * @param {string} collectionName The name of the MongoDB collection.
     * @param {Object} document The document to insert.
     * @returns {Promise} The result of the insert operation.
     */
    insertDocument: async (collectionName, document) => {
        const client = await connectToDb();
        const db = client.db(); // Use default database or specify name
        const collection = db.collection(collectionName);

        return await collection.insertOne(document);
    }
};
