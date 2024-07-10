const express = require('express');

const app = express()

const router = require('./routes/userroutes')

app.use('/users', router)

// app.use(express.json());

const PORT =3001

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);