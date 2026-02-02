const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

// Feedback routes
router.post('/', feedbackController.submitFeedback);
router.get('/', feedbackController.getAllFeedback);
router.get('/:feedbackId', feedbackController.getFeedbackById);
router.put('/:feedbackId/status', feedbackController.updateFeedbackStatus);
router.delete('/:feedbackId', feedbackController.deleteFeedback);

module.exports = router;
