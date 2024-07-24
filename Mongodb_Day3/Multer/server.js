const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp'); // Import sharp


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageUpload');

const app = express();

// Define the Image schema
const imageSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String
});

const Image = mongoose.model('Image', imageSchema);

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

// Handle file uploads
app.post('/upload', upload.single('image'), async (req, res) => {
  const newImage = new Image({
    
    filename: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path
  });

  await newImage.save();
 // res.send('File uploaded successfully');
 res.send(`File uploaded successfully. Image ID: ${newImage._id}`);
});

// Retrieve and serve the image
app.get('/image/:id', async (req, res) => {
  try {
    
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    const imagePath = path.join(image.path);

   // res.set('Content-Type', 'image/jpeg');
   // res.sendFile(imagePath);
   sharp(imagePath)
      .resize({ width: 200 }) // Resize to a width of 200 pixels (adjust as needed)
      .toBuffer()
      .then(data => {
        res.type('image/jpeg');
        res.send(data);
      })
      .catch(err => {
        console.error('Error processing image:', err);
        res.status(500).send('Error processing image');
      });
    //res.sendFile(path.join(__dirname, image.path));
    console.log("imagePath")
  } catch (error) {
    res.status(500).send('Error retrieving image');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
