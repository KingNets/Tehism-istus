const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  toolId: {
    type: String,
    required: [true, 'Tool ID is required'],
    index: true
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  text: {
    type: String,
    required: [true, 'Review text is required'],
    maxlength: [500, 'Review text cannot exceed 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  editedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for faster queries
reviewSchema.index({ toolId: 1, createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);
