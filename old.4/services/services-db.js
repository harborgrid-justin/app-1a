const mongoose = require('mongoose');

// Connect to MongoDB
const connectionString = 'mongodb+srv://justinsaadein:ei3KgDhF@cluster1.ynksy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB!');
});

// Disable buffering (optional, based on your preference)
mongoose.set('bufferCommands', false);

// Increase timeout (optional, based on your preference)
mongoose.set('bufferTimeoutMS', 30000);

// Define the Action schema
const actionSchema = new mongoose.Schema({
    id: String,
    type: String,
    properties: {
        priority: String,
        status: String,
        assignee: {
            userId: String,
            role: String
        },
        documentId: String,
        requesterId: String
    },
    businessRules: [String],
    orchestration: {
        currentWorkflowId: String,
        history: [String]
    }
});

// Create the Action model
const Action = mongoose.model('Action', actionSchema);

module.exports = {
    Action
};
