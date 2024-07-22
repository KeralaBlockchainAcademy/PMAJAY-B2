const express =require('express');
const session = require('express-session')

const app = express();

const pageroute = require('./src/routes/pageroutes')

const loginroute = require('./src/routes/loginroutes')

const apiroute = require('./src/routes/apiroutes')

app.use(session({
    secret: "Your secret phrase",
    resave: false,
    saveUninitialized: false
}))

app.use('/',pageroute,loginroute,apiroute)


app.listen(3000,() => {
    console.log("The server is listening at port 3000")
})