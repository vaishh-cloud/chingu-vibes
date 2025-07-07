const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This is useful if you are sending JSON data

// Serve static files (CSS, JS, etc.)
app.use(express.static(__dirname));

// Store reviews temporarily (you can use a database in production)
let reviews = [];

+// Serve the homepage (sending home.html file)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Handle review submission (single POST route)
app.post('/submit-review', (req, res) => {
    const { username, rating, review } = req.body;

    // Validate the review input
    if (!username || !rating || !review) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add the new review to the in-memory reviews array
    reviews.push({ username, rating, review });
    console.log('Reviews:', reviews); // Debugging

    // Respond with the updated list of reviews
    res.json({ success: true, reviews });
});

// Serve the reviews as a JSON API
app.get('/reviews', (req, res) => {
    res.json(reviews);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});





/*Chingu Vibes is a dynamic website designed using HTML, CSS, and Bootstrap to create a visually appealing and interactive front end. 
The website includes smooth transitions and effects for an engaging user experience. 
Features like a drama quiz,powered by JavaScript, recommend the next drama to watch based on user responses.
Additionally, the site has a review section where users can leave comments about the website. 
The categories of Asian dramas are well-organized, making it easier for users to explore different genres seamlessly.
w
On the backend, the website uses [mention backend framework, e.g., Node.js/Express] to manage data and enable real-time interactions.
The review comments are stored in a [mention database, e.g., MongoDB/MySQL], while the server.js file handles tasks such as storing and retrieving data dynamically. 
The login and sign-up system adds security and ensures personalized access for users. 
Together, the frontend and backend provide a cohesive and enjoyable experience for drama enthusiasts.
*/