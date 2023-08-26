const { MongoClient } = require('mongodb');

class DatabaseUtility {
    constructor() {
        this.uri = 'mongodb+srv://justinsaadein:ei3KgDhF@cluster1.ynksy.mongodb.net/?retryWrites=true&w=majority';
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async connect() {
        if (!this.client.isConnected()) {
            await this.client.connect();
        }
    }

    async close() {
        if (this.client.isConnected()) {
            await this.client.close();
        }
    }

    async fetchData(collectionName, query) {
        await this.connect();
        const collection = this.client.db().collection(collectionName);
        return await collection.find(query).toArray();
    }

    async insertData(collectionName, data) {
        await this.connect();
        const collection = this.client.db().collection(collectionName);
        return await collection.insertOne(data);
    }

    async updateData(collectionName, query, update) {
        await this.connect();
        const collection = this.client.db().collection(collectionName);
        return await collection.updateOne(query, update);
    }

    async deleteData(collectionName, query) {
        await this.connect();
        const collection = this.client.db().collection(collectionName);
        return await collection.deleteOne(query);
    }
}

module.exports = DatabaseUtility;
