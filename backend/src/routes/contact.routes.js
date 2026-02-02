const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contact.controller');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', submitContactForm);

module.exports = router;
