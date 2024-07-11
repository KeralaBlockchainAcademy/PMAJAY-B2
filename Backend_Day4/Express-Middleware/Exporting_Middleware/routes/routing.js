const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json("Welcome to root route");
  });

userRouter.get('/protected', (req, res) => {
    res.json("Welcome to the protected route")
})

module.exports= userRouter;