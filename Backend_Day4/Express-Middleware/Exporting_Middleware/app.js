const express = require('express');

const app= express();

const userroutes= require('./routes/routing')

const logger = require('./middleware/logger');
const auth = require('./middleware/authentication');


app.use(logger); // Logger middleware for all routes
app.use('/protected', auth); // Authentication middleware for /protected routes

app.use(userroutes);

app.listen(3000);