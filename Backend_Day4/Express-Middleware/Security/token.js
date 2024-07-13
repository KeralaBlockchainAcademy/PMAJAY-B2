const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

const users = []

const secretKey = "Secret key phrase"


function verifyToken(req,res,next) {
    const token = req.cookies.Authtoken;
    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }
    try {
        jwt.verify(token, secretKey, (err, user) => {
          if (err) {
            return res.sendStatus(403); // Forbidden if token is not valid
          }
    
          req.user = user; // Attach user information to the request
          next();
        });
      } catch (error) {
        res.status(401).json({ error: "Invalid token" });
      }
}


// User registration
app.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = users.find((u) => u.username === username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user and store it in the array
      const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
      };
      users.push(newUser);
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.log("err", error);
      res.status(500).json({ error: "Registration failed" });
    }
  });

app.get('/login', async (req,res) => {
    try {
        const { username, password } = req.body;
        const user = users.find((u) => u.username === username);
        if (user){
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const accessToken = jwt.sign(
                    { username: user.username, id: user.id },
                    secretKey,
                    { expiresIn: "1h" }
                  );
                  res.cookie("Authtoken", accessToken);
                  res.json({
                    status: true,
                    message: "login success",
                    accessToken,
                  });
            }else {
                res.status(400).json({ message: "Password incorrect" });
              }
        } else {
            res.status(400).json({ message: "User does not exist" });
          }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Login failed" });
    }
})

app.get("/logout", (req, res) => {
    res.clearCookie("Authtoken");
    res.status(200).send("Logout successful");
  });

  app.get("/protected", verifyToken, (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.user });
  });