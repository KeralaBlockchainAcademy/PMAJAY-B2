const express = require('express');
const app = express();

// Example middleware function
const myMiddleware = (req, res, next) => {
  // Perform some operations on the request or response objects
  console.log('Middleware executed');
  // Call the next middleware function
  next();
};

// Use the middleware for all routes
app.use(myMiddleware);