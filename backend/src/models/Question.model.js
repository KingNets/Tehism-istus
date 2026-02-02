const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  text: {
    type: String,
    required: [true, 'Reply text is required'],
    maxlength: [500, 'Reply text cannot exceed 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  editedAt: {
    type: Date
  }
});

const questionSchema = new mongoose.Schema({
  toolId: {
    type: String,
    required: [true, 'Tool ID is required'],
    index: true
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  text: {
    type: String,
    required: [true, 'Question text is required'],
    maxlength: [500, 'Question text cannot exceed 500 characters']
  },
  replies: [replySchema],
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
questionSchema.index({ toolId: 1, createdAt: -1 });

module.exports = mongoose.model('Question', questionSchema);
