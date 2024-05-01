// Set up Node.js project
// Initialize a Node.js project with `npm init`

// Install Dependencies
// npm install express sqlite3 body-parser jsonwebtoken

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Initialize SQLite database
const db = new sqlite3.Database('tasklist.db');

// Middleware
app.use(bodyParser.json());

// Implement endpoints
// Example for creating a new task
app.post('/tasks', (req, res) => {
    // Authenticate user
    // Check JWT token

    // Insert task into database
    const { title, description } = req.body;
    db.run(`INSERT INTO Tasks (title, description) VALUES (?, ?)`, [title, description], function(err) {
        if (err) {
            return console.error(err.message);
        }
        res.json({ id: this.lastID, title, description });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// Implement User Authentication
// Example using JWT

// Create login endpoint
app.post('/login', (req, res) => {
    // Authenticate user
    const { username, password } = req.body;

    // Dummy authentication logic for demonstration purposes
    if (username === 'user' && password === 'password') {
        // Generate JWT token
        const token = jwt.sign({ username }, 'secret_key');
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Middleware for authentication
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Protect routes with authentication middleware
app.post('/tasks', authenticateToken, (req, res) => {
    // Only authenticated users can access this endpoint
    // Logic for creating a new task
});
