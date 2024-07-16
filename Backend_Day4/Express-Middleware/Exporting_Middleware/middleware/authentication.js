const auth = (req, res, next) => {
    // Perform authentication logic here
    const isAuthenticated = true; // For demonstration purposes
  
    if (isAuthenticated) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = auth;