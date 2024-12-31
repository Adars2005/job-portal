const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/simple-job-portal', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = dbConfig;