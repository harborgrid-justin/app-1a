const express = require('express');
const { MongoClient } = require('mongodb');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const MONGODB_URI = "YOUR_MONGODB_URI";
const client = new MongoClient(MONGODB_URI);
let db;

app.use(express.json());

// Our Orchestration Engine Class remains largely unchanged.
class OrchestrationEngine {
    // ... [Previous Class Definition]

    sendDecision(decision) {
        io.emit('decision', decision);
    }

    sendTask(task) {
        io.emit('task', task);
    }
}

const engine = new OrchestrationEngine();

app.post('/addrule', (req, res) => {
    const { name, weight } = req.body;
    const fn = new Function('data', req.body.fnBody);
    engine.addRule(name, fn, weight);
    res.send({ status: 'Rule added successfully!' });
});

app.post('/decide', async (req, res) => {
    const decision = engine.decide(req.body);
    await db.collection('decisions').insertOne({ decision, timestamp: Date.now() });
    res.send({ decision });
});

io.on('connection', (socket) => {
    console.log('Frontend connected');
});

client.connect(err => {
    db = client.db("OrchestrationDB");
    server.listen(3000, () => console.log('Server started on http://localhost:3000'));
});
