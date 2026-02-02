// ===== Performance Optimizations =====
// Debounced Lucide icons initialization
let lucideDebounceTimer;
window.initLucideIcons = function() {
    clearTimeout(lucideDebounceTimer);
    lucideDebounceTimer = setTimeout(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, 100); // Wait 100ms before reinitializing icons
};

// ===== Header Functionality =====
// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// User menu toggle
const headerUserMenuBtn = document.getElementById('userMenuBtn');
const headerUserDropdown = document.getElementById('userDropdown');

if (headerUserMenuBtn && headerUserDropdown) {
    headerUserMenuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        headerUserDropdown.classList.toggle('hidden');
        headerUserMenuBtn.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!headerUserMenuBtn.contains(e.target) && !headerUserDropdown.contains(e.target)) {
            headerUserDropdown.classList.add('hidden');
            headerUserMenuBtn.classList.remove('active');
        }
    });

    // Close dropdown on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            headerUserDropdown.classList.add('hidden');
            headerUserMenuBtn.classList.remove('active');
        }
    });
}

// Logo click - scroll to top
const logoSection = document.querySelector('.logo-section');
if (logoSection) {
    logoSection.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Existing Functionality =====
// Fill last row of .tools-grid with invisible cards if needed
function fillToolGridRows() {
    const grids = document.querySelectorAll('.tools-grid');
    const cardsPerRow = 4; // Change if you want a different row size
    grids.forEach(grid => {
        // Remove old placeholders
        grid.querySelectorAll('.tool-card.placeholder').forEach(e => e.remove());
        const cards = grid.querySelectorAll('.tool-card:not(.placeholder)');
        const remainder = cards.length % cardsPerRow;
        if (remainder !== 0) {
            const placeholdersNeeded = cardsPerRow - remainder;
            for (let i = 0; i < placeholdersNeeded; i++) {
                const placeholder = document.createElement('div');
                placeholder.className = 'tool-card placeholder';
                placeholder.style.visibility = 'hidden';
                placeholder.style.pointerEvents = 'none';
                grid.appendChild(placeholder);
            }
        }
    });
}

// Utility to render all tool cards for a grid at once, then fill placeholders
function renderToolCards(grid, cardElements) {
    grid.innerHTML = '';
    cardElements.forEach(card => grid.appendChild(card));
    fillToolGridRows();
}
// AI Categories data
// AI Categories data with icons
const categories = [
    { id: 'all', name: 'Kõik', icon: 'sparkles' },
    { id: 'kirjutamine', name: 'Kirjutamine', icon: 'file-text' },
    { id: 'pildiloomine', name: 'Pildiloomine', icon: 'image' },
    { id: 'kunst', name: 'Kunst', icon: 'palette' },
    { id: 'chatbot', name: 'Chatbot', icon: 'message-square' },
    { id: 'kõne', name: 'Kõne', icon: 'mic' },
    { id: 'muusika', name: 'Muusika', icon: 'music' },
    { id: 'video', name: 'Video', icon: 'video' },
    { id: 'klienditeenindus', name: 'Klienditeenindus', icon: 'headphones' },
    { id: 'tutvumine', name: 'Tutvumine', icon: 'heart' },
    { id: 'sotsiaalmeedia', name: 'Sotsiaalmeedia', icon: 'share-2' },
    { id: 'turundus', name: 'Turundus', icon: 'trending-up' },
    { id: 'programmeerimine', name: 'Programmeerimine', icon: 'code' },
    { id: 'investeerimine', name: 'Investeerimine', icon: 'dollar-sign' },
    { id: 'reisimine', name: 'Reisimine', icon: 'plane' },
    { id: 'õppimine', name: 'Õppimine', icon: 'graduation-cap' },
    { id: 'automatiseerimine', name: 'Automatiseerimine', icon: 'cpu' },
    { id: 'tervis', name: 'Tervis', icon: 'activity' },
    { id: 'anime', name: 'Anime', icon: 'ghost' },
    { id: 'produktiivsus', name: 'Produktiivsus', icon: 'check-square' },
    { id: 'e-kaubandus', name: 'E-kaubandus', icon: 'shopping-cart' }
];

let selectedCategory = 'all';

// Populate category items
function populateCategories() {
    const categoriesWrapper = document.getElementById('categoriesWrapper');
    if (!categoriesWrapper) return;

    categoriesWrapper.innerHTML = categories.map((category, index) => `
        <button 
            class="category-btn ${category.id === selectedCategory ? 'active' : ''}"
            data-category="${category.name === 'Kõik' ? 'all' : category.name}"
            style="animation-delay: ${0.3 + index * 0.05}s"
        >
            <i data-lucide="${category.icon}"></i>
            <span>${category.name}</span>
        </button>
    `).join('');

    // Re-initialize Lucide icons
    if (window.lucide) {
        window.initLucideIcons();
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    // Search on button click
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    // Search on Enter key
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Handle manual text deletion/clearing
    searchInput.addEventListener('input', function (e) {
        const query = searchInput.value.trim();

        // If search input is completely empty, restore original view
        if (query === '') {
            clearSearch();
        }
    });

    // Live search removed; search only updates on Enter or Otsi
}

//For Google Analytics
function trackSearch(term) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "search", { search_term: term });
}

// Perform search
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.toLowerCase();
    console.log('in performance ')
    if (!query.trim()) {
        // Do nothing if search bar is empty
        return;
    }
    console.log(categories)
    // Update title if it's a category search
    if (categories.map(c => c.name.toLowerCase()).includes(query)) {
        updatePageTitleForCategory(query);
    } else {
        updateSearchTitle(query);
    }

    trackSearch(query);
    filterTools(query);

    // Smooth scroll to first visible tool grid after search
    setTimeout(() => {
        const visibleGrid = Array.from(document.querySelectorAll('.tools-grid')).find(grid => grid.offsetParent !== null);
        if (visibleGrid) {
            // Get the grid's position and scroll with offset
            const gridRect = visibleGrid.getBoundingClientRect();
            const scrollOffset = window.pageYOffset + gridRect.top - 100; // 100px offset from top
            
            window.scrollTo({
                top: scrollOffset,
                behavior: 'smooth'
            });
        }
    }, 100);
}

// Update title for search results
function updateSearchTitle(query) {
    const categoryTitles = document.querySelectorAll('.category-title');

    // Hide all category titles
    categoryTitles.forEach(title => {
        title.style.display = 'none';
    });

    // Create or update dynamic search title
    let dynamicTitle = document.querySelector('.dynamic-category-title');
    if (!dynamicTitle) {
        dynamicTitle = document.createElement('h2');
        dynamicTitle.className = 'category-title dynamic-category-title';
        dynamicTitle.style.marginTop = '4rem';

        const toolsSection = document.querySelector('.tools-section');
        toolsSection.insertBefore(dynamicTitle, toolsSection.firstChild);
    }

    dynamicTitle.textContent = `Otsingutulemused: "${query}"`;
    dynamicTitle.style.display = 'block';
}

