const express = require('express');
const router = express.Router();
const toolController = require('../controllers/tool.controller');

// Simple admin middleware (in production, use proper JWT authentication)
const adminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer admin-')) {
        return res.status(401).json({
            success: false,
            message: 'Autentimine nõutud'
        });
    }
    next();
};

// Public routes
router.get('/', toolController.getTools);
router.get('/category/:category', toolController.getToolsByCategory);
router.get('/featured', toolController.getFeaturedTools);
router.get('/newest', toolController.getNewestTools);
router.get('/:id', toolController.getToolById);

// Admin routes (protected)
router.post('/', adminAuth, toolController.addTool);
router.put('/:id', adminAuth, toolController.updateTool);
router.delete('/:id', adminAuth, toolController.deleteTool);

module.exports = router;
