const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteUser
} = require('../controllers/user.controller');
const { protect, authorize } = require('../middleware/auth.middleware');
const {
  updateProfileValidation,
  changePasswordValidation
} = require('../middleware/validation.middleware');

// All routes are protected
router.get('/:id', getUserProfile);
router.put('/:id', protect, updateProfileValidation, updateUserProfile);
router.put('/:id/password', protect, changePasswordValidation, changePassword);
router.delete('/:id', protect, deleteUser);

module.exports = router;
