const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // Initialize the app

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Error handling middleware for JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ msg: 'Invalid JSON' });
  }
  next();
});

// Connect to MongoDB
connectDB();

// Use routes
// Use routes
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile')); // Add this line
// Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});