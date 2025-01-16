const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const authRoutes = require('./routes/auth');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.get('/data', validateToken, (req, res) => {
  res.json({ message: 'This is protected data' });
});

// Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
