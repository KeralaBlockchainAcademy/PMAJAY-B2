const express = require('express')

const app = express();

const PORT = 3000

app.get('/',(req,res) => {
    res.status(200);
    res.send("Welcome to the root route")
})



app.listen(PORT,(error) => {
    if(!error){
        console.log("Running on port "+ PORT)
    }
    else{
        console.log("Error occuered", error)
    }
})