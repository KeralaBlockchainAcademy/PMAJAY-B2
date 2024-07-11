const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3001;

// Session middleware configuration
app.use(session({
  secret: '10', // Change this to a unique secret key
  resave: false,           // Don't save session if unmodified
  saveUninitialized: false, // Save new sessions
  cookie:{ secure: false } // In production, set secure: true with HTTPS
}));

// Route to set session data
app.get('/set-session', (req, res) => {
  req.session.username = 'Vighnesh';
  res.send('Session data has been set!');
});

// Route to get session data
app.get('/get-session', (req, res) => {
  if (req.session.username) {
    res.send(`Hello, ${req.session.username}`);
  } else {
    res.send('No session data found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});