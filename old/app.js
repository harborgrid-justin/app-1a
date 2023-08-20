const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Rule = require('./models/ruleModel001');
const dbConfig = require('./config/dbconfig');

const app = express();

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect(dbConfig.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas!');
})
.catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
});

// Define the API endpoints

// Endpoint to fetch all business rules
app.get('/api/rules', async (req, res) => {
    try {
        const rules = await Rule.find();
        res.json({ rules: rules });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to fetch the rule schema
app.get('/api/ruleSchema', (req, res) => {
    res.json({ schema: Rule.schema.obj });
});

// Endpoint to check MongoDB connection
app.get('/api/checkDBConnection', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.json({ status: 'success', message: 'Connected to MongoDB' });
    } else {
        res.json({ status: 'error', message: 'Not connected to MongoDB' });
    }
});

// Endpoint to create a new business rule
app.post('/defineRule', async (req, res) => {
    const { category, condition, action } = req.body;

    if (!category || !condition || !action) {
        return res.status(400).json({ status: 'error', message: 'All fields are required' });
    }

    try {
        const newRule = new Rule({ category, condition, action });
        await newRule.save();
        res.json({ status: 'success', message: 'Rule created successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Error creating the rule' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
