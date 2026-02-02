const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

// Question routes
router.get('/', questionController.getAllQuestions); // Get all questions with limit
router.get('/tool/:toolId', questionController.getQuestionsByTool);
router.post('/tool/:toolId', questionController.createQuestion);
router.put('/:questionId', questionController.updateQuestion);
router.delete('/:questionId', questionController.deleteQuestion);

// Reply routes
router.post('/:questionId/replies', questionController.addReply);
router.put('/:questionId/replies/:replyId', questionController.updateReply);
router.delete('/:questionId/replies/:replyId', questionController.deleteReply);

module.exports = router;
