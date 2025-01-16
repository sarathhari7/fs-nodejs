const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const router = express.Router();
const secretKey = 'your_secret_key';

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // For demonstration purposes, we'll use a hardcoded username and password.
  // In a real application, you should validate the username and password against your database.
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({
      success: true,
      token: token,
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;