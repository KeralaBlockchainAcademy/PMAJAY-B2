const express = require('express')

const app = express();

const PORT = 3001

app.get('/',(req,res) => {
    res.status(200);
    res.send("Welcome to the root route")
})

app.get('/users', (req,res) => {
    res.status(200);
    res.send("Welcome user");
})


app.listen(PORT,(error) => {
    if(!error){
        console.log("Running on port "+ PORT)
    }
    else{
        console.log("Error occuered", error)
    }
})