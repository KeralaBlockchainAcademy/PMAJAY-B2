const express = require('express')

const app = express();

const path= require('path');

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const blogPosts = [];

const PORT = process.env.PORT || 4000

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
})

app.get('/blog', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','blog.html'));
})

app.get('/submitted', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','submit.html'));
})

app.get('/view', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','viewblog.html'));
})

app.get('/viewallblogs', (req, res) => {
    res.send(blogPosts)
})

app.post('/blog', (req,res) => {
    const {BlogID, title, author, content } = req.body;
    console.log(req.body);
    const newPost = {BlogID, title, author, content };
    blogPosts.push(newPost);
    console.log(blogPosts);
    res.redirect('/submitted');
})

app.get('/blog/:id', (req,res) => {
    const id = req.params.id;
    const blogs = blogPosts.find((blog) => blog.BlogID == id);
    if (!blogs) {
      return res.status(404).send("Blog not found");
    }
  
    res.sendFile(path.join(__dirname, 'public', 'viewblog.html'));
})

app.get('/api/blog/:id', (req,res) => {
    const id = req.params.id;
    const blogs = blogPosts.find(blog => blog.BlogID == id);
    if (!blogs) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blogs);
})

app.listen(PORT, () => {
    console.log(`The application is running in ${PORT}`)
})