const Question = require('../models/Question.model');
const Notification = require('../models/Notification.model');

// Get all questions (for latest questions section)
exports.getAllQuestions = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;
    
    const questions = await Question.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    
    res.json({
      success: true,
      data: questions
    });
  } catch (error) {
    console.error('Error fetching all questions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching questions',
      error: error.message
    });
  }
};

// Get all questions for a specific tool
exports.getQuestionsByTool = async (req, res) => {
  try {
    const { toolId } = req.params;
    
    const questions = await Question.find({ toolId })
      .sort({ createdAt: -1 })
      .lean();
    
    res.json({
      success: true,
      data: questions
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching questions',
      error: error.message
    });
  }
};

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { toolId } = req.params;
    const { username, text } = req.body;

    if (!username || !text) {
      return res.status(400).json({
        success: false,
        message: 'Username and text are required'
      });
    }

    const question = await Question.create({
      toolId,
      username,
      text,
      replies: []
    });

    res.status(201).json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating question',
      error: error.message
    });
  }
};

// Update a question
exports.updateQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: 'Text is required'
      });
    }

    const question = await Question.findByIdAndUpdate(
      questionId,
      { 
        text,
        editedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Error updating question:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating question',
      error: error.message
    });
  }
};

// Delete a question
exports.deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;

    const question = await Question.findByIdAndDelete(questionId);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    res.json({
      success: true,
      message: 'Question deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting question',
      error: error.message
    });
  }
};

// Add a reply to a question
exports.addReply = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { username, text } = req.body;

    if (!username || !text) {
      return res.status(400).json({
        success: false,
        message: 'Username and text are required'
      });
    }

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    question.replies.push({
      username,
      text,
      createdAt: new Date()
    });

    await question.save();

    // Create notification for question author (only if replier is not the author)
    if (question.username !== username) {
      await Notification.create({
        recipientUsername: question.username,
        type: 'reply',
        questionId: question._id,
        replyUsername: username,
        replyText: text.length > 100 ? text.substring(0, 97) + '...' : text,
        toolId: question.toolId,
        read: false
      });
    }

    res.status(201).json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Error adding reply:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding reply',
      error: error.message
    });
  }
};

// Update a reply
exports.updateReply = async (req, res) => {
  try {
    const { questionId, replyId } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: 'Text is required'
      });
    }

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    const reply = question.replies.id(replyId);

    if (!reply) {
      return res.status(404).json({
        success: false,
        message: 'Reply not found'
      });
    }

    reply.text = text;
    reply.editedAt = new Date();

    await question.save();

    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Error updating reply:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating reply',
      error: error.message
    });
  }
};

// Delete a reply
exports.deleteReply = async (req, res) => {
  try {
    const { questionId, replyId } = req.params;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    question.replies.pull(replyId);
    await question.save();

    res.json({
      success: true,
      message: 'Reply deleted successfully',
      data: question
    });
  } catch (error) {
    console.error('Error deleting reply:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting reply',
      error: error.message
    });
  }
};