// Smart keyword mapping for natural language queries
const intentKeywords = {
    // Writing & Content
    'kirjutan': ['writing', 'kirjutamine', 'content', 'text'],
    'kirjutama': ['writing', 'kirjutamine', 'content', 'text'],
    'kirjutada': ['writing', 'kirjutamine', 'content', 'text'],
    'kirjuta': ['writing', 'kirjutamine', 'content', 'text'],
    'kirjand': ['writing', 'kirjutamine', 'content', 'text'],
    'kirju': ['writing', 'kirjutamine', 'content', 'text'],
    'artikkel': ['writing', 'kirjutamine', 'content'],
    'tekst': ['writing', 'kirjutamine', 'text'],
    'blogi': ['writing', 'kirjutamine', 'blog', 'content'],
    'sisu': ['content', 'writing', 'kirjutamine'],
    'essee': ['writing', 'kirjutamine', 'essay'],
    'referaat': ['writing', 'kirjutamine', 'content'],

    // Images & Art
    'pilt': ['image', 'pildiloomine', 'art', 'kunst'],
    'pildi': ['image', 'pildiloomine', 'art'],
    'pilte': ['image', 'pildiloomine', 'art'],
    'joonista': ['image', 'art', 'pildiloomine'],
    'joonistama': ['image', 'art', 'pildiloomine'],
    'loo': ['generation', 'create', 'image', 'video', 'music', 'content'],
    'luua': ['generation', 'create', 'image', 'video', 'music', 'content'],
    'generee': ['generation', 'create', 'image', 'video', 'music'],
    'tee': ['create', 'generation', 'image', 'video', 'music'],
    'teha': ['create', 'generation', 'image', 'video', 'music'],
    'disain': ['design', 'image', 'art', 'pildiloomine'],
    'foto': ['image', 'photo', 'pildiloomine'],
    'kunst': ['art', 'kunst', 'image'],
    'logo': ['design', 'image', 'art'],

    // Video
    'video': ['video', 'animation'],
    'film': ['video', 'animation'],
    'animatsioon': ['animation', 'video'],
    'klipp': ['video', 'clip'],

    // Music & Audio
    'muusika': ['music', 'muusika', 'audio'],
    'laul': ['music', 'muusika', 'audio'],
    'heli': ['audio', 'sound', 'music'],
    'podcast': ['audio', 'podcast', 'speech'],

    // Chat & Communication
    'rääki': ['chat', 'chatbot', 'conversation'],
    'rääkima': ['chat', 'chatbot', 'conversation'],
    'vestlus': ['chat', 'chatbot', 'conversation'],
    'vestl': ['chat', 'chatbot', 'conversation'],
    'küsi': ['chat', 'chatbot', 'qa'],
    'küsimus': ['chat', 'chatbot', 'qa'],
    'vasta': ['chat', 'chatbot', 'qa'],
    'aita': ['assistant', 'chatbot', 'support', 'help'],
    'aitama': ['assistant', 'chatbot', 'support', 'help'],
    'abiста': ['assistant', 'chatbot', 'support'],
    'assistent': ['assistant', 'chatbot', 'chat'],
    'abi': ['assistant', 'chatbot', 'support'],
    'bot': ['chatbot', 'bot', 'agent'],
    'vaja': ['need', 'assistant', 'help'],

    // Business & Customer Service
    'klient': ['customer', 'klienditeenindus', 'support'],
    'müük': ['sales', 'müük', 'business'],
    'tugi': ['support', 'customer', 'klienditeenindus'],
    'klienditeenindus': ['customer service', 'support'],

    // Programming & Development
    'kood': ['programming', 'code', 'programmeerimine', 'developer'],
    'programm': ['programming', 'programmeerimine', 'code'],
    'arendus': ['development', 'programming', 'developer'],
    'rakendus': ['app', 'application', 'development'],
    'veeb': ['web', 'development', 'website'],

    // Productivity & Automation
    'automaatika': ['automation', 'automatiseerimine', 'workflow'],
    'automatiseeri': ['automation', 'automatiseerimine'],
    'produktiivsus': ['productivity', 'produktiivsus', 'workflow'],
    'töövooo': ['workflow', 'automation', 'productivity'],
    'ülesanne': ['task', 'productivity', 'workflow'],

    // Data & Analysis
    'andmed': ['data', 'analytics', 'analysis'],
    'analüüs': ['analytics', 'analysis', 'data'],
    'statistika': ['analytics', 'statistics', 'data'],

    // Marketing & Social Media
    'turundus': ['marketing', 'turundus', 'advertising'],
    'reklaam': ['advertising', 'marketing'],
    'sotsiaalmeedia': ['social media', 'sotsiaalmeedia', 'marketing'],
    'postitama': ['social media', 'content', 'posting'],

    // Learning & Research
    'õppima': ['studying', 'õppimine', 'learning', 'education'],
    'õppimine': ['studying', 'learning', 'education'],
    'uurima': ['research', 'uurimine', 'information'],
    'teadus': ['research', 'science', 'uurimine'],

    // Other
    'tõlkima': ['translation', 'language', 'multilingual'],
    'keel': ['language', 'translation', 'multilingual'],
    'tervis': ['health', 'tervis', 'wellness'],
    'reisima': ['travel', 'reisimine', 'trip'],
    'investeeri': ['investing', 'investeerimine', 'finance'],
    'raha': ['finance', 'investing', 'money']
};

// Extract intent from natural language query
function extractIntent(query) {
    const lowerQuery = query.toLowerCase();
    const foundKeywords = new Set();

    // Check for direct keyword matches
    for (const [intent, keywords] of Object.entries(intentKeywords)) {
        if (lowerQuery.includes(intent)) {
            keywords.forEach(kw => foundKeywords.add(kw));
        }
    }

    return Array.from(foundKeywords);
}

// Filter tools based on search query with smart intent detection
function filterTools(query) {
    const grids = Array.from(document.querySelectorAll('.tools-grid'));
    // Always restore all cards to their original grid before filtering
    if (window.allToolCardsCache) {
        window.allToolCardsCache.forEach(({ card, gridIdx }) => {
            if (grids[gridIdx] && card.parentElement !== grids[gridIdx]) {
                grids[gridIdx].appendChild(card);
            }
            card.style.display = 'block';
        });
    }
    const allCards = window.allToolCardsCache ? window.allToolCardsCache.map(obj => obj.card) : grids.flatMap(grid => Array.from(grid.querySelectorAll('.tool-card:not(.placeholder)')));
    let filteredCards = [];
    if (!query || query.trim() === '') {
        // Show all grids and all cards
        grids.forEach(grid => grid.style.display = 'grid');
        // Remove all placeholders before restoring cards
        grids.forEach(grid => grid.querySelectorAll('.tool-card.placeholder').forEach(card => card.remove()));
        allCards.forEach(card => {
            card.style.display = 'block';
            // Move card back to its original grid
            const originalGridIdx = card.dataset.originalGrid;
            if (typeof originalGridIdx !== 'undefined' && grids[originalGridIdx] && card.parentElement !== grids[originalGridIdx]) {
                grids[originalGridIdx].appendChild(card);
            }
        });
        fillToolGridRows();
    } else {
        const lowerQuery = query.toLowerCase();
        const categoryMappings = {
            'kunst': ['art', 'imaging', 'design', 'creative', 'visual'],
            'art': ['art', 'imaging', 'design', 'creative', 'visual'],
            'pildiloomine': ['imaging', 'image generation', 'art', 'visual'],
            'video': ['video', 'animation', 'film'],
            'muusika': ['music', 'audio', 'sound'],
            'chatbot': ['chatbot', 'chat', 'conversation', 'bot'],
            'kõne': ['speech', 'voice', 'audio'],
            'programmeerimine': ['programming', 'code', 'development'],
            'turundus': ['marketing', 'sales', 'business'],
            'produktiivsus': ['productivity', 'workflow', 'automation'],
            'kirjutamine': ['writing', 'content', 'text', 'academic'],
            'investeerimine': ['finance', 'investing', 'trading', 'stock', 'crypto', 'market'],
            'tutvumine': ['dating', 'relationships', 'social', 'companion'],
            'pildiloomine': ['image', 'imaging', 'art', 'visual', 'design']
        };
        const smartKeywords = extractIntent(lowerQuery);
        const isCategoryFilter = categoryMappings.hasOwnProperty(lowerQuery);
        filteredCards = allCards.filter(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            const searchableContent = `${title} ${description} ${tags}`;
            if (isCategoryFilter) {
                const categoryKeywords = categoryMappings[lowerQuery];
                return categoryKeywords.some(keyword => searchableContent.includes(keyword));
            } else {
                const directMatch = searchableContent.includes(lowerQuery);
                const smartMatch = smartKeywords.length > 0 && smartKeywords.some(keyword => searchableContent.includes(keyword));
                return directMatch || smartMatch;
            }
        });
        // Hide all grids except the first one
        grids.forEach((grid, i) => {
            grid.style.display = i === 0 ? 'grid' : 'none';
            // Remove all cards except placeholders from the first grid before rendering
            if (i === 0) {
                Array.from(grid.querySelectorAll('.tool-card:not(.placeholder)')).forEach(card => card.remove());
            }
        });
        // Render all filtered cards in the first grid
        renderToolCards(grids[0], filteredCards);
    }
    updateNoResultsMessage(query);
}

// Update no results message
function updateNoResultsMessage(query) {
    const toolsSection = document.querySelector('.tools-section');
    let noResultsDiv = document.querySelector('.no-results');

    const visibleCards = Array.from(document.querySelectorAll('.tool-card'))
        .filter(card => card.style.display !== 'none');

    if (query && visibleCards.length === 0) {
        if (!noResultsDiv) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.style.textAlign = 'center';
            noResultsDiv.style.padding = '3rem';
            noResultsDiv.style.fontSize = '1.2rem';
            noResultsDiv.style.color = '#555';
            toolsSection.appendChild(noResultsDiv);
        }
        noResultsDiv.textContent = `Otsingutulemusi päringule "${query}" ei leitud.`;
        noResultsDiv.style.display = 'block';
    } else if (noResultsDiv) {
        noResultsDiv.style.display = 'none';
    }
}

