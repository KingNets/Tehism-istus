// Bug Report Functionality
(function() {
    // Get elements
    const bugReportBtn = document.getElementById('bugReportBtn');
    const bugReportModal = document.getElementById('bugReportModal');
    const closeBugModal = document.getElementById('closeBugModal');
    const cancelBugReport = document.getElementById('cancelBugReport');
    const bugReportForm = document.getElementById('bugReportForm');
    const bugSuccessMessage = document.getElementById('bugSuccessMessage');
    const closeBugSuccess = document.getElementById('closeBugSuccess');
    const bugModalOverlay = document.querySelector('.bug-modal-overlay');
    
    // Detect browser and device info
    function detectBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let os = 'Unknown';
        
        // Detect browser
        if (ua.indexOf('Firefox') > -1) {
            browser = 'Firefox';
        } else if (ua.indexOf('Chrome') > -1) {
            browser = 'Chrome';
        } else if (ua.indexOf('Safari') > -1) {
            browser = 'Safari';
        } else if (ua.indexOf('Edge') > -1) {
            browser = 'Edge';
        } else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) {
            browser = 'Opera';
        }
        
        // Detect OS
        if (ua.indexOf('Win') > -1) os = 'Windows';
        else if (ua.indexOf('Mac') > -1) os = 'macOS';
        else if (ua.indexOf('Linux') > -1) os = 'Linux';
        else if (ua.indexOf('Android') > -1) os = 'Android';
        else if (ua.indexOf('iOS') > -1) os = 'iOS';
        
        // Detect device type
        const isMobile = /Mobile|Android|iPhone/i.test(ua);
        const deviceType = isMobile ? 'Mobile' : 'Desktop';
        
        return `${browser} on ${os} (${deviceType})`;
    }
    
    // Set browser info on load
    document.addEventListener('DOMContentLoaded', () => {
        const bugBrowserInput = document.getElementById('bugBrowser');
        if (bugBrowserInput) {
            bugBrowserInput.value = detectBrowserInfo();
        }
    });
    
    // Open modal
    function openBugModal() {
        bugReportModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Re-initialize Lucide icons in the modal
        setTimeout(() => {
            if (window.lucide) {
                window.initLucideIcons();
            }
        }, 100);
    }
    
    // Close modal
    function closeBugModalFunc() {
        bugReportModal.style.display = 'none';
        document.body.style.overflow = '';
        
        // Reset form and hide success message
        setTimeout(() => {
            bugReportForm.reset();
            bugReportForm.style.display = 'block';
            bugSuccessMessage.style.display = 'none';
            document.getElementById('bugBrowser').value = detectBrowserInfo();
        }, 300);
    }
    
    // Event listeners
    if (bugReportBtn) {
        bugReportBtn.addEventListener('click', openBugModal);
    }
    
    if (closeBugModal) {
        closeBugModal.addEventListener('click', closeBugModalFunc);
    }
    
    if (cancelBugReport) {
        cancelBugReport.addEventListener('click', closeBugModalFunc);
    }
    
    if (bugModalOverlay) {
        bugModalOverlay.addEventListener('click', closeBugModalFunc);
    }
    
    if (closeBugSuccess) {
        closeBugSuccess.addEventListener('click', closeBugModalFunc);
    }
    
    // Handle form submission
    if (bugReportForm) {
        bugReportForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                title: document.getElementById('bugTitle').value,
                type: document.getElementById('bugType').value,
                description: document.getElementById('bugDescription').value,
                email: document.getElementById('bugEmail').value,
                browser: document.getElementById('bugBrowser').value,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            // Log to console (in production, send to backend)
            console.log('Bug Report Submitted:', formData);
            
            // Store in localStorage for now (in production, send to backend API)
            try {
                let bugReports = JSON.parse(localStorage.getItem('bug_reports') || '[]');
                bugReports.push(formData);
                localStorage.setItem('bug_reports', JSON.stringify(bugReports));
                
                // Optional: Send to backend API
                // await fetch('/api/bug-report', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(formData)
                // });
                
                // Show success message
                bugReportForm.style.display = 'none';
                bugSuccessMessage.style.display = 'block';
                
                // Re-initialize Lucide icons for success message
                setTimeout(() => {
                    if (window.lucide) {
                        window.initLucideIcons();
                    }
                }, 100);
                
                // Optional: Send email notification
                console.log('Bug report saved. In production, this would be sent to: support@ai-tools.ee');
                
            } catch (error) {
                console.error('Error saving bug report:', error);
                alert('Vabandust, vea teatamisel tekkis probleem. Palun proovi hiljem uuesti või võta meiega otse ühendust: support@ai-tools.ee');
            }
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape' && bugReportModal.style.display === 'block') {
            closeBugModalFunc();
        }
    });
    
})();
