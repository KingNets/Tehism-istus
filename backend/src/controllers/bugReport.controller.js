const BugReport = require('../models/BugReport.model');

// Submit bug report
exports.submitBugReport = async (req, res) => {
    try {
        const { username, email, category, tool, description } = req.body;

        // Validate required fields
        if (!category || !description) {
            return res.status(400).json({
                success: false,
                message: 'Kategooria ja kirjeldus on kohustuslikud'
            });
        }

        // Create bug report
        const bugReport = new BugReport({
            username,
            email,
            category,
            tool,
            description
        });

        await bugReport.save();

        res.status(201).json({
            success: true,
            message: 'Vearaport edukalt esitatud',
            data: bugReport
        });

    } catch (error) {
        console.error('Bug report submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Viga vearaporti esitamisel',
            error: error.message
        });
    }
};

// Get all bug reports (admin only)
exports.getAllBugReports = async (req, res) => {
    try {
        const bugReports = await BugReport.find()
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            data: bugReports
        });

    } catch (error) {
        console.error('Get bug reports error:', error);
        res.status(500).json({
            success: false,
            message: 'Viga vearaportite laadimisel',
            error: error.message
        });
    }
};

// Get bug report by ID
exports.getBugReportById = async (req, res) => {
    try {
        const bugReport = await BugReport.findById(req.params.bugId);

        if (!bugReport) {
            return res.status(404).json({
                success: false,
                message: 'Vearaportit ei leitud'
            });
        }

        res.json({
            success: true,
            data: bugReport
        });

    } catch (error) {
        console.error('Get bug report error:', error);
        res.status(500).json({
            success: false,
            message: 'Viga vearaporti laadimisel',
            error: error.message
        });
    }
};

// Update bug report status (admin only)
exports.updateBugReportStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!['new', 'in-progress', 'resolved', 'closed'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Vigane staatus'
            });
        }

        const bugReport = await BugReport.findByIdAndUpdate(
            req.params.bugId,
            { status },
            { new: true }
        );

        if (!bugReport) {
            return res.status(404).json({
                success: false,
                message: 'Vearaportit ei leitud'
            });
        }

        res.json({
            success: true,
            message: 'Staatus uuendatud',
            data: bugReport
        });

    } catch (error) {
        console.error('Update bug report status error:', error);
        res.status(500).json({
            success: false,
            message: 'Viga staatuse uuendamisel',
            error: error.message
        });
    }
};

// Delete bug report (admin only)
exports.deleteBugReport = async (req, res) => {
    try {
        const bugReport = await BugReport.findByIdAndDelete(req.params.bugId);

        if (!bugReport) {
            return res.status(404).json({
                success: false,
                message: 'Vearaportit ei leitud'
            });
        }

        res.json({
            success: true,
            message: 'Vearaport kustutatud'
        });

    } catch (error) {
        console.error('Delete bug report error:', error);
        res.status(500).json({
            success: false,
            message: 'Viga vearaporti kustutamisel',
            error: error.message
        });
    }
};
