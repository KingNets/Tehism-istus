const mongoose = require('mongoose');

const bugReportSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true,
        enum: ['ui', 'functionality', 'performance', 'security', 'other']
    },
    tool: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    status: {
        type: String,
        enum: ['new', 'in-progress', 'resolved', 'closed'],
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BugReport', bugReportSchema);