// Setup category filters
function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.dataset.category;
            selectedCategory = category;

            // Visual feedback
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update search input
            const searchInput = document.querySelector('.search-input');
            if (category === 'all') {
                searchInput.value = '';
                filterTools('');
                updatePageTitleForCategory('Kõik Tööriistad');
                
                // Show community sections when "All" is selected
                if (typeof showLatestUpdatesSection === 'function') {
                    showLatestUpdatesSection();
                }
            } else {
                searchInput.value = category;
                filterTools(category.toLowerCase());
                updatePageTitleForCategory(category);
                
                // Hide "Viimased AI Uuendused" section and community sections when specific category is clicked
                if (typeof hideLatestUpdatesSection === 'function') {
                    hideLatestUpdatesSection();
                }
            }

            // Smooth scroll to first visible tool grid if not "all"
            if (category !== 'all') {
                const visibleGrid = Array.from(document.querySelectorAll('.tools-grid')).find(grid => grid.offsetParent !== null);
                if (visibleGrid) {
                    // Get the grid's position and scroll with offset
                    const gridRect = visibleGrid.getBoundingClientRect();
                    const scrollOffset = window.pageYOffset + gridRect.top - 100; // 100px offset from top
                    
                    window.scrollTo({
                        top: scrollOffset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', function () {
    // Critical operations first
    populateCategories();
    setupSearch();
    setupCategoryFilters();

    // Cache all tool cards and their original grid
    window.allToolCardsCache = [];
    document.querySelectorAll('.tools-grid').forEach((grid, gridIdx) => {
        grid.querySelectorAll('.tool-card').forEach(card => {
            card.dataset.originalGrid = gridIdx;
            window.allToolCardsCache.push({ card, gridIdx });
        });
    });

    // Defer non-critical operations
    requestAnimationFrame(() => {
        if (typeof fillToolGridRows === 'function') {
            fillToolGridRows();
        }

        // Enhance existing tool cards to match new design
        enhanceToolCards();

        // Initialize title and count for "All" state
        updatePageTitleForCategory('all');

        // Initialize icons after all DOM updates
        if (window.initLucideIcons) {
            window.initLucideIcons();
        }
    });

    // Refill grid after filtering tools
    if (typeof filterTools === 'function') {
        const originalFilterTools = filterTools;
        filterTools = function (query) {
            originalFilterTools(query);
            if (typeof fillToolGridRows === 'function') {
                fillToolGridRows();
            }
        }
    }
});

// Enhance existing tool cards with new design structure
async function enhanceToolCards() {
    const cards = document.querySelectorAll('.tool-card:not(.placeholder):not(.request-card)');
    
    // Use requestIdleCallback for better performance (or setTimeout as fallback)
    const processCards = async () => {
        for (const card of cards) {
            // Skip if already enhanced
            if (card.querySelector('.tool-card-header')) continue;

            // Extract data
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            const tags = card.querySelectorAll('.tag');

            const title = titleEl ? titleEl.textContent : '';
            const description = descEl ? descEl.textContent : '';
            const category = tags.length > 0 ? tags[0].textContent : 'AI Tool';

            // Get actual rating from reviews - default to 0 if none exist
            let rating = '0.0';
            let reviewCount = 0;
            
            // Try to get actual rating from API
            try {
                // Use the exact title as toolId (case-sensitive)
                const reviewsResponse = await fetch(`https://peaceful-youthfulness-production-5af4.up.railway.app/api/reviews/tool/${encodeURIComponent(title)}`);
                if (reviewsResponse.ok) {
                    const reviewsData = await reviewsResponse.json();
                    if (reviewsData.success && reviewsData.data && reviewsData.data.length > 0) {
                        const sum = reviewsData.data.reduce((acc, review) => acc + review.rating, 0);
                        rating = (sum / reviewsData.data.length).toFixed(1);
                        reviewCount = reviewsData.data.length;
                        console.log(`✅ ${title}: ${rating} (${reviewCount} reviews)`);
                    } else {
                        // No reviews yet - show 0
                        console.log(`⚠️ ${title}: No reviews (showing 0.0 / 0 reviews)`);
                        rating = '0.0';
                        reviewCount = 0;
                    }
                } else {
                    console.log(`⚠️ ${title}: API responded ${reviewsResponse.status}, defaulting to 0`);
                    rating = '0.0';
                    reviewCount = 0;
                }
            } catch (error) {
                // API unavailable - default to 0
                console.log(`❌ ${title}: API error (${error.message}), defaulting to 0`);
                rating = '0.0';
                reviewCount = 0;
            }

            // Store data on element to avoid re-parsing
            card.dataset.toolTitle = title;
            card.dataset.toolDescription = description;
            card.dataset.toolCategory = category;
            card.dataset.toolRating = rating;
            card.dataset.toolReviews = reviewCount;

            // Reconstruct HTML
            card.innerHTML = `
                <div class="tool-card-header">
                    <div style="width: 100%">
                        <h3 class="tool-card-title">${title}</h3>
                        <div class="tool-card-meta">
                            <span class="rating-wrapper"><i data-lucide="star"></i> ${rating}</span>
                            <span>• ${reviewCount} ${reviewCount === 1 ? 'arvustus' : 'arvustust'}</span>
                        </div>
                    </div>
                </div>
                <p class="tool-card-description">${description}</p>
                <div class="tool-card-footer">
                    <span class="category-badge tag">${category}</span>
                    <button class="explore-btn">Avasta</button>
                </div>
            `;
        }

        // Create modal if it doesn't exist
        createModal();

        // Re-init icons after all cards processed
        if (window.initLucideIcons) {
            window.initLucideIcons();
        }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
        requestIdleCallback(processCards, { timeout: 2000 });
    } else {
        setTimeout(processCards, 0);
    }

    // Set up event delegation on parent containers (do this once)
    if (!window.toolCardEventsDelegated) {
        window.toolCardEventsDelegated = true;
        document.querySelectorAll('.tools-grid').forEach(grid => {
            grid.addEventListener('click', function(e) {
                const card = e.target.closest('.tool-card:not(.placeholder):not(.request-card)');
                if (!card) return;
                if (window.getSelection().toString().length > 0) return;

                // Get data from dataset
                const title = card.dataset.toolTitle;
                const description = card.dataset.toolDescription;
                const category = card.dataset.toolCategory;
                const rating = card.dataset.toolRating;
                const users = card.dataset.toolUsers;

                if (title) {
                    openToolModal({
                        title,
                        description,
                        category,
                        rating,
                        users,
                        isFreemium: false
                    });
                }
            });
        });
    }
}

// Update page title based on selected category
function updatePageTitleForCategory(category) {
    const categoryTitles = document.querySelectorAll('.category-title');
    const lowerCategory = category.toLowerCase();

    // Hide all static category titles
    categoryTitles.forEach(title => {
        title.style.display = 'none';
    });

    // Create or update dynamic category title
    let dynamicTitle = document.querySelector('.dynamic-category-title');
    let dynamicSubtitle = document.querySelector('.dynamic-category-subtitle');

    if (!dynamicTitle) {
        dynamicTitle = document.createElement('h2');
        dynamicTitle.className = 'category-title dynamic-category-title';
        // Insert after the hero section (before tools grid)
        const toolsSection = document.querySelector('.tools-section');
        toolsSection.insertBefore(dynamicTitle, toolsSection.firstChild);
    }

    if (!dynamicSubtitle) {
        dynamicSubtitle = document.createElement('p');
        dynamicSubtitle.className = 'category-subtitle dynamic-category-subtitle';
        dynamicTitle.insertAdjacentElement('afterend', dynamicSubtitle);
    }

    // Set the appropriate title text
    const categoryTitleMap = {
        'all': 'Kõik tööriistad',
        'kõik': 'Kõik tööriistad',
        'kirjutamine': 'Kirjutamine',
        'pildiloomine': 'Pildiloome',
        'kunst': 'Kunst',
        'chatbot': 'Chatbot',
        'kõne': 'Kõne',
        'muusika': 'Muusika',
        'video': 'Video',
        'klienditeenindus': 'Klienditeenindus',
        'tutvumine': 'Tutvumine',
        'sotsiaalmeedia': 'Sotsiaalmeedia',
        'turundus': 'Turundus',
        'programmeerimine': 'Programmeerimine',
        'investeerimine': 'Investeerimine',
        'reisimine': 'Reisimine',
        'õppimine': 'Õppimine',
        'automatiseerimine': 'Automatiseerimine',
        'tervis': 'Tervis',
        'anime': 'Anime',
        'produktiivsus': 'Produktiivsus',
        'e-kaubandus': 'E-kaubandus'
    };

    dynamicTitle.textContent = categoryTitleMap[lowerCategory] || `${category} Tööriistad`;
    dynamicTitle.style.display = 'block';

    // Calculate and update tool count
    // Use setTimeout to allow grid to update first if needed, though usually filters run sync
    setTimeout(() => {
        const visibleTools = document.querySelectorAll('.tool-card:not(.placeholder):not([style*="display: none"])');
        // Filter out hidden ones just in case
        const count = Array.from(visibleTools).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0).length;

        dynamicSubtitle.textContent = `${count} tööriista leitud`;
        dynamicSubtitle.style.display = 'block';
    }, 50);
}

// Restore original section titles
function restoreOriginalTitles() {
    const categoryTitles = document.querySelectorAll('.category-title:not(.dynamic-category-title)');
    const dynamicTitle = document.querySelector('.dynamic-category-title');

    // Show original titles
    categoryTitles.forEach(title => {
        title.style.display = 'block';
    });

    // Hide dynamic title
    if (dynamicTitle) {
        dynamicTitle.style.display = 'none';
    }
}

// Add smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click effect to tool cards using event delegation
// Legacy click listener removed

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe tool cards for scroll animation
document.querySelectorAll('.tool-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Hide "Viimased AI Uuendused" section
function hideLatestUpdatesSection() {
    // Find the "Viimased AI Uuendused" title and its associated tools grid
    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
        if (title.textContent.includes('Viimased AI Uuendused')) {
            title.style.display = 'none';
            // Hide the tools grid that follows this title
            const nextGrid = title.nextElementSibling;
            if (nextGrid && nextGrid.classList.contains('tools-grid')) {
                nextGrid.style.display = 'none';
            }
        }
    });

    // Hide community sections (reviews, questions, highest rated, new AIs)
    const communitySections = document.querySelectorAll('.community-section');
    communitySections.forEach(section => {
        section.style.display = 'none';
    });
}

