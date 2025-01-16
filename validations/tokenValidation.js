const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

// Middleware function to validate JWT token
function validateToken(req, res, next) {
  // Get the token from the Authorization header (e.g., "Bearer <token>")
  const token = req.headers['authorization']?.split(' ')[1];

  // If no token is provided
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Extract username from the decoded token (payload)
    const { username } = decoded;

    // Replace with your actual validation logic (e.g., checking a user in the database)
    if (username !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized: Invalid Credentials' });
    }

    // Token is valid, proceed to the next middleware or route handler
    next();
  });
}

module.exports = validateToken;