const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConfig();

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});