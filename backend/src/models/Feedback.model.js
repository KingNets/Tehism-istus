const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['recommend-ai', 'improvement', 'bug', 'other'],
    required: [true, 'Feedback type is required']
  },
  category: {
    type: String
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  email: {
    type: String
  },
  username: {
    type: String
  },
  userEmail: {
    type: String
  },
  userAgent: {
    type: String
  },
  page: {
    type: String
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved', 'closed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
feedbackSchema.index({ type: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model('Feedback', feedbackSchema);
