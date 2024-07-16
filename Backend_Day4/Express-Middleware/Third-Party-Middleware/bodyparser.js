const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle POST requests
app.post('/data', (req, res) => {
  // Access the parsed JSON body
  const requestData = req.body;
  
  // Log the received data to the console
  console.log('Received data:', requestData);
  
  // Send a response back to the client
  res.send('Data received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
