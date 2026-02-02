const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipientUsername: {
    type: String,
    required: [true, 'Recipient username is required'],
    index: true
  },
  type: {
    type: String,
    enum: ['reply'],
    default: 'reply'
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  replyUsername: {
    type: String,
    required: [true, 'Reply username is required']
  },
  replyText: {
    type: String,
    required: true,
    maxlength: 100 // Store truncated version
  },
  toolId: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
notificationSchema.index({ recipientUsername: 1, read: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);