// Show "Viimased AI Uuendused" section
function showLatestUpdatesSection() {
    // Show the "Viimased AI Uuendused" title and its associated tools grid
    const categoryTitles = document.querySelectorAll('.category-title');
    categoryTitles.forEach(title => {
        if (title.textContent.includes('Viimased AI Uuendused')) {
            title.style.display = 'block';
            // Show the tools grid that follows this title
            const nextGrid = title.nextElementSibling;
            if (nextGrid && nextGrid.classList.contains('tools-grid')) {
                nextGrid.style.display = 'grid';
            }
        }
    });

    // Show community sections (reviews, questions, highest rated, new AIs)
    const communitySections = document.querySelectorAll('.community-section');
    communitySections.forEach(section => {
        section.style.display = 'block';
    });
}

// Clear search functionality
function clearSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = '';
    filterTools('');

    // Restore original section titles
    restoreOriginalTitles();

    // Show "Viimased AI Uuendused" section when search is cleared
    showLatestUpdatesSection();

    // Reset category highlights
    document.querySelectorAll('.category-item').forEach(item => {
        item.style.fontWeight = 'normal';
    });
}

// Add double-click on search to clear
document.querySelector('.search-input').addEventListener('dblclick', (e) => {
    clearSearch(e);
    window.location.replace(window.location.pathname); // resets URL + reloads
});

// --- GA Consent Banner (stores choice in localStorage) ---
(function initConsentBanner() {
    const KEY = "ga_consent_v1";
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    if (!banner || !acceptBtn || !declineBtn) return;

    const saved = localStorage.getItem(KEY);

    // If already chosen, apply it and hide banner
    if (saved === "granted" || saved === "denied") {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: saved,
                ad_storage: saved,
                ad_user_data: saved,
                ad_personalization: saved
            });
        }
        banner.style.display = "none";
        return;
    }

    // No choice yet -> show banner
    banner.style.display = "block";

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem(KEY, "granted");
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted"
            });
        }
        banner.style.display = "none";
    });

    declineBtn.addEventListener("click", () => {
        localStorage.setItem(KEY, "denied");
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied"
            });
        }
        banner.style.display = "none";
    });
})();

