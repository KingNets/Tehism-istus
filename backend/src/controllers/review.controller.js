const Review = require('../models/Review.model');

// Get all reviews (for latest reviews section)
exports.getAllReviews = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;
    
    const reviews = await Review.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    
    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching reviews',
      error: error.message
    });
  }
};

// Get all reviews for a specific tool
exports.getReviewsByTool = async (req, res) => {
  try {
    const { toolId } = req.params;
    
    const reviews = await Review.find({ toolId })
      .sort({ createdAt: -1 })
      .lean();
    
    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching reviews',
      error: error.message
    });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { toolId } = req.params;
    const { username, rating, text } = req.body;

    if (!username || !rating || !text) {
      return res.status(400).json({
        success: false,
        message: 'Username, rating, and text are required'
      });
    }

    const review = await Review.create({
      toolId,
      username,
      rating,
      text
    });

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating review',
      error: error.message
    });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, text } = req.body;

    const updateData = { editedAt: new Date() };
    if (rating !== undefined) updateData.rating = rating;
    if (text !== undefined) updateData.text = text;

    const review = await Review.findByIdAndUpdate(
      reviewId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      data: review
    });
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating review',
      error: error.message
    });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findByIdAndDelete(reviewId);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      message: 'Review deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting review',
      error: error.message
    });
  }
};

// Get highest rated tools based on average user ratings
exports.getHighestRated = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;
    
    // Aggregate reviews to calculate average rating per tool
    const highestRated = await Review.aggregate([
      {
        $group: {
          _id: '$toolId',
          averageRating: { $avg: '$rating' },
          reviewCount: { $sum: 1 },
          latestReview: { $max: '$createdAt' }
        }
      },
      {
        $match: {
          reviewCount: { $gte: 1 } // At least 1 review
        }
      },
      {
        $sort: { averageRating: -1, reviewCount: -1 }
      },
      {
        $limit: limit
      },
      {
        $project: {
          toolId: '$_id',
          averageRating: { $round: ['$averageRating', 1] },
          reviewCount: 1,
          latestReview: 1,
          _id: 0
        }
      }
    ]);
    
    res.json({
      success: true,
      data: highestRated
    });
  } catch (error) {
    console.error('Error fetching highest rated:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching highest rated tools',
      error: error.message
    });
  }
};
