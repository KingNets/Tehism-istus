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
const categories = [
    'Kirjutamine', 'Pildiloomine', 'Kunst', 'Chatbot',
    'Kõne', 'Muusika', 'Video', 'Klienditeenindus',
    'Tutvumine', 'Sotsiaalmeedia', 'Turundus', 'Programmeerimine',
    'Investeerimine', 'Reisimine', 'Õppimine', 'Automatiseerimine',
    'Tervis', 'Anime', 'Produktiivsus', 'E-kaubandus'
];

// Populate categories on page load
document.addEventListener('DOMContentLoaded', function() {
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
    fillToolGridRows();
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
// Refill grid after filtering tools
const originalFilterTools = filterTools;
filterTools = function(query) {
    originalFilterTools(query);
    fillToolGridRows();
}
});

// Populate category items
function populateCategories() {
    const categoryGrids = document.querySelectorAll('.category-grid');
    const itemsPerGrid = 4;
    
    categoryGrids.forEach((grid, gridIndex) => {
        grid.innerHTML = '';
        const startIndex = gridIndex * itemsPerGrid;
        const endIndex = Math.min(startIndex + itemsPerGrid, categories.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            if (categories[i]) {
                const item = document.createElement('div');
                item.className = 'category-item';
                item.textContent = `• ${categories[i]}`;
                item.dataset.category = categories[i];
                grid.appendChild(item);
            }
        }
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    // Search on button click
    searchButton.addEventListener('click', performSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Handle manual text deletion/clearing
    searchInput.addEventListener('input', function(e) {
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

    if (!query.trim()) {
        // Do nothing if search bar is empty
        return;
    }

    // Update title if it's a category search
    if (categories.map(c => c.toLowerCase()).includes(query)) {
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
            visibleGrid.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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
        grids.forEach(grid => grid.style.display = 'flex');
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
            grid.style.display = i === 0 ? 'flex' : 'none';
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
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update search input
            const searchInput = document.querySelector('.search-input');
            searchInput.value = category;
            
            // Update page title based on category
            updatePageTitleForCategory(category);
            
            // Perform search
            filterTools(category.toLowerCase());

            appendRequestFormToFilteredGrid(category);
            
            // Hide "Viimased AI Uuendused" section when category is clicked
            hideLatestUpdatesSection();
            
            // Visual feedback
            categoryItems.forEach(ci => ci.style.fontWeight = 'normal');
            this.style.fontWeight = 'bold';
            
            // Smooth scroll to first visible tool grid
            const visibleGrid = Array.from(document.querySelectorAll('.tools-grid')).find(grid => grid.offsetParent !== null);
            if (visibleGrid) {
                visibleGrid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// Update page title based on selected category
function updatePageTitleForCategory(category) {
    const categoryTitles = document.querySelectorAll('.category-title');
    const lowerCategory = category.toLowerCase();
    
    // Hide all category titles first
    categoryTitles.forEach(title => {
        title.style.display = 'none';
    });
    
    // Create or update dynamic category title
    let dynamicTitle = document.querySelector('.dynamic-category-title');
    if (!dynamicTitle) {
        dynamicTitle = document.createElement('h2');
        dynamicTitle.className = 'category-title dynamic-category-title';
        dynamicTitle.style.marginTop = '4rem';
        
        // Insert after the hero section
        const toolsSection = document.querySelector('.tools-section');
        toolsSection.insertBefore(dynamicTitle, toolsSection.firstChild);
    }
    
    // Set the appropriate title
    const categoryTitleMap = {
        'kirjutamine': 'Kirjutamise AI Tööriistad',
        'pildiloomine': 'Pildiloome AI Tööriistad', 
        'kunst': 'Kunsti AI Tööriistad',
        'chatbot': 'Chatbot AI Tööriistad',
        'kõne': 'Kõne AI Tööriistad',
        'muusika': 'Muusika AI Tööriistad',
        'video': 'Video AI Tööriistad',
        'klienditeenindus': 'Klienditeeinduse AI Tööriistad',
        'tutvumine': 'Tutvumise AI Tööriistad',
        'sotsiaalmeedia': 'Sotsiaalmeedia AI Tööriistad',
        'turundus': 'Turunduse AI Tööriistad',
        'programmeerimine': 'Programmeerimise AI Tööriistad',
        'investeerimine': 'Investeerimise AI Tööriistad',
        'reisimine': 'Reisimise AI Tööriistad',
        'õppimine': 'Õppimise AI Tööriistad',
        'automatiseerimine': 'Automatiseerimise AI Tööriistad',
        'tervis': 'Tervise AI Tööriistad',
        'anime': 'Anime AI Tööriistad',
        'produktiivsus': 'Produktiivsuse AI Tööriistad',
        'e-kaubandus': 'E-kaubanduse AI Tööriistad'
    };
    
    dynamicTitle.textContent = categoryTitleMap[lowerCategory] || `${category} AI Tööriistad`;
    dynamicTitle.style.display = 'block';
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
document.addEventListener('click', function(event) {
    // Check if clicked element is a tool card or inside one
    const toolCard = event.target.closest('.tool-card');
    if (toolCard) {
        const toolNameEl = toolCard.querySelector('h3');
        if (toolNameEl) {
            const toolName = toolNameEl.textContent.toLowerCase().trim();
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
                'monica': 'monica',
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
                'sora2': 'sora2',
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
            
            console.log('Tool clicked: - script.js:661', toolName, 'ID:', toolId); // Debug
            
            // Navigate to tool detail page
            window.location.href = `tool-detail.html?tool=${toolId}`;
        }
    }
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
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
                nextGrid.style.display = 'flex';
            }
        }
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
