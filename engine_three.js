const { MongoClient } = require('mongodb');

class TemporalConditionsEngine {
    constructor() {
        this.client = new MongoClient('mongodb+srv://justinsaadein:ei3KgDhF@cluster1.ynksy.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = null;
        this.eventLog = [];
    }

    async connect() {
        if (!this.client.isConnected()) {
            await this.client.connect();
            this.db = this.client.db('temporalEngine');
        }
    }

    async logEvent(eventName, data, metadata) {
        await this.connect();
        const event = { eventName, data, metadata, timestamp: Date.now() };
        this.eventLog.push(event);
        await this.db.collection('events').insertOne(event);
    }

    async checkPattern(eventName, times, duration, callback) {
        await this.connect();
        const now = Date.now();
        const recentEvents = await this.db.collection('events').find({
            eventName,
            timestamp: { $gte: now - duration }
        }).toArray();
        const conditionMet = recentEvents.length >= times;
        if (conditionMet && callback) callback();
        return conditionMet;
    }

    async close() {
        if (this.client.isConnected()) {
            await this.client.close();
        }
    }
}

module.exports = TemporalConditionsEngine;
