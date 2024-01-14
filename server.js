const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Add this line to use Axios for HTTP requests
const app = express();
const PORT = 3000;

// In-memory database
const users = [];
const searchLogs = [];

app.use(bodyParser.json());

// Function to fetch Roblox user avatar URL
async function getRobloxAvatarUrl(username) {
    try {
        const response = await axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`);
        const userId = response.data.Id;
        return `https://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&userid=${userId}`;
    } catch (error) {
        console.error('Error fetching Roblox avatar URL:', error.message);
        return null;
    }
}

// Endpoint for searching profiles
app.post('/searchProfile', async (req, res) => {
    const { username } = req.body;

    // Fetch Roblox avatar URL
    const avatarUrl = await getRobloxAvatarUrl(username);

    // Log the search
    searchLogs.push({ searchedUser: username, timestamp: new Date() });

    // Return profile with avatar URL
    const profile = {
        username,
        profilePic: avatarUrl || 'https://example.com/default-avatar.jpg', // Provide a default avatar URL
    };

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
