const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importing our modules
const { Logger, ErrorHandler } = require('./ReferenceIndex.js');
const dbConnection = require('./database/DBC001.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(Logger);

// Connect to MongoDB
dbConnection.connect();

// Mounting our routes (For brevity, I'm not importing and using every route. This is just an example.)
const businessRuleRouter = require('./routes/businessRules.js');
const orchestrationRouter = require('./routes/orchestrations.js');
app.use('/api/business-rules', businessRuleRouter);
app.use('/api/orchestrations', orchestrationRouter);

// ... Add other routes as necessary ...

// Error Handling
app.use(ErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // for testing purposes
