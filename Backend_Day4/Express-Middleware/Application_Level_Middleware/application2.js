const express = require('express');
const app = express();

app.get('/data',(req,res) => {
    res.send('Hello World')
})

// Define a POST route
app.post('/data', (req, res) => {
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});