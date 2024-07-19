const {mongoose} = require ('mongoose');
const routes=require('./routes.js')
const express=require('express');
const dotenv=require('dotenv');
const app=express();
const PORT = 3005;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);


});
app.use(express.json());
app.use('/',routes);
dotenv.config();
const uri=process.env.mongodb_uri;

mongoose.connect(
   uri// using .env file
   
);
const database = mongoose.connection;
database.on("error", (error) => {
   console.log(error);
});
database.once("connected", () => {
   console.log("Database Connected");
});


