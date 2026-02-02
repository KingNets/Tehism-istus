const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// Notification routes
router.get('/user/:username', notificationController.getUserNotifications);
router.get('/user/:username/count', notificationController.getUnreadCount);
router.put('/:notificationId/read', notificationController.markAsRead);
router.put('/user/:username/read-all', notificationController.markAllAsRead);
router.delete('/:notificationId', notificationController.deleteNotification);

module.exports = router;
