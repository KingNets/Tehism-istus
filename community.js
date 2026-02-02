// Community Section - Latest Reviews and Questions
(function() {
    const API_URL = 'https://peaceful-youthfulness-production-5af4.up.railway.app/api';
    const MAX_ITEMS = 8;
    const CACHE_DURATION = 30000; // 30 seconds cache
    const FETCH_TIMEOUT = 2000; // Reduced to 2 seconds
    
    // Simple cache
    const cache = {
        reviews: { data: null, timestamp: 0 },
        questions: { data: null, timestamp: 0 }
    };

    // Initialize on page load - defer to avoid blocking main thread
    document.addEventListener('DOMContentLoaded', () => {
        setupEventListeners();
        
        // Defer community sections loading until after main content
        setTimeout(() => {
            // Load all sections in parallel
            Promise.all([
                loadLatestReviews(),
                loadLatestQuestions(),
                loadHighestRated(),
                loadNewAIs()
            ]).catch(err => console.error('Error loading community sections:', err));
        }, 500); // Wait 500ms to let main content render first
    });

    // Setup event listeners
    function setupEventListeners() {
        // Click handler for questions in latest questions section
        document.addEventListener('click', (e) => {
            const questionCard = e.target.closest('.community-item.question[data-question-id]');
            if (questionCard) {
                e.preventDefault();
                const toolName = questionCard.dataset.toolName;
                const questionId = questionCard.dataset.questionId;
                
                if (toolName && typeof window.openToolModal === 'function') {
                    // Open modal with question ID to scroll to it
                    window.openToolModal({
                        title: toolName,
                        questionId: questionId  // Pass question ID to scroll to
                    });
                }
            }
        });
    }

    // Load latest reviews
    async function loadLatestReviews(forceRefresh = false) {
        const container = document.getElementById('latestReviewsContainer');
        if (!container) return;

        try {
            // Check cache first (unless force refresh)
            const now = Date.now();
            if (!forceRefresh && cache.reviews.data && (now - cache.reviews.timestamp) < CACHE_DURATION) {
                displayReviews(cache.reviews.data);
                return;
            }
            
            // Try to fetch from backend first with timeout
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
                
                const response = await fetch(`${API_URL}/reviews?limit=${MAX_ITEMS}`, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const data = await response.json();
                    const reviews = data.reviews || data.data || data || [];
                    if (reviews.length > 0) {
                        cache.reviews = { data: reviews.slice(0, MAX_ITEMS), timestamp: now };
                        displayReviews(cache.reviews.data);
                        return;
                    }
                }
            } catch (error) {
                console.log('API not available, trying localStorage:', error);
            }
            
            // Fallback to localStorage if API fails
            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            if (reviews.length > 0) {
                displayReviews(reviews.slice(0, MAX_ITEMS));
            } else {
                showEmptyState(container, 'review');
            }
        } catch (error) {
            console.error('Error loading reviews:', error);
            showEmptyState(container, 'review');
        }
    }

    // Load latest questions
    async function loadLatestQuestions() {
        const container = document.getElementById('latestQuestionsContainer');
        if (!container) return;

        try {
            // Check cache first
            const now = Date.now();
            if (cache.questions.data && (now - cache.questions.timestamp) < CACHE_DURATION) {
                displayQuestions(cache.questions.data);
                return;
            }
            
            // Try to fetch from backend first with timeout
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
                
                const response = await fetch(`${API_URL}/questions?limit=${MAX_ITEMS}`, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const data = await response.json();
                    const questions = data.questions || data.data || data || [];
                    if (questions.length > 0) {
                        cache.questions = { data: questions.slice(0, MAX_ITEMS), timestamp: now };
                        displayQuestions(cache.questions.data);
                        return;
                    }
                }
            } catch (error) {
                console.log('API not available, trying localStorage:', error);
            }
            
            // Fallback to localStorage if API fails
            const questions = JSON.parse(localStorage.getItem('questions') || '[]');
            if (questions.length > 0) {
                displayQuestions(questions.slice(0, MAX_ITEMS));
            } else {
                showEmptyState(container, 'question');
            }
        } catch (error) {
            console.error('Error loading questions:', error);
            showEmptyState(container, 'question');
        }
    }

    // Helper function to check if text is a placeholder
    function isPlaceholderText(text) {
        if (!text || text.trim().length === 0) return true;
        
        // Only filter out obvious placeholder patterns, allow short genuine reviews
        const placeholderPatterns = [
            /^placeholder$/i,
            /^sample$/i,
            /^demo$/i,
            /^xxx+$/i,
            /^aaa+$/i,
            /^lorem ipsum/i
        ];
        
        const trimmedText = text.trim();
        
        // Check against patterns only
        return placeholderPatterns.some(pattern => pattern.test(trimmedText));
    }

    // Display reviews
    function displayReviews(reviews) {
        const container = document.getElementById('latestReviewsContainer');
        if (!container) return;

        // Filter out placeholder reviews
        const validReviews = reviews.filter(review => {
            const text = review.text || review.comment || '';
            return !isPlaceholderText(text);
        });

        if (validReviews.length === 0) {
            showEmptyState(container, 'review');
            return;
        }

        container.innerHTML = validReviews.map(review => createReviewCard(review)).join('');
        
        // Re-initialize Lucide icons
        if (window.lucide) {
            window.initLucideIcons();
        }
    }

    // Display questions
    function displayQuestions(questions) {
        const container = document.getElementById('latestQuestionsContainer');
        if (!container) return;

        if (questions.length === 0) {
            showEmptyState(container, 'question');
            return;
        }

        container.innerHTML = questions.map(question => createQuestionCard(question)).join('');
        
        // Re-initialize Lucide icons
        if (window.lucide) {
            window.initLucideIcons();
        }
    }

    // Create review card HTML
    function createReviewCard(review) {
        const stars = generateStars(review.rating);
        const timeAgo = getTimeAgo(review.createdAt || review.timestamp);
        // API returns: toolId, username, text
        // LocalStorage returns: toolName, userName, comment
        const toolName = review.toolName || review.toolId || 'Unknown Tool';
        const username = review.username || review.userName || review.userEmail || 'Anonymous';
        const comment = review.text || review.comment || 'Hinnang ilma kommentaarita';
        
        return `
            <div class="community-item review">
                <div class="community-item-header">
                    <div class="community-item-icon">
                        <i data-lucide="star"></i>
                    </div>
                    <div class="community-item-info">
                        <div class="community-item-tool">${escapeHtml(toolName)}</div>
                        <div class="community-item-meta">
                            <span class="community-item-user">
                                <i data-lucide="user"></i>
                                ${escapeHtml(username)}
                            </span>
                            <span class="community-item-date">
                                <i data-lucide="clock"></i>
                                ${timeAgo}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="community-item-rating">
                    <div class="community-item-stars">
                        ${stars}
                    </div>
                    <span class="community-item-rating-value">${review.rating}/5</span>
                </div>
                <p class="community-item-content">${escapeHtml(comment)}</p>
            </div>
        `;
    }

    // Create question card HTML
    function createQuestionCard(question) {
        const timeAgo = getTimeAgo(question.createdAt || question.timestamp);
        // API returns: toolId, username, text
        // LocalStorage returns: toolName, userName, question, description
        const toolName = question.toolName || question.toolId || 'Unknown Tool';
        const username = question.username || question.userName || question.userEmail || 'Anonymous';
        const questionText = question.text || question.question || 'Küsimus';
        const questionId = question._id || question.id || '';
        
        return `
            <div class="community-item question" 
                 data-question-id="${questionId}" 
                 data-tool-name="${escapeHtml(toolName)}"
                 style="cursor: pointer;"
                 title="Klõpsa, et näha seda küsimust tool modalis">
                <div class="community-item-header">
                    <div class="community-item-icon">
                        <i data-lucide="help-circle"></i>
                    </div>
                    <div class="community-item-info">
                        <div class="community-item-tool">${escapeHtml(toolName)}</div>
                        <div class="community-item-meta">
                            <span class="community-item-user">
                                <i data-lucide="user"></i>
                                ${escapeHtml(username)}
                            </span>
                            <span class="community-item-date">
                                <i data-lucide="clock"></i>
                                ${timeAgo}
                            </span>
                        </div>
                    </div>
                </div>
                <p class="community-item-content">${escapeHtml(questionText)}</p>
            </div>
        `;
    }

    // Generate star icons
    function generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i data-lucide="star" class="filled"></i>';
            } else {
                stars += '<i data-lucide="star" class="empty"></i>';
            }
        }
        return stars;
    }

    // Show empty state
    function showEmptyState(container, type) {
        let icon, title, message;
        
        switch(type) {
            case 'review':
                icon = 'star';
                title = 'Hinnanguid ei leitud';
                message = 'Ole esimene, kes annab hinnanguid AI tööriistadele!';
                break;
            case 'question':
                icon = 'help-circle';
                title = 'Küsimusi ei leitud';
                message = 'Ole esimene, kes küsib küsimusi AI tööriistade kohta!';
                break;
            case 'highest-rated':
                icon = 'trophy';
                title = 'Hinnatud tööriistu ei leitud';
                message = 'Hinnangud tulevad peagi!';
                break;
            case 'new-ai':
                icon = 'sparkles';
                title = 'Uusi tööriistu ei leitud';
                message = 'Uued tööriistad ilmuvad varsti!';
                break;
            default:
                icon = 'info';
                title = 'Sisu ei leitud';
                message = 'Sisu ilmub varsti!';
        }

        container.innerHTML = `
            <div class="community-empty">
                <i data-lucide="${icon}"></i>
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
        `;

        // Re-initialize Lucide icons
        if (window.lucide) {
            window.initLucideIcons();
        }
    }

    // Get time ago string
    function getTimeAgo(date) {
        if (!date) return 'Hiljuti';
        
        const now = new Date();
        const past = new Date(date);
        const diffMs = now - past;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just nüüd';
        if (diffMins < 60) return `${diffMins} min tagasi`;
        if (diffHours < 24) return `${diffHours}h tagasi`;
        if (diffDays < 7) return `${diffDays}p tagasi`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)}n tagasi`;
        
        return past.toLocaleDateString('et-EE', { month: 'short', day: 'numeric' });
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Load highest rated AI tools
    async function loadHighestRated() {
        const container = document.getElementById('highestRatedContainer');
        if (!container) return;

        try {
            // Try to fetch from backend API first (based on actual user reviews)
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
                
                const response = await fetch(`${API_URL}/reviews/highest-rated?limit=${MAX_ITEMS}`, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const result = await response.json();
                    const highestRated = result.data || [];
                    
                    if (highestRated.length > 0) {
                        // Enrich with tool details from toolsData
                        const enrichedTools = highestRated.map(item => {
                            // Find tool in toolsData by toolId
                            let toolDetails = null;
                            if (window.toolsData) {
                                // Search through all tools
                                Object.values(window.toolsData).forEach(tool => {
                                    if (tool.name === item.toolId) {
                                        toolDetails = tool;
                                    }
                                });
                            }
                            
                            return {
                                name: item.toolId,
                                rating: item.averageRating,
                                reviewCount: item.reviewCount,
                                logo: toolDetails?.logo || '',
                                description: toolDetails?.description || 'Üks parematest AI tööriistadest',
                                category: toolDetails?.category || 'AI Tool',
                                isPro: toolDetails?.isPro || false
                            };
                        });
                        
                        displayHighestRated(enrichedTools);
                        return;
                    }
                }
            } catch (error) {
                console.log('API not available for highest rated, trying toolsData:', error);
            }
            
            // Fallback to static toolsData if API fails
            if (window.toolsData) {
                const allTools = [];
                
                // Collect all tools
                Object.values(window.toolsData).forEach(tool => {
                    if (tool.rating && tool.name) {
                        allTools.push(tool);
                    }
                });

                // Sort by rating (highest first)
                allTools.sort((a, b) => (b.rating || 0) - (a.rating || 0));

                // Take top 8
                const topRated = allTools.slice(0, MAX_ITEMS);
                
                if (topRated.length > 0) {
                    displayHighestRated(topRated);
                    return;
                }
            }
            
            showEmptyState(container, 'highest-rated');
        } catch (error) {
            console.error('Error loading highest rated:', error);
            showEmptyState(container, 'highest-rated');
        }
    }

    // Load new AI tools
    async function loadNewAIs() {
        const container = document.getElementById('newAIsContainer');
        if (!container) return;

        try {
            // Try to load from tools data
            if (window.toolsData && window.toolsData.categories) {
                const allTools = [];
                
                // Collect all tools from all categories
                Object.values(window.toolsData.categories).forEach(category => {
                    if (category.tools && Array.isArray(category.tools)) {
                        category.tools.forEach(tool => {
                            allTools.push({
                                ...tool,
                                category: category.name
                            });
                        });
                    }
                });

                // If tools have dateAdded, sort by that, otherwise just take first 8
                if (allTools.some(tool => tool.dateAdded)) {
                    allTools.sort((a, b) => {
                        const dateA = new Date(a.dateAdded || 0);
                        const dateB = new Date(b.dateAdded || 0);
                        return dateB - dateA;
                    });
                }

                // Take first/newest 8
                const newTools = allTools.slice(0, MAX_ITEMS);
                
                if (newTools.length > 0) {
                    displayNewAIs(newTools);
                } else {
                    showEmptyState(container, 'new-ai');
                }
            } else {
                // toolsData not available, show empty state
                showEmptyState(container, 'new-ai');
            }
        } catch (error) {
            console.error('Error loading new AI tools:', error);
            showEmptyState(container, 'new-ai');
        }
    }

    // Display highest rated AI tools
    function displayHighestRated(tools) {
        const container = document.getElementById('highestRatedContainer');
        if (!container) return;

        if (tools.length === 0) {
            showEmptyState(container, 'highest-rated');
            return;
        }

        container.innerHTML = tools.map(tool => createToolCard(tool)).join('');

        // Re-initialize Lucide icons
        if (window.lucide) {
            window.initLucideIcons();
        }
    }

    // Display new AI tools
    function displayNewAIs(tools) {
        const container = document.getElementById('newAIsContainer');
        if (!container) return;

        if (tools.length === 0) {
            showEmptyState(container, 'new-ai');
            return;
        }

        container.innerHTML = tools.map(tool => createToolCard(tool)).join('');

        // Re-initialize Lucide icons
        if (window.lucide) {
            window.initLucideIcons();
        }
    }

    // Create tool card HTML
    function createToolCard(tool) {
        const name = escapeHtml(tool.name || 'Unknown Tool');
        const category = escapeHtml(tool.category || 'AI Tool');
        const description = escapeHtml(tool.description || tool.shortDescription || '');
        const rating = tool.rating || 0;
        const isPro = tool.isPro || false;
        const stars = generateStars(rating);
        const dateLabel = tool.dateAdded ? getTimeAgo(tool.dateAdded) : 'Uus';

        return `
            <div class="community-item tool-card" data-tool="${escapeHtml(tool.name || '')}" onclick="openToolFromCommunity('${escapeHtml(tool.name || '')}')">
                <div class="tool-card-header">
                    <div class="tool-info">
                        <h3 class="tool-name">${name}</h3>
                        <span class="tool-category">${category}</span>
                    </div>
                    ${isPro ? '<span class="tool-badge pro">Pro</span>' : ''}
                </div>
                <div class="tool-rating">
                    ${stars}
                    <span class="rating-value">${rating.toFixed(1)}</span>
                </div>
                <p class="tool-description">${description}</p>
                <div class="tool-footer">
                    <span class="tool-date">${dateLabel}</span>
                    <span class="tool-link">
                        Vaata täpsemalt
                        <i data-lucide="arrow-right"></i>
                    </span>
                </div>
            </div>
        `;
    }

    // Helper function to open tool modal from community section
    window.openToolFromCommunity = function(toolName) {
        if (!toolName || !window.toolsData) return;
        
        // Find the tool in toolsData
        let toolData = null;
        Object.values(window.toolsData).forEach(tool => {
            if (tool.name === toolName) {
                toolData = tool;
            }
        });
        
        if (toolData && typeof window.openToolModal === 'function') {
            // Open the modal with tool data
            window.openToolModal({
                title: toolData.name,
                description: toolData.description || toolData.shortDescription || '',
                category: toolData.category || 'AI Tool',
                rating: toolData.rating || 0,
                users: Math.floor(100 + (toolData.name.length * 100)),
                isFreemium: toolData.isPro || false
            });
        }
    };

    // Export functions for testing
    window.communitySection = {
        loadLatestReviews,
        loadLatestQuestions,
        loadHighestRated,
        loadNewAIs
    };

})();
