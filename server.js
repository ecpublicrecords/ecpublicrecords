const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// In-memory database
const users = [];
const searchLogs = [];

app.use(bodyParser.json());

// Endpoint for searching profiles
app.post('/searchProfile', (req, res) => {
    const { username } = req.body;

    // Simulate fetching profile information (replace with actual logic)
    const profile = {
        username,
        profilePic: 'https://example.com/profilepic.jpg', // Replace with actual URL
    };

    // Log the search
    searchLogs.push({ searchedUser: username, timestamp: new Date() });

    res.json(profile);
});

// Endpoint for searching offenders
app.post('/searchOffender', (req, res) => {
    const { username, tab, searchTerm } = req.body;

    // Simulate searching for offenders (replace with actual logic)
    const results = [
        { offender: 'User1', crime: 'Violation1', date: '2024-01-15', punishmentEnd: '2024-01-22' },
        // Add more results as needed
    ];

    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
