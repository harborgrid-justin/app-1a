const express = require('express');
const path = require('path');
const engineOneRoutes = require('./routes/routesEngineOne');
const engineTwoRoutes = require('./routes/routesEngineTwo');
const engineThreeRoutes = require('./routes/routesEngineThree');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the modularized routes
app.use('/engineOne', engineOneRoutes);
app.use('/engineTwo', engineTwoRoutes);
app.use('/engineThree', engineThreeRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
