// Feedback Widget
(function() {
    const API_URL = 'https://peaceful-youthfulness-production-5af4.up.railway.app/api';
    
    // Initialize feedback widget
    function initFeedbackWidget() {
        const feedbackBubble = document.getElementById('feedbackBubble');
        const feedbackModal = document.getElementById('feedbackModal');
        const closeFeedbackModal = document.getElementById('closeFeedbackModal');
        const cancelFeedback = document.getElementById('cancelFeedback');
        const feedbackForm = document.getElementById('feedbackForm');
        const feedbackType = document.getElementById('feedbackType');
        const categoryGroup = document.getElementById('categoryGroup');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const charCounter = document.querySelector('.char-counter');
        const feedbackSuccess = document.getElementById('feedbackSuccess');
        const closeFeedbackSuccess = document.getElementById('closeFeedbackSuccess');
        
        if (!feedbackBubble) return;
        
        // Open modal
        feedbackBubble.addEventListener('click', () => {
            feedbackModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                window.initLucideIcons();
            }, 100);
        });
        
        // Close modal
        function closeModal() {
            feedbackModal.classList.add('hidden');
            document.body.style.overflow = '';
            feedbackForm.reset();
            feedbackSuccess.classList.add('hidden');
            feedbackForm.style.display = 'block';
            categoryGroup.style.display = 'none';
            charCounter.textContent = '0/1000';
        }
        
        closeFeedbackModal.addEventListener('click', closeModal);
        cancelFeedback.addEventListener('click', closeModal);
        closeFeedbackSuccess.addEventListener('click', closeModal);
        
        // Close on backdrop click
        feedbackModal.addEventListener('click', (e) => {
            if (e.target === feedbackModal) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !feedbackModal.classList.contains('hidden')) {
                closeModal();
            }
        });
        
        // Show/hide category field based on type
        feedbackType.addEventListener('change', (e) => {
            if (e.target.value === 'recommend-ai') {
                categoryGroup.style.display = 'block';
                document.getElementById('aiCategory').required = true;
            } else {
                categoryGroup.style.display = 'none';
                document.getElementById('aiCategory').required = false;
            }
        });
        
        // Character counter
        feedbackMessage.addEventListener('input', (e) => {
            const length = e.target.value.length;
            charCounter.textContent = `${length}/1000`;
            
            if (length > 900) {
                charCounter.style.color = 'var(--color-warning)';
            } else if (length === 1000) {
                charCounter.style.color = 'var(--color-danger)';
            } else {
                charCounter.style.color = 'var(--color-text-tertiary)';
            }
        });
        
        // Form submission
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitFeedback');
            const originalContent = submitBtn.innerHTML;
            
            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i><span>Saadan...</span>';
                window.initLucideIcons();
                
                const formData = {
                    type: document.getElementById('feedbackType').value,
                    category: document.getElementById('aiCategory').value,
                    message: feedbackMessage.value.trim(),
                    email: document.getElementById('feedbackEmail').value.trim(),
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString(),
                    page: window.location.pathname
                };
                
                // Get user info if logged in
                const user = window.getAuthUser ? window.getAuthUser() : null;
                if (user) {
                    formData.username = user.username;
                    formData.userEmail = user.email;
                }
                
                // Send to backend
                const response = await fetch(`${API_URL}/feedback`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) {
                    throw new Error('Failed to submit feedback');
                }
                
                // Show success message
                feedbackForm.style.display = 'none';
                feedbackSuccess.classList.remove('hidden');
                
                // Track analytics (if available)
                if (window.gtag) {
                    window.gtag('event', 'feedback_submitted', {
                        feedback_type: formData.type
                    });
                }
                
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('Viga tagasiside saatmisel. Palun proovi hiljem uuesti või võta meiega ühendust: info@aitoolid.ee');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                window.initLucideIcons();
            }
        });
        
        // Initialize Lucide icons
        window.initLucideIcons();
    }
    
    // Add CSS animation for spinner
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFeedbackWidget);
    } else {
        initFeedbackWidget();
    }
})();
