const express = require('express');

const apiroute = express.Router()

const path = require('path')

const auth = require('../middleware/auth')

require('dotenv').config()

apiroute.use(express.static(path.join(__dirname,'../../public')))

const API_KEY = process.env.API_KEY

apiroute.get('/search', auth, (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/static', 'results.html'))
})

apiroute.post('/search/result', async(req,res) => {
    const query = req.body.query;
    try {
        const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=6&addRecipeInformation=true")
        const data = await response.json();
        const recipes = data.results;
        res.send(recipes)
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occured while fetching")
    }
})

apiroute.get('/search/recipe/:id', auth, (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/static', 'showrecipe.html'))
})

apiroute.get('/search/recipe/dish/:id', async(req, res) => {
    const recipeId = req.params.id;
    try {
        const response = await fetch('https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}');
        const recipe = await response.json()
        res.send(recipe)
    } catch (error) {
        console.error(error)
        res.status(500).send("An error occured while fetching")
    }
})

module.exports = apiroute;