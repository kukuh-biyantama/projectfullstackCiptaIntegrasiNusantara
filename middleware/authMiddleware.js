const jwt = require('jsonwebtoken');
const { User } = require('../database/model');

const secretKey = 'kukuh101010';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const user = await User.findByPk(decoded.id, { attributes: { exclude: ['password'] } });
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
}

module.exports = {
  verifyToken,
};
