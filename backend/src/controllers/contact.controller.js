const { sendContactFormNotification } = require('../config/email');

// Submit contact form
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Send email notification
    const emailResult = await sendContactFormNotification({
      name,
      email,
      message
    });

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully. We will get back to you soon!'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send contact form. Please try again later.'
      });
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
};
