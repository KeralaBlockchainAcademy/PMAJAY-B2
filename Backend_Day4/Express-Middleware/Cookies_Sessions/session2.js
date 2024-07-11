const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

// Configure session middleware
app.use(session({
  secret: 'your-secret-key', // Secret used to sign the session ID cookie
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // In production, set secure: true with HTTPS
}));

// Route to set session data
app.get('/login', (req, res) => {
  req.session.username = 'JohnDoe';
  res.send('Session data set');
});

// Route to access session data
app.get('/profile', (req, res) => {
    const sessionId = req.sessionID;
    console.log(sessionId);
  if (req.session.username) {
    res.send(`Welcome ${req.session.username}`);
  } else {
    res.send('No session data found');
  }
});

// Route to destroy session
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to destroy session');
    }
    res.send('Session destroyed');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
