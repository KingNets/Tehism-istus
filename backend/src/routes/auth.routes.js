const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getCurrentUser,
  logout
} = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');
const {
  registerValidation,
  loginValidation
} = require('../middleware/validation.middleware');

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', protect, getCurrentUser);
router.post('/logout', protect, logout);

module.exports = router;
