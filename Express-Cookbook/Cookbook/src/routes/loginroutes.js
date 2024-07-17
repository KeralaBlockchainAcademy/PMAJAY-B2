const express = require('express');

const path = require('path');

const loginroute = express.Router();


loginroute.use(express.json())

loginroute.use(express.urlencoded({extended:true}))

loginroute.use(express.static(path.join(__dirname, '../../public')))

let users= {};

loginroute.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/static', 'signup.html'))
})

loginroute.post('/signup', (req, res) => {
    const {username, email, password} = req.body;
    if(users[username]){
        res.send("User already exists. Click login")
    }else{
        users[username]= {email: email, password: password, favourites: []}
        req.session.username = username;
        req.session.favourites = users[username].favourites;
        res.redirect('/home');
    }
})

loginroute.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/static', 'login.html'))
})

loginroute.post('/login', (req,res) => {
    const {username, password} = req.body;
    if(users[username].password === password){
        req.session.username = username;
        req.session.favourites = users[username].favourites;
        res.redirect('/home')
    }else{
        res.send("Invalid username or password. Please signup first");
    }
})

loginroute.post('/add/favourites', (req,res) => {
    const {title, image, recipeId} = req.body;

    const username = req.session.username;

    const user = users[username];

    user.favourites.push({title, image, recipeId});

    res.json({message: 'Recipe added to favourites'});

})

loginroute.get('/api/favourite', (req,res) => {
    const username = req.session.username;

    const favourite = users[username].favourites

    res.json(favourite)
})

loginroute.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

module.exports = loginroute