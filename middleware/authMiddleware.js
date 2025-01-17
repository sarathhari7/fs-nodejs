const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid', errorCode: "AUTH_0001" });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.username = decoded.username; // Assuming the username is stored in the 'username' field of the token
    next();
  } catch (err) {
    console.error('Invalid token', err);
    res.status(401).json({ message: 'Invalid token', errorCode: "AUTH_0002" });
  }
};

module.exports = authMiddleware;