function appendRequestFormToFilteredGrid(category) {
    const grids = Array.from(document.querySelectorAll('.tools-grid'));
    if (!grids.length) return;

    const targetGrid = grids[0];

    const dynTitle = document.querySelector('.dynamic-category-title');
    const targetTitle = dynTitle ? dynTitle.textContent.trim() : (category + ' AI Tööriistad');

    const esc = (window.CSS && CSS.escape) ? CSS.escape : (s) => String(s).replace(/["\\]/g, '\\$&');

    let requestCard =
        document.querySelector('.tool-card.request-card[data-category="' + esc(targetTitle) + '"]') ||
        document.querySelector('.tool-card.request-card');

    if (!requestCard) return;

    // remove hidden placeholders so there is NO space before the form
    targetGrid.querySelectorAll('.tool-card.placeholder').forEach(e => e.remove());

    requestCard.style.display = 'block';
    targetGrid.appendChild(requestCard);

    fillToolGridRows(); // keeps it last + prevents placeholders reappearing
}

// ===== Modal Logic =====

// Create Modal Structure
function createModal() {
    if (document.getElementById('toolModal')) return;

    const modalHTML = `
        <div id="toolModal" class="modal-overlay hidden">
            <div class="modal-container">
                <div class="modal-header">
                    <button class="modal-back-btn" onclick="closeToolModal()">
                        <i data-lucide="arrow-left"></i> Tagasi
                    </button>
                    <button class="modal-close-btn" onclick="closeToolModal()">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <div id="modalContent" class="modal-content">
                    <!-- Content will be injected here -->
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close on overlay click
    document.getElementById('toolModal').addEventListener('click', function (e) {
        if (e.target === this) closeToolModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeToolModal();
    });
}

// ===== Review System =====
// Initialize review storage
if (!localStorage.getItem('toolReviews')) {
    localStorage.setItem('toolReviews', JSON.stringify({}));
}

// Get reviews for a tool
async function getToolReviews(toolName) {
    try {
        const response = await window.reviewAPI.getByTool(toolName);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}

// Get questions for a tool
async function getToolQuestions(toolName) {
    try {
        const response = await window.questionAPI.getByTool(toolName);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

// Save review for a tool
async function saveToolReview(toolName, rating, comment, username) {
    try {
        const response = await window.reviewAPI.create(toolName, {
            username,
            rating,
            text: comment
        });
        return response.data;
    } catch (error) {
        console.error('Error saving review:', error);
        throw error;
    }
}

// Calculate average rating
async function calculateAverageRating(toolName) {
    const reviews = await getToolReviews(toolName);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

// Check if user has already reviewed
async function hasUserReviewed(toolName, username) {
    const reviews = await getToolReviews(toolName);
    return reviews.some(review => review.username === username);
}

// Save question for a tool
async function saveToolQuestion(toolName, question, username) {
    try {
        const response = await window.questionAPI.create(toolName, {
            username,
            text: question
        });
        return response.data;
    } catch (error) {
        console.error('Error saving question:', error);
        throw error;
    }
}

// Save reply to a question
async function saveQuestionReply(toolName, questionId, reply, username) {
    try {
        const response = await window.questionAPI.addReply(questionId, {
            username,
            text: reply
        });
        return response.data;
    } catch (error) {
        console.error('Error saving reply:', error);
        throw error;
    }
}

// Delete question (owner or admin)
async function deleteQuestion(toolName, questionId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the question to check ownership
    const questions = await getToolQuestions(toolName);
    const question = questions.find(q => q._id === questionId);
    
    if (!question) return;
    
    // Check if user owns this question or is admin
    if (question.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust seda küsimust kustutada!');
        return;
    }

    if (!confirm('Kas oled kindel, et soovid seda küsimust kustutada?')) {
        return;
    }

    try {
        await window.questionAPI.delete(questionId);
        
        // Refresh the modal
        const questionItem = document.querySelector(`[data-question-id="${questionId}"]`);
        if (questionItem) {
            questionItem.remove();
        }
        
        alert('Küsimus edukalt kustutatud!');
    } catch (error) {
        console.error('Error deleting question:', error);
        alert('Viga küsimuse kustutamisel!');
    }
}

// Delete reply (owner or admin)
async function deleteReply(toolName, questionId, replyId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the question to check reply ownership
    const questions = await getToolQuestions(toolName);
    const question = questions.find(q => q._id === questionId);
    const reply = question?.replies.find(r => r._id === replyId);
    
    if (!reply) return;
    
    // Check if user owns this reply or is admin
    if (reply.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust vastuseid kustutada!');
        return;
    }

    if (!confirm('Kas oled kindel, et soovid seda vastust kustutada?')) {
        return;
    }

    try {
        await window.questionAPI.deleteReply(questionId, replyId);
        
        // Refresh the modal
        const replyItem = document.querySelector(`[data-reply-id="${replyId}"]`);
        if (replyItem) {
            replyItem.remove();
        }
        
        alert('Vastus edukalt kustutatud!');
    } catch (error) {
        console.error('Error deleting reply:', error);
        alert('Viga vastuse kustutamisel!');
    }
}

// Delete review (owner or admin)
async function deleteReview(toolName, reviewId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the review to check ownership
    const reviews = await getToolReviews(toolName);
    const review = reviews.find(r => r._id === reviewId);
    
    if (!review) return;
    
    // Check if user owns this review or is admin
    if (review.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust seda hinnangut kustutada!');
        return;
    }

    if (!confirm('Kas oled kindel, et soovid seda hinnangut kustutada?')) {
        return;
    }

    try {
        await window.reviewAPI.delete(reviewId);
        
        // Refresh the modal
        const reviewItem = document.querySelector(`[data-review-id="${reviewId}"]`);
        if (reviewItem) {
            reviewItem.remove();
        }
        
        // Show notification
        alert('Arvustus edukalt kustutatud!');
        
        // Reload the modal to update average rating
        const modal = document.getElementById('toolModal');
        if (modal && modal.classList.contains('show')) {
            // Find current tool and refresh
            const toolCards = document.querySelectorAll('.tool-card');
            toolCards.forEach(card => {
                if (card.querySelector('.tool-title')?.textContent.trim() === toolName) {
                    card.click();
                }
            });
        }
    } catch (error) {
        console.error('Error deleting review:', error);
        alert('Viga hinnangu kustutamisel!');
    }
}

// Edit review (owner or admin)
async function editReview(toolName, reviewId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the review to check ownership
    const reviews = await getToolReviews(toolName);
    const review = reviews.find(r => r._id === reviewId);
    
    if (!review) return;
    
    // Check if user owns this review or is admin
    if (review.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust seda hinnangut muuta!');
        return;
    }

    const newComment = prompt('Muuda kommentaari:', review.text || '');
    if (newComment === null) return; // User cancelled
    
    const newRatingStr = prompt('Muuda hinnangut (1-5):', review.rating);
    if (newRatingStr === null) return; // User cancelled
    
    const newRating = parseInt(newRatingStr);
    if (isNaN(newRating) || newRating < 1 || newRating > 5) {
        alert('Palun sisesta number 1 ja 5 vahel!');
        return;
    }

    try {
        await window.reviewAPI.update(reviewId, {
            rating: newRating,
            text: newComment.trim()
        });
        
        alert('Arvustus edukalt muudetud!');
        
        // Reload the modal
        const modal = document.getElementById('toolModal');
        if (modal && modal.classList.contains('show')) {
            const toolCards = document.querySelectorAll('.tool-card');
            toolCards.forEach(card => {
                if (card.querySelector('.tool-title')?.textContent.trim() === toolName) {
                    card.click();
                }
            });
        }
    } catch (error) {
        console.error('Error updating review:', error);
        alert('Viga hinnangu muutmisel!');
    }
}

// Edit question (owner or admin)
async function editQuestion(toolName, questionId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the question to check ownership
    const questions = await getToolQuestions(toolName);
    const question = questions.find(q => q._id === questionId);
    
    if (!question) return;
    
    // Check if user owns this question or is admin
    if (question.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust seda küsimust muuta!');
        return;
    }

    const newQuestion = prompt('Muuda küsimust:', question.text);
    if (newQuestion === null) return; // User cancelled
    
    if (!newQuestion.trim()) {
        alert('Küsimus ei saa olla tühi!');
        return;
    }

    try {
        await window.questionAPI.update(questionId, {
            text: newQuestion.trim()
        });
        
        // Refresh just the question text
        const questionItem = document.querySelector(`[data-question-id="${questionId}"]`);
        if (questionItem) {
            const questionText = questionItem.querySelector('.question-text');
            if (questionText) {
                questionText.textContent = newQuestion.trim();
                
                // Add or update edited indicator
                let editedIndicator = questionItem.querySelector('.review-edited-indicator');
                if (!editedIndicator) {
                    editedIndicator = document.createElement('p');
                    editedIndicator.className = 'review-edited-indicator';
                    questionText.after(editedIndicator);
                }
                editedIndicator.textContent = `Muudetud ${formatReviewDate(new Date().toISOString())}`;
            }
        }
        
        alert('Küsimus edukalt muudetud!');
    } catch (error) {
        console.error('Error updating question:', error);
        alert('Viga küsimuse muutmisel!');
    }
}

// Edit reply (owner or admin)
async function editReply(toolName, questionId, replyId) {
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    
    if (!currentUser) {
        alert('Pead olema sisse logitud!');
        return;
    }

    // Get the question to check reply ownership
    const questions = await getToolQuestions(toolName);
    const question = questions.find(q => q._id === questionId);
    const reply = question?.replies.find(r => r._id === replyId);
    
    if (!reply) return;
    
    // Check if user owns this reply or is admin
    if (reply.username !== currentUser.username && currentUser.role !== 'admin') {
        alert('Sul pole õigust seda vastust muuta!');
        return;
    }

    const newReply = prompt('Muuda vastust:', reply.text);
    if (newReply === null) return; // User cancelled
    
    if (!newReply.trim()) {
        alert('Vastus ei saa olla tühi!');
        return;
    }

    try {
        await window.questionAPI.updateReply(questionId, replyId, {
            text: newReply.trim()
        });
        
        // Refresh just the reply text
        const replyItem = document.querySelector(`[data-reply-id="${replyId}"]`);
        if (replyItem) {
            const replyText = replyItem.querySelector('.reply-text');
            if (replyText) {
                replyText.textContent = newReply.trim();
                
                // Add or update edited indicator
                let editedIndicator = replyItem.querySelector('.review-edited-indicator');
                if (!editedIndicator) {
                    editedIndicator = document.createElement('p');
                    editedIndicator.className = 'review-edited-indicator';
                    replyText.after(editedIndicator);
                }
                editedIndicator.textContent = `Muudetud ${formatReviewDate(new Date().toISOString())}`;
            }
        }
        
        alert('Vastus edukalt muudetud!');
    } catch (error) {
        console.error('Error updating reply:', error);
        alert('Viga vastuse muutmisel!');
    }
}

// Render star rating (interactive)
function renderStarRating(currentRating, isInteractive, onRate) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= currentRating;
        stars.push(`
            <i data-lucide="${filled ? 'star' : 'star'}" 
               class="review-star ${filled ? 'filled' : ''} ${isInteractive ? 'interactive' : ''}"
               data-rating="${i}"
               style="width: 24px; height: 24px; cursor: ${isInteractive ? 'pointer' : 'default'}; 
                      color: ${filled ? '#fbbf24' : '#d1d5db'}; fill: ${filled ? '#fbbf24' : 'none'};">
            </i>
        `);
    }
    return stars.join('');
}

// Render review section
async function renderReviewSection(toolName, defaultRating) {
    const reviews = await getToolReviews(toolName);
    const questions = await getToolQuestions(toolName);
    const averageRating = reviews.length > 0 ? await calculateAverageRating(toolName) : defaultRating || '0.0';
    
    // Check if user is logged in using global auth functions
    const currentUser = window.getAuthUser ? window.getAuthUser() : null;
    const isLoggedIn = window.isUserLoggedIn ? window.isUserLoggedIn() : false;
    const username = currentUser ? currentUser.username : null;
    const hasReviewed = isLoggedIn && username && await hasUserReviewed(toolName, username);
    const isAdmin = currentUser && currentUser.role === 'admin';

    return `
        <div class="modal-section review-section">
            <div class="review-header">
                <h3 class="modal-section-title">Hinnangud ja Küsimused</h3>
                <div class="review-summary">
                    <div class="review-average">
                        <span class="review-average-number">${averageRating}</span>
                        <div class="review-average-stars">
                            ${renderStarRating(Math.round(averageRating), false)}
                        </div>
                        <span class="review-count">${reviews.length} hinnangut</span>
                    </div>
                </div>
            </div>

            <!-- Tab Navigation -->
            <div class="review-tabs">
                <button class="review-tab active" data-tab="reviews">
                    <i data-lucide="star" style="width: 16px; height: 16px;"></i>
                    Hinnangud (${reviews.length})
                </button>
                <button class="review-tab" data-tab="questions">
                    <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
                    Küsimused (${questions.length})
                </button>
            </div>

            <!-- Reviews Tab Content -->
            <div class="review-tab-content active" id="reviews-content">
                ${isLoggedIn && !hasReviewed ? `
                <div class="review-form-container">
                    <h4 class="review-form-title">Jäta oma hinnang</h4>
                    <form class="review-form" id="reviewForm-${toolName.replace(/\s+/g, '-')}">
                        <div class="review-rating-input">
                            <label>Sinu hinnang:</label>
                            <div class="star-rating-input" id="starRating-${toolName.replace(/\s+/g, '-')}">
                                ${renderStarRating(0, true)}
                            </div>
                            <input type="hidden" name="rating" id="ratingValue-${toolName.replace(/\s+/g, '-')}" value="0" required>
                        </div>
                        <div class="review-comment-input">
                            <label for="reviewComment-${toolName.replace(/\s+/g, '-')}">Kommentaar (valikuline):</label>
                            <textarea 
                                id="reviewComment-${toolName.replace(/\s+/g, '-')}" 
                                name="comment" 
                                rows="4" 
                                placeholder="Jaga oma kogemust selle tööriistaga..."
                                maxlength="500"
                            ></textarea>
                            <span class="char-count">0/500</span>
                        </div>
                        <button type="submit" class="review-submit-btn">Avalda hinnang</button>
                    </form>
                </div>
                ` : !isLoggedIn ? `
                <div class="review-login-prompt">
                    <p>Palun logi sisse, et jätta hinnang</p>
                    <button class="review-login-btn" onclick="document.getElementById('dropdown-login-btn').click()">Logi sisse</button>
                </div>
                ` : `
                <div class="review-already-reviewed">
                    <p>Oled juba selle tööriista hinnanud. Aitäh!</p>
                </div>
                `}

                <div class="reviews-list">
                    ${reviews.length > 0 ? reviews.map(review => `
                        <div class="review-item" data-review-id="${review._id}">
                            <div class="review-item-header">
                                <div class="review-item-user">
                                    <div class="review-avatar">${review.username.charAt(0).toUpperCase()}</div>
                                    <div class="review-user-info">
                                        <span class="review-username">${review.username}</span>
                                        <span class="review-date">${formatReviewDate(review.createdAt)}</span>
                                    </div>
                                </div>
                                <div class="review-item-actions">
                                    <div class="review-item-stars">
                                        ${renderStarRating(review.rating, false)}
                                    </div>
                                    ${isAdmin || (username && review.username === username) ? `
                                    <div class="review-action-buttons">
                                        ${username && review.username === username ? `
                                        <button class="review-edit-btn" onclick="editReview('${toolName}', '${review._id}')" title="Muuda hinnangut">
                                            <i data-lucide="edit-2" style="width: 16px; height: 16px;"></i>
                                        </button>
                                        ` : ''}
                                        <button class="review-delete-btn" onclick="deleteReview('${toolName}', '${review._id}')" title="Kustuta hinnang">
                                            <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                                        </button>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                            ${review.text ? `
                            <p class="review-comment">${review.text}</p>
                            ` : ''}
                            ${review.editedAt ? `
                            <p class="review-edited-indicator">Muudetud ${formatReviewDate(review.editedAt)}</p>
                            ` : ''}
                        </div>
                    `).join('') : '<p class="no-reviews">Veel pole hinnanguid. Ole esimene!</p>'}
                </div>
            </div>

            <!-- Questions Tab Content -->
            <div class="review-tab-content" id="questions-content">
                ${isLoggedIn ? `
                <div class="review-form-container">
                    <h4 class="review-form-title">Esita küsimus</h4>
                    <form class="question-form" id="questionForm-${toolName.replace(/\s+/g, '-')}">
                        <div class="review-comment-input">
                            <label for="questionText-${toolName.replace(/\s+/g, '-')}">Sinu küsimus:</label>
                            <textarea 
                                id="questionText-${toolName.replace(/\s+/g, '-')}" 
                                name="question" 
                                rows="4" 
                                placeholder="Küsi selle AI tööriista kohta..."
                                maxlength="500"
                                required
                            ></textarea>
                            <span class="char-count">0/500</span>
                        </div>
                        <button type="submit" class="review-submit-btn">Avalda küsimus</button>
                    </form>
                </div>
                ` : `
                <div class="review-login-prompt">
                    <p>Palun logi sisse, et esitada küsimus</p>
                    <button class="review-login-btn" onclick="document.getElementById('dropdown-login-btn').click()">Logi sisse</button>
                </div>
                `}

                <div class="questions-list">
                    ${questions.length > 0 ? questions.map(question => `
                        <div class="question-item" data-question-id="${question._id}">
                            <div class="question-header">
                                <div class="review-item-user">
                                    <div class="review-avatar">${question.username.charAt(0).toUpperCase()}</div>
                                    <div class="review-user-info">
                                        <span class="review-username">${question.username}</span>
                                        <span class="review-date">${formatReviewDate(question.createdAt)}</span>
                                    </div>
                                </div>
                                ${isAdmin || (username && question.username === username) ? `
                                <div class="review-action-buttons">
                                    ${username && question.username === username ? `
                                    <button class="review-edit-btn" onclick="editQuestion('${toolName}', ${question.id})" title="Muuda küsimust">
                                        <i data-lucide="edit-2" style="width: 16px; height: 16px;"></i>
                                    </button>
                                    ` : ''}
                                    <button class="review-delete-btn" onclick="deleteQuestion('${toolName}', ${question.id})" title="Kustuta küsimus">
                                        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                                    </button>
                                </div>
                                ` : ''}
                            </div>
                            <p class="question-text">${question.text}</p>
                            ${question.editedAt ? `
                            <p class="review-edited-indicator">Muudetud ${formatReviewDate(question.editedAt)}</p>
                            ` : ''}
                            
                            <!-- Replies -->
                            <div class="question-replies">
                                ${question.replies.map(reply => `
                                    <div class="reply-item" data-reply-id="${reply._id}">
                                        <div class="reply-header">
                                            <div class="review-item-user">
                                                <div class="reply-avatar">${reply.username.charAt(0).toUpperCase()}</div>
                                                <div class="review-user-info">
                                                    <span class="review-username">${reply.username}</span>
                                                    <span class="review-date">${formatReviewDate(reply.createdAt)}</span>
                                                </div>
                                            </div>
                                            ${isAdmin || (username && reply.username === username) ? `
                                            <div class="review-action-buttons">
                                                ${username && reply.username === username ? `
                                                <button class="review-edit-btn" onclick="editReply('${toolName}', ${question.id}, ${reply.id})" title="Muuda vastust">
                                                    <i data-lucide="edit-2" style="width: 14px; height: 14px;"></i>
                                                </button>
                                                ` : ''}
                                                <button class="review-delete-btn" onclick="deleteReply('${toolName}', ${question.id}, ${reply.id})" title="Kustuta vastus">
                                                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                                                </button>
                                            </div>
                                            ` : ''}
                                        </div>
                                        <p class="reply-text">${reply.text}</p>
                                        ${reply.editedAt ? `
                                        <p class="review-edited-indicator">Muudetud ${formatReviewDate(reply.editedAt)}</p>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                            
                            <!-- Reply Form -->
                            ${isLoggedIn ? `
                            <div class="reply-form-container">
                                <button class="reply-toggle-btn" onclick="toggleReplyForm('${question._id}')">
                                    <i data-lucide="corner-down-right" style="width: 14px; height: 14px;"></i>
                                    Vasta
                                </button>
                                <form class="reply-form hidden" id="replyForm-${question._id}">
                                    <textarea 
                                        class="reply-input" 
                                        placeholder="Kirjuta oma vastus..."
                                        maxlength="500"
                                        required
                                    ></textarea>
                                    <div class="reply-form-actions">
                                        <span class="char-count">0/500</span>
                                        <div>
                                            <button type="button" class="reply-cancel-btn" onclick="toggleReplyForm(${question.id})">Tühista</button>
                                            <button type="submit" class="reply-submit-btn">Vasta</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            ` : ''}
                        </div>
                    `).join('') : '<p class="no-reviews">Veel pole küsimusi. Ole esimene!</p>'}
                </div>
            </div>
        </div>
    `;
}

// Format review date
function formatReviewDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Täna';
    if (diffDays === 1) return 'Eile';
    if (diffDays < 7) return `${diffDays} päeva tagasi`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} nädalat tagasi`;
    return date.toLocaleDateString('et-EE');
}

// Toggle reply form
function toggleReplyForm(questionId) {
    const form = document.getElementById(`replyForm-${questionId}`);
    if (!form) return;
    
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        form.querySelector('textarea').focus();
    }
}

// Initialize tab switching
function initializeReviewTabs() {
    const tabs = document.querySelectorAll('.review-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.review-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabName = tab.getAttribute('data-tab');
            const content = document.getElementById(`${tabName}-content`);
            if (content) {
                content.classList.add('active');
            }
            
            // Reinitialize Lucide icons
            if (window.lucide) {
                window.initLucideIcons();
            }
        });
    });
}

// Initialize question form
function initializeQuestionForm(toolName) {
    const formId = `questionForm-${toolName.replace(/\s+/g, '-')}`;
    const form = document.getElementById(formId);
    if (!form) return;

    const textarea = form.querySelector('textarea');
    const charCount = form.querySelector('.char-count');
    
    // Character counter
    textarea.addEventListener('input', () => {
        charCount.textContent = `${textarea.value.length}/500`;
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const question = textarea.value.trim();
        
        // Get username from auth system
        const currentUser = window.getAuthUser ? window.getAuthUser() : null;
        const username = currentUser ? currentUser.username : null;

        if (!username) {
            alert('Palun logi sisse, et esitada küsimus!');
            return;
        }

        if (!question) {
            alert('Palun kirjuta küsimus!');
            return;
        }

        try {
            // Save question and wait for it to complete
            await saveToolQuestion(toolName, question, username);

            // Clear form
            textarea.value = '';
            charCount.textContent = '0/500';

            // Show success message
            alert('Küsimus edukalt lisatud!');
            
            // Close and reopen modal to refresh data with Q&A tab active
            closeToolModal();
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Reopen modal with fresh data
            await openToolModal({ title: toolName });
            
            // Switch to Q&A tab after modal opens
            setTimeout(() => {
                const qaTab = document.querySelector('.review-tab[data-tab="qa"]');
                if (qaTab) qaTab.click();
            }, 150);
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Viga küsimuse esitamisel. Palun proovi uuesti!');
        }
    });
}

// Initialize reply forms
function initializeReplyForms(toolName) {
    const replyForms = document.querySelectorAll('.reply-form');
    replyForms.forEach(form => {
        const questionId = form.id.replace('replyForm-', ''); // Keep as string for MongoDB _id
        const textarea = form.querySelector('textarea');
        const charCount = form.querySelector('.char-count');
        
        // Character counter
        textarea.addEventListener('input', () => {
            charCount.textContent = `${textarea.value.length}/500`;
        });

        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const reply = textarea.value.trim();
            
            // Get username from auth system
            const currentUser = window.getAuthUser ? window.getAuthUser() : null;
            const username = currentUser ? currentUser.username : null;

            if (!username) {
                alert('Palun logi sisse, et vastata!');
                return;
            }

            if (!reply) {
                alert('Palun kirjuta vastus!');
                return;
            }

            // Save reply
            try {
                console.log('Attempting to add reply:', { toolName, questionId, reply, username });
                await saveQuestionReply(toolName, questionId, reply, username);

                // Clear form and hide it
                textarea.value = '';
                form.classList.add('hidden');

                // Show success message  
                alert('Vastus edukalt lisatud!');
                
                // Reload the modal to show new reply
                closeModal();
                setTimeout(() => {
                    openToolModal({
                        title: toolName,
                        description: document.querySelector('.modal-description')?.textContent || '',
                        category: document.querySelector('.category-badge')?.textContent || 'AI Tool'
                    });
                    // Switch to Q&A tab after reopening
                    setTimeout(() => {
                        const qaTab = document.querySelector('[data-tab="qa"]');
                        if (qaTab) qaTab.click();
                    }, 100);
                }, 300);
                
            } catch (error) {
                console.error('Error adding reply:', error);
                alert(`Viga vastuse lisamisel: ${error.message || 'Tundmatu viga'}`);
            }
        });
    });
}

// Initialize review form handlers
function initializeReviewForm(toolName) {
    const formId = `reviewForm-${toolName.replace(/\s+/g, '-')}`;
    const form = document.getElementById(formId);
    if (!form) return;

    // Star rating interaction
    const starContainer = form.querySelector('.star-rating-input');
    const ratingInput = form.querySelector('input[name="rating"]');

    let selectedRating = 0;

    // Use event delegation on the container instead of individual stars
    starContainer.addEventListener('click', (e) => {
        const star = e.target.closest('.review-star.interactive');
        if (!star) return;
        
        const stars = Array.from(starContainer.querySelectorAll('.review-star'));
        const index = stars.indexOf(star);
        if (index === -1) return;
        
        selectedRating = index + 1;
        ratingInput.value = selectedRating;
        updateStars(selectedRating);
    });

    starContainer.addEventListener('mouseenter', (e) => {
        const star = e.target.closest('.review-star.interactive');
        if (!star) return;
        
        const stars = Array.from(starContainer.querySelectorAll('.review-star'));
        const index = stars.indexOf(star);
        if (index === -1) return;
        
        updateStars(index + 1);
    }, true);

    starContainer.addEventListener('mouseleave', () => {
        updateStars(selectedRating);
    });

    function updateStars(rating) {
        const stars = starContainer.querySelectorAll('.review-star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.color = '#fbbf24';
                star.style.fill = '#fbbf24';
            } else {
                star.style.color = '#d1d5db';
                star.style.fill = 'none';
            }
        });
    }

    // Character counter
    const textarea = form.querySelector('textarea');
    const charCount = form.querySelector('.char-count');
    textarea.addEventListener('input', () => {
        charCount.textContent = `${textarea.value.length}/500`;
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const rating = parseInt(ratingInput.value);
        const comment = textarea.value.trim();
        
        // Get username from auth system
        const currentUser = window.getAuthUser ? window.getAuthUser() : null;
        const username = currentUser ? currentUser.username : null;

        if (!username) {
            alert('Palun logi sisse, et jätta arvustus!');
            return;
        }

        if (rating === 0) {
            alert('Palun vali hinnang!');
            return;
        }

        // Save review
        try {
            await saveToolReview(toolName, rating, comment, username);
            
            // Refresh the modal content
            alert('Arvustus edukalt lisatud!');
            
            // Reload latest reviews section
            if (typeof window.communitySection !== 'undefined' && window.communitySection.loadLatestReviews) {
                // Force refresh to show new review immediately
                await window.communitySection.loadLatestReviews(true);
            }
            
            // Reload the current tool modal to show new review
            const currentToolData = {
                title: toolName,
                description: document.querySelector('.modal-description')?.textContent || '',
                category: document.querySelector('.category-badge')?.textContent || 'AI Tool',
                rating: await calculateAverageRating(toolName)
            };
            
            // Close and reopen modal with fresh data
            closeModal();
            setTimeout(() => {
                openToolModal(currentToolData);
            }, 300);
        } catch (error) {
            console.error('Error saving review:', error);
            alert('Viga arvustuse salvestamisel!');
        }
    });
}

// Open Modal with Data
async function openToolModal(data) {
    const modal = document.getElementById('toolModal');
    const content = document.getElementById('modalContent');
    if (!modal || !content) return;

    // Normalize title to find key in toolsData using comprehensive mapping
    const toolName = data.title.toLowerCase().trim();

    // Convert tool name to ID (remove spaces, special characters, normalize)
    let toolId = toolName
        .replace(/\s+/g, '')  // Remove all spaces
        .replace(/[^a-z0-9]/g, '')  // Remove special characters
        .replace(/ai$/, '');  // Remove trailing 'ai'

    // Special mappings for complex names
    const nameMapping = {
        'monicai': 'monica',
        'monica': 'monica',
        'manus': 'manus',
        'dealism': 'dealism',
        'splutter': 'splutterai',
        'splutterai': 'splutterai',
        'openoperator': 'openaioperator',
        'openaioperator': 'openaioperator',
        'supawrite': 'supawrite',
        'essaypass': 'essaypass',
        'copyter': 'copyter',
        'rewritebar': 'rewritebar',
        'humanize': 'humanizeai',
        'webnovel': 'webnovelai',
        'webnovelai': 'webnovelai',
        'firstbook': 'firstbookai',
        'firstbookai': 'firstbookai',
        'ramblefix': 'ramblefix',
        'writehybrid': 'writehybrid',
        'bookscribi': 'bookscribi',
        'mystylus': 'mystylus',
        'flowgpt': 'flowgpt',
        'chatonai': 'chatonai',
        'scispace': 'scispace',
        'gptforsheets': 'gptforsheets',
        'novel': 'novelai',
        'novelai': 'novelai',
        'emailmagicai': 'emailmagicai',
        'autowriteapp': 'autowrite',
        'autowrite': 'autowrite',
        'elicit': 'elicit',
        'zerogpt': 'zerogpt',
        'paraphrasingtool': 'paraphrasingtool',
        'tome': 'tome',
        'rephrase': 'rephrase',
        'googlegemini': 'googlegemini',
        'gemini': 'googlegemini',
        'claude': 'claude35',
        'claude35': 'claude35',
        'indextts2': 'indextts2',
        'f5tts': 'f5tts',
        'rvcvoiceconversion': 'rvcvoiceconversion',
        'diabynari': 'diabynari',
        'wokadavoicechanger': 'wokadavoicechanger',
        'kitsai': 'kitsai',
        'chatterbox': 'chatterbox',
        'elevenlabs': 'elevenlabs',
        'verbatik': 'verbatik',
        'adobespeechenhancer': 'adobespeechenhancer',
        'fliki': 'fliki',
        'sora2': 'sora2',
        'huggingface': 'huggingface',
        'aihubdiscord': 'aihubdiscord',
        'gemini3': 'gemini3',
        'seedream40': 'seedream',
        'seedream': 'seedream',
        'nanobananagemini25': 'nanobananagemini25',
        'nanobananapro': 'nanobananapro',
        'flux1': 'flux',
        'flux': 'flux',
        'wananimate': 'wananimate',
        'deepseekr1': 'deepseekr1',
        'ideogram': 'ideogram',
        'googleveo3': 'googleveo3',
        'kimik2thinking': 'kimik2thinking',
        'hidreami1': 'hidreami1',
        'hailuo': 'minimaxhailuo',
        'hailuoai': 'minimaxhailuo',
        'minimaxbyhailuo': 'minimaxhailuo',
        'pika': 'pika',
        'sunoai': 'sunoai',
        'suno': 'sunoai',
        'stablediffusionxl': 'stablediffusionxl',
        'artlist': 'artlist',
        'wan22': 'wan22',
        'alibabawan22': 'wan22',
        'kling': 'klingai',
        'klingai': 'klingai',
        'alibabawan21': 'alibabawan21',
        'wan21': 'alibabawan21',
        'hunyuanvideo': 'hunyuanvideo',
        'framepack': 'framepack',
        'kling25': 'kling25',
        'wan25': 'wan25',
        'sora': 'sora2',
        'characterai': 'characterai',
        'janitorai': 'janitorai',
        'virtualgf': 'virtualgf',
        'replika': 'replika',
        'avtaarai': 'avtaarai',
        'dittinai': 'dittinai',
        'yourmove': 'yourmove',
        'craveai': 'craveai',
        'makebelieve': 'makebelieve',
        'magicvest': 'magicvest',
        'edgehound': 'edgehound',
        'stockgpt': 'stockgpt',
        'avanzai': 'avanzai',
        'inciteai': 'inciteai',
        'beebeeai': 'beebeeai',
        'projecthermes': 'projecthermes',
        'fynt': 'fynt',
        'tradt': 'tradt',
        'hoopsai': 'hoopsai',
        'goboldly': 'goboldly'
    };

    toolId = nameMapping[toolId] || toolId;

    console.log('Tool clicked:', toolName, 'ID:', toolId); // Debug

    // Try to find tool data using the mapped ID
    let toolData = window.toolsData ? window.toolsData?.[toolId] : null;
    console.log('Tool data found:', toolData);

    // Fallback: search by name matching if not found
    if (!toolData && window.toolsData) {
        toolData = Object.values(window.toolsData)?.find(t => {
            const dataToolName = t?.name?.toLowerCase();
            // Check if either contains the other, or if they share significant words
            return dataToolName?.includes(toolName) ||
                toolName?.includes(dataToolName) ||
                toolName?.split(' ')?.some(word => word?.length > 2 && dataToolName?.includes(word));
        });
    }

    if (!toolData) {
        // If no detailed data found, use basic data passed in
        // Or show a "Details not available" state using basic data
        console.warn(`Detailed data not found for ${data.title} (${toolId})`);
        toolData = {
            name: data.title,
            description: data.description,
            category: data.category,
            rating: data.rating,
            users: data.users,
            website: '#',
            features: [],
            pricing: [],
            kasutusviisid: []
        };
    }

    // Helper to render Features
    const renderFeatures = (features) => {
        if (!features || features.length === 0) return '';
        return `
            <div class="modal-section">
                <h3 class="modal-section-title">Peamised Funktsioonid</h3>
                <div class="features-grid">
                    ${features.map(f => `
                        <div class="feature-card">
                        <i data-lucide="check-circle-2"></i>
                            <div class="feature-content">
                                <h4 class="feature-title">${f.title}</h4>
                                <p class="feature-desc">${f.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    // Helper to render Pricing
    const renderPricing = (pricing) => {
        if (!pricing || pricing.length === 0) return '';
        return `
            <div class="modal-section">
                <h3 class="modal-section-title">Hinnaplaanid</h3>
                <div class="pricing-grid">
                    ${pricing.map(p => `
                        <div class="pricing-card ${p.featured ? 'featured' : ''}">
                            <h4 class="pricing-plan-name">${p.plan}</h4>
                            <div class="pricing-amount">${p.price}</div>
                            <ul class="pricing-features">
                                ${p.features.map(f => `<li><i data-lucide="check" style="width:14px;height:14px;margin-right:6px;"></i>${f}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    // Helper to render Use Cases
    const renderUseCases = (useCases) => {
        if (!useCases || useCases.length === 0) return '';
        return `
            <div class="modal-section">
                <h3 class="modal-section-title">Kasutusviisid</h3>
                <div class="usecases-list">
                    ${useCases.map(uc => `
                        <div class="usecase-item">
                            <h4 class="usecase-title">${uc.title}</h4>
                            <p class="usecase-desc">${uc.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    content.innerHTML = `
        <div class="modal-title-section">
            <div class="modal-title-header">
                <div class="modal-title-wrapper">
                    <div class="modal-title-top">
                        <h2 class="modal-title">${toolData.name}</h2>
                         ${toolData.badges && toolData.badges.includes('HOT') ? `
                        <div class="modal-featured-badge">
                            <i style="color: #fff;" data-lucide="flame"></i><span>HOT</span>
                        </div>` : ''}
                    </div>
                    <p class="modal-subtitle">AI ${toolData.category || data.category} Tööriist</p>
                </div>
            </div>
            <div class="modal-stats">
                <div class="stat-item">
                    <div class="stat-icon"><i data-lucide="star"></i></div>
                    <span class="stat-value">${data.rating || 'N/A'}</span>
                    <span class="stat-label">Hinnang</span>
                </div>
                <div class="stat-item">
                    <div class="stat-icon"><i data-lucide="users"></i></div>
                    <span class="stat-value">${data.users ? data.users + 'K+' : 'N/A'}</span>
                    <span class="stat-label">Kasutajat</span>
                </div>
                <div class="stat-item">
                    <div class="stat-icon"><i data-lucide="globe"></i></div>
                    <span class="stat-value">Veeb</span>
                    <span class="stat-label">Platvorm</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">Ülevaade</h3>
            <p class="modal-section-text">${toolData.description}</p>
        </div>

        ${renderFeatures(toolData.features)}
        ${renderPricing(toolData.pricing)}
        ${renderUseCases(toolData.kasutusviisid || toolData.useCases)}
        ${await renderReviewSection(toolData.name, data.rating)}

        <div class="modal-actions">
            <a href="${toolData.website}" target="_blank" class="modal-btn-primary" style="text-decoration:none; display:flex; justify-content:center; align-items:center;">
                Külasta veebilehte <i data-lucide="external-link" style="margin-left: 8px;"></i>
            </a>
            <button class="modal-btn-secondary" onclick="closeToolModal()">Sulge</button>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Re-init icons inside modal
    if (window.lucide) window.initLucideIcons();
    
    // Initialize review form if it exists
    initializeReviewForm(toolData.name);
    
    // Initialize tabs
    initializeReviewTabs();
    
    // Initialize question form
    initializeQuestionForm(toolData.name);
    
    // Initialize reply forms
    initializeReplyForms(toolData.name);
    
    // If a specific question ID is provided, switch to Q&A tab and scroll to it
    if (data.questionId) {
        // Wait a bit for modal content to render
        setTimeout(() => {
            // Switch to questions tab
            const questionsTab = document.querySelector('.review-tab[data-tab="questions"]');
            if (questionsTab) {
                questionsTab.click();
            }
            
            // Wait a bit more for tab content to be visible
            setTimeout(() => {
                // Scroll to the specific question
                const questionElement = document.querySelector(`.question-item[data-question-id="${data.questionId}"]`);
                if (questionElement) {
                    questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Add a highlight effect
                    questionElement.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                    setTimeout(() => {
                        questionElement.style.backgroundColor = '';
                    }, 2000);
                } else {
                    console.log(`Question with ID ${data.questionId} not found in modal`);
                }
            }, 150);
        }, 100);
    }
}

// Close Modal
function closeToolModal() {
    const modal = document.getElementById('toolModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

