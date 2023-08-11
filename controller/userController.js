const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../database/model');

const secretKey = 'kukuh101010';

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(400).json({ message: 'Login failed', error: err.message });
  }
}

function getMe(req, res) {
  try {
    res.json(req.user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = {
  register,
  login,
  getMe,
};
