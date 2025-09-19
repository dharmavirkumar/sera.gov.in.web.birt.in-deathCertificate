require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine (assuming EJS for this example)
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));  

// Sample route
app.get('/', (req, res) => {
   res.render("deathCertificate");
});

// Start the server
app.listen(port, () => {
  console.log(`${port}`);
});