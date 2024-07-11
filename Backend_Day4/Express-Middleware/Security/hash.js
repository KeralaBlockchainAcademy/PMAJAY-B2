const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// This array will store our users
const users = [];   

// Register route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.username === username)) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user with the hashed password
    users.push({
      username: username,
      password: hashedPassword
    });

    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Login route
app.get('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(400).send('Invalid username');
    }

    // Compare the provided password with the stored hash
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid password');
    }

    res.send('Logged in successfully');
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

// Route to view all users (for demonstration purposes)
app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});