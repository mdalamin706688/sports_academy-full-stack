const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
      req.userId = decoded.userId; // User ID for user authentication
    } else if (decoded.instructorId) {
      req.instructorId = decoded.instructorId; // Instructor ID for instructor authentication
    } else if (decoded.adminId) {
      req.adminId = decoded.adminId; // Admin ID for admin authentication
    } else {
      throw new Error('Invalid token');
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  protect,
};
