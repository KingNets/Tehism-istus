const Tool = require('../models/Tool.model');

// Add a new tool
exports.addTool = async (req, res) => {
    try {
        const toolData = req.body;

        // Validate required fields
        if (!toolData.name || !toolData.category || !toolData.description || !toolData.url) {
            return res.status(400).json({
                success: false,
                message: 'Nõutavad väljad: name, category, description, url'
            });
        }

        // Check if tool with same name already exists
        const existingTool = await Tool.findOne({ name: toolData.name });
        if (existingTool) {
            return res.status(400).json({
                success: false,
                message: 'Sellise nimega AI tööriist juba olemas'
            });
        }

        // Create new tool
        const tool = await Tool.create(toolData);

        res.status(201).json({
            success: true,
            message: 'AI tööriist edukalt lisatud',
            data: tool
        });
    } catch (error) {
        console.error('Error adding tool:', error);
        res.status(500).json({
            success: false,
            message: 'Viga AI tööriista lisamisel',
            error: error.message
        });
    }
};

// Get all tools with optional filters
exports.getTools = async (req, res) => {
    try {
        const { category, tags, search, limit = 50, page = 1 } = req.query;

        let query = {};

        if (category) {
            query.category = category;
        }

        if (tags) {
            const tagArray = tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagArray };
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const tools = await Tool.find(query)
            .sort({ dateAdded: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await Tool.countDocuments(query);

        res.json({
            success: true,
            data: {
                tools,
                total,
                page: parseInt(page),
                pages: Math.ceil(total / parseInt(limit))
            }
        });
    } catch (error) {
        console.error('Error fetching tools:', error);
        res.status(500).json({
            success: false,
            message: 'Viga tööriistade laadimisel',
            error: error.message
        });
    }
};

// Get single tool by ID
exports.getToolById = async (req, res) => {
    try {
        const { id } = req.params;

        const tool = await Tool.findById(id);

        if (!tool) {
            return res.status(404).json({
                success: false,
                message: 'Tööriist ei leitud'
            });
        }

        // Increment view count
        tool.views += 1;
        await tool.save();

        res.json({
            success: true,
            data: tool
        });
    } catch (error) {
        console.error('Error fetching tool:', error);
        res.status(500).json({
            success: false,
            message: 'Viga tööriista laadimisel',
            error: error.message
        });
    }
};

// Update tool
exports.updateTool = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const tool = await Tool.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

        if (!tool) {
            return res.status(404).json({
                success: false,
                message: 'Tööriist ei leitud'
            });
        }

        res.json({
            success: true,
            message: 'Tööriist edukalt uuendatud',
            data: tool
        });
    } catch (error) {
        console.error('Error updating tool:', error);
        res.status(500).json({
            success: false,
            message: 'Viga tööriista uuendamisel',
            error: error.message
        });
    }
};

// Delete tool
exports.deleteTool = async (req, res) => {
    try {
        const { id } = req.params;

        const tool = await Tool.findByIdAndDelete(id);

        if (!tool) {
            return res.status(404).json({
                success: false,
                message: 'Tööriist ei leitud'
            });
        }

        res.json({
            success: true,
            message: 'Tööriist edukalt kustutatud'
        });
    } catch (error) {
        console.error('Error deleting tool:', error);
        res.status(500).json({
            success: false,
            message: 'Viga tööriista kustutamisel',
            error: error.message
        });
    }
};

// Get tools by category
exports.getToolsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const { limit = 20 } = req.query;

        const tools = await Tool.find({ category })
            .sort({ rating: -1, reviews: -1 })
            .limit(parseInt(limit));

        res.json({
            success: true,
            data: tools
        });
    } catch (error) {
        console.error('Error fetching tools by category:', error);
        res.status(500).json({
            success: false,
            message: 'Viga kategooria tööriistade laadimisel',
            error: error.message
        });
    }
};

// Get featured tools
exports.getFeaturedTools = async (req, res) => {
    try {
        const { limit = 8 } = req.query;

        const tools = await Tool.find({ featured: true })
            .sort({ dateAdded: -1 })
            .limit(parseInt(limit));

        res.json({
            success: true,
            data: tools
        });
    } catch (error) {
        console.error('Error fetching featured tools:', error);
        res.status(500).json({
            success: false,
            message: 'Viga esiletõstetud tööriistade laadimisel',
            error: error.message
        });
    }
};

// Get newest tools
exports.getNewestTools = async (req, res) => {
    try {
        const { limit = 8 } = req.query;

        const tools = await Tool.find()
            .sort({ dateAdded: -1 })
            .limit(parseInt(limit));

        res.json({
            success: true,
            data: tools
        });
    } catch (error) {
        console.error('Error fetching newest tools:', error);
        res.status(500).json({
            success: false,
            message: 'Viga uusimate tööriistade laadimisel',
            error: error.message
        });
    }
};
