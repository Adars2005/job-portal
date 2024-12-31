const express = require('express');
const router = express.Router();

// Example route for getting jobs
router.get('/', (req, res) => {
    res.json({ message: 'List of jobs' });
});

// Example route for creating a job
router.post('/', (req, res) => {
    res.json({ message: 'Job created' });
});

module.exports = router;