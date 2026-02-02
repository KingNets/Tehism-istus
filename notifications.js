// Notification System
(function() {
    const API_URL = 'https://peaceful-youthfulness-production-5af4.up.railway.app/api';
    let notificationCheckInterval = null;
    
    // Initialize notification system
    function initNotifications() {
        const user = window.getAuthUser ? window.getAuthUser() : null;
        const notificationWrapper = document.getElementById('notificationWrapper');
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationDropdown = document.getElementById('notificationDropdown');
        const markAllReadBtn = document.getElementById('markAllReadBtn');
        
        if (!user || !notificationWrapper) return;
        
        // Show notification bell when logged in
        notificationWrapper.style.display = 'block';
        
        // Load initial notifications
        loadNotifications(user.username);
        
        // Check for new notifications every 30 seconds
        notificationCheckInterval = setInterval(() => {
            loadUnreadCount(user.username);
        }, 30000);
        
        // Toggle dropdown
        notificationBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationDropdown.classList.toggle('hidden');
            if (!notificationDropdown.classList.contains('hidden')) {
                loadNotifications(user.username);
            }
        });
        
        // Mark all as read
        markAllReadBtn.addEventListener('click', async () => {
            await markAllAsRead(user.username);
            loadNotifications(user.username);
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!notificationWrapper.contains(e.target)) {
                notificationDropdown.classList.add('hidden');
            }
        });
    }
    
    // Load notifications
    async function loadNotifications(username) {
        try {
            const response = await fetch(`${API_URL}/notifications/user/${username}`);
            const result = await response.json();
            
            if (result.success) {
                displayNotifications(result.data);
                updateBadge(result.data.filter(n => !n.read).length);
            }
        } catch (error) {
            console.error('Error loading notifications:', error);
        }
    }
    
    // Load unread count only
    async function loadUnreadCount(username) {
        try {
            const response = await fetch(`${API_URL}/notifications/user/${username}/count`);
            const result = await response.json();
            
            if (result.success) {
                updateBadge(result.data.count);
            }
        } catch (error) {
            console.error('Error loading unread count:', error);
        }
    }
    
    // Display notifications
    function displayNotifications(notifications) {
        const listContainer = document.getElementById('notificationList');
        
        if (notifications.length === 0) {
            listContainer.innerHTML = `
                <div class="notification-empty">
                    <i data-lucide="inbox"></i>
                    <p>Teavitusi pole</p>
                </div>
            `;
            window.initLucideIcons();
            return;
        }
        
        listContainer.innerHTML = notifications.map(notification => `
            <div class="notification-item ${!notification.read ? 'unread' : ''}" 
                 data-id="${notification._id}" 
                 data-question-id="${notification.questionId}"
                 data-tool-id="${notification.toolId}">
                <div class="notification-icon">
                    <i data-lucide="message-circle"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-header">
                        <span class="notification-username">${escapeHtml(notification.replyUsername)}</span>
                        <span class="notification-time">${formatTimeAgo(notification.createdAt)}</span>
                    </div>
                    <p class="notification-text">Vastas sinu küsimusele: "${escapeHtml(notification.replyText)}"</p>
                    <div class="notification-tool">AI tööriist: ${escapeHtml(notification.toolId)}</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        listContainer.querySelectorAll('.notification-item').forEach(item => {
            item.addEventListener('click', () => handleNotificationClick(item));
        });
        
        window.initLucideIcons();
    }
    
    // Handle notification click
    async function handleNotificationClick(item) {
        const notificationId = item.dataset.id;
        const toolId = item.dataset.toolId;
        const questionId = item.dataset.questionId;
        
        // Mark as read
        await markAsRead(notificationId);
        
        // Close dropdown
        document.getElementById('notificationDropdown').classList.add('hidden');
        
        // Open tool modal and scroll to question
        if (window.openToolModal) {
            // Find tool data
            const toolData = window.toolsData ? window.toolsData.flat().find(t => 
                t.name.toLowerCase() === toolId.toLowerCase() || 
                t.name === toolId
            ) : null;
            
            if (toolData) {
                window.openToolModal(toolData);
                
                // After modal opens, switch to Q&A tab and scroll to question
                setTimeout(() => {
                    const qaTab = document.querySelector('[data-tab="qa"]');
                    if (qaTab) qaTab.click();
                    
                    setTimeout(() => {
                        const questionElement = document.querySelector(`[data-question-id="${questionId}"]`);
                        if (questionElement) {
                            questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            questionElement.style.backgroundColor = 'var(--color-primary-light)';
                            setTimeout(() => {
                                questionElement.style.backgroundColor = '';
                            }, 2000);
                        }
                    }, 100);
                }, 300);
            }
        }
        
        // Reload notifications
        const user = window.getAuthUser ? window.getAuthUser() : null;
        if (user) {
            loadNotifications(user.username);
        }
    }
    
    // Mark notification as read
    async function markAsRead(notificationId) {
        try {
            await fetch(`${API_URL}/notifications/${notificationId}/read`, {
                method: 'PUT'
            });
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    }
    
    // Mark all notifications as read
    async function markAllAsRead(username) {
        try {
            await fetch(`${API_URL}/notifications/user/${username}/read-all`, {
                method: 'PUT'
            });
            updateBadge(0);
        } catch (error) {
            console.error('Error marking all as read:', error);
        }
    }
    
    // Update badge count
    function updateBadge(count) {
        const badge = document.getElementById('notificationBadge');
        if (!badge) return;
        
        if (count > 0) {
            badge.textContent = count > 99 ? '99+' : count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
    
    // Format time ago
    function formatTimeAgo(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        
        if (seconds < 60) return 'Just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m tagasi`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h tagasi`;
        if (seconds < 604800) return `${Math.floor(seconds / 86400)}p tagasi`;
        return new Date(date).toLocaleDateString('et-EE');
    }
    
    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Clean up on logout
    function cleanupNotifications() {
        if (notificationCheckInterval) {
            clearInterval(notificationCheckInterval);
            notificationCheckInterval = null;
        }
        
        const notificationWrapper = document.getElementById('notificationWrapper');
        if (notificationWrapper) {
            notificationWrapper.style.display = 'none';
        }
        
        updateBadge(0);
    }
    
    // Export functions
    window.initNotifications = initNotifications;
    window.cleanupNotifications = cleanupNotifications;
    window.refreshNotifications = function() {
        const user = window.getAuthUser ? window.getAuthUser() : null;
        if (user) {
            loadNotifications(user.username);
        }
    };
    
    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNotifications);
    } else {
        initNotifications();
    }
})();
