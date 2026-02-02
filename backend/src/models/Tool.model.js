const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['text', 'image', 'video', 'audio', 'code', 'chat', 'productivity', 'design', 'marketing', 'data', 'other']
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: ''
    },
    tags: [{
        type: String
    }],
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    reviews: {
        type: Number,
        default: 0,
        min: 0
    },
    pricing: {
        free: {
            type: Boolean,
            default: false
        },
        freemium: {
            type: Boolean,
            default: false
        },
        paid: {
            type: Boolean,
            default: false
        },
        details: {
            type: String,
            default: ''
        }
    },
    features: [{
        type: String
    }],
    dateAdded: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Indexes for better query performance
toolSchema.index({ category: 1, dateAdded: -1 });
toolSchema.index({ name: 1 });
toolSchema.index({ rating: -1 });
toolSchema.index({ tags: 1 });

module.exports = mongoose.model('Tool', toolSchema);
