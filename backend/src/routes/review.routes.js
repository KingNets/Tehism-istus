const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

// Review routes
router.get('/', reviewController.getAllReviews); // Get all reviews with limit
router.get('/highest-rated', reviewController.getHighestRated); // Get highest rated tools
router.get('/tool/:toolId', reviewController.getReviewsByTool);
router.post('/tool/:toolId', reviewController.createReview);
router.put('/:reviewId', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;
