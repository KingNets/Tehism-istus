const express = require('express');
const router = express.Router();
const bugReportController = require('../controllers/bugReport.controller');

// Bug report routes
router.post('/', bugReportController.submitBugReport);
router.get('/', bugReportController.getAllBugReports);
router.get('/:bugId', bugReportController.getBugReportById);
router.put('/:bugId/status', bugReportController.updateBugReportStatus);
router.delete('/:bugId', bugReportController.deleteBugReport);

module.exports = router;
