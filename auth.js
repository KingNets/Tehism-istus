// Authentication Manager
const API_URL = 'https://peaceful-youthfulness-production-5af4.up.railway.app/api';
const USE_LOCAL_AUTH = false; // Set to false when backend is ready

// Auth State
let currentUser = null;
let authToken = localStorage.getItem('authToken');

// Expose auth functions globally for other scripts
window.getAuthUser = function() {
    return currentUser;
};

window.isUserLoggedIn = function() {
    return !!(authToken && currentUser);
};

// DOM Elements
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const profileModal = document.getElementById('profile-modal');

const authMenuBtn = document.getElementById('auth-menu-btn');
const authDropdown = document.getElementById('auth-dropdown');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginClose = document.getElementById('login-close');
const registerClose = document.getElementById('register-close');
const profileClose = document.getElementById('profile-close');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const passwordChangeForm = document.getElementById('password-change-form');

const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');
const logoutBtn = document.getElementById('logout-btn');
const profileLink = document.getElementById('profile-link');

const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Initialize authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    setupEventListeners();
});

// Initialize authentication state
async function initAuth() {
    if (authToken) {
        try {
            if (USE_LOCAL_AUTH) {
                // Local auth - get user from localStorage
                const email = localStorage.getItem('currentUserEmail');
                if (email) {
                    const users = JSON.parse(localStorage.getItem('users') || '{}');
                    const user = users[email];
                    if (user) {
                        currentUser = {
                            username: user.username,
                            email: user.email
                        };
                        updateUIForLoggedInUser();
                        return;
                    }
                }
                // If no valid user found, logout
                logout();
            } else {
                // Backend auth
                await getCurrentUser();
                updateUIForLoggedInUser();
            }
        } catch (error) {
            console.error('Auth initialization failed:', error);
            logout();
        }
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Auth dropdown toggle
    authMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleAuthDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!authDropdown?.contains(e.target) && !authMenuBtn?.contains(e.target)) {
            closeAuthDropdown();
        }
    });

    // Modal open/close
    loginBtn?.addEventListener('click', () => {
        closeAuthDropdown();
        openModal(loginModal);
    });
    registerBtn?.addEventListener('click', () => {
        closeAuthDropdown();
        openModal(registerModal);
    });
    loginClose?.addEventListener('click', () => closeModal(loginModal));
    registerClose?.addEventListener('click', () => closeModal(registerModal));
    profileClose?.addEventListener('click', () => closeModal(profileModal));

    // Close modals on outside click
    [loginModal, registerModal, profileModal].forEach(modal => {
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Switch between login and register
    showRegisterLink?.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });

    showLoginLink?.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });

    // Dropdown Auth Buttons
    const dropdownLoginBtn = document.getElementById('dropdown-login-btn');
    const dropdownRegisterBtn = document.getElementById('dropdown-register-btn');

    dropdownLoginBtn?.addEventListener('click', () => {
        closeUserDropdown(); // Close the dropdown itself
        openModal(loginModal);
    });

    dropdownRegisterBtn?.addEventListener('click', () => {
        closeUserDropdown();
        openModal(registerModal);
    });

    // Form submissions
    loginForm?.addEventListener('submit', handleLogin);
    registerForm?.addEventListener('submit', handleRegister);
    passwordChangeForm?.addEventListener('submit', handlePasswordChange);

    // User menu
    userMenuBtn?.addEventListener('click', toggleUserDropdown);

    // Explicitly re-select logout button to ensure we have the correct element
    const actualLogoutBtn = document.getElementById('logout-btn');
    actualLogoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    // Profile link
    const profileLinkBtn = document.getElementById('profile-link-btn');
    profileLinkBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        closeUserDropdown();
        openProfileModal();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userMenu?.contains(e.target)) {
            closeUserDropdown();
        }
    });
}

// Modal functions
function openModal(modal) {
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        clearFormErrors(modal);
    }
}

function clearFormErrors(modal) {
    modal.querySelectorAll('.auth-error, .auth-success').forEach(el => {
        el.style.display = 'none';
        el.textContent = '';
    });
    modal.querySelectorAll('form').forEach(form => form.reset());
}

// Auth dropdown functions (Legacy/Unused but kept for safety)
function toggleAuthDropdown() {
    if (authDropdown && (authDropdown.style.display === 'none' || !authDropdown.style.display)) {
        authDropdown.style.display = 'block';
    } else if (authDropdown) {
        authDropdown.style.display = 'none';
    }
}

function closeAuthDropdown() {
    if (authDropdown) {
        authDropdown.style.display = 'none';
    }
}

// User dropdown
function toggleUserDropdown() {
    userDropdown?.classList.toggle('show');
}

function closeUserDropdown() {
    userDropdown?.classList.remove('show');
}

// API Functions
async function getCurrentUser() {
    if (USE_LOCAL_AUTH) {
        const email = localStorage.getItem('currentUserEmail');
        if (email) {
            const users = JSON.parse(localStorage.getItem('users') || '{}');
            const user = users[email];
            if (user) {
                currentUser = {
                    username: user.username,
                    email: user.email,
                    role: user.role || 'user'
                };
                return currentUser;
            }
        }
        throw new Error('User not found');
    }

    const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to get user');
    }

    const data = await response.json();
    currentUser = data.user || data.data;
    return currentUser;
}

// Handle Login
async function handleLogin(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('login-submit');
    const errorDiv = document.getElementById('login-error');

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sisselogimine...';
    errorDiv.style.display = 'none';

    try {
        if (USE_LOCAL_AUTH) {
            // Local authentication using localStorage
            const users = JSON.parse(localStorage.getItem('users') || '{}');
            const user = users[email];

            if (!user) {
                throw new Error('Kasutajat ei leitud');
            }

            if (user.password !== password) {
                throw new Error('Vale parool');
            }

            // Set current user
            authToken = 'local-token-' + Date.now();
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('currentUserEmail', email);
            currentUser = {
                username: user.username,
                email: user.email,
                role: user.role || 'user' // Include role
            };

            console.log('Login successful (local), currentUser:', currentUser);
        } else {
            // Backend authentication
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Sisselogimine ebaõnnestus');
            }

            // Save token and user
            authToken = data.token;
            localStorage.setItem('authToken', authToken);
            currentUser = data.user || data.data;

            console.log('Login successful, currentUser:', currentUser); // Debug
        }

        // Update UI
        updateUIForLoggedInUser();
        closeModal(loginModal);

        // Show success message
        showNotification('Edukalt sisse logitud!', 'success');

    } catch (error) {
        errorDiv.textContent = error.message || 'Viga sisselogimisel. Palun proovi uuesti.';
        errorDiv.style.display = 'block';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Logi sisse';
    }
}

// Handle Register
async function handleRegister(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('register-submit');
    const errorDiv = document.getElementById('register-error');
    const successDiv = document.getElementById('register-success');

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;

    // Clear previous messages
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';

    // Validate passwords match
    if (password !== passwordConfirm) {
        errorDiv.textContent = 'Paroolid ei kattu!';
        errorDiv.style.display = 'block';
        return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Registreerimine...';

    try {
        if (USE_LOCAL_AUTH) {
            // Local registration using localStorage
            const users = JSON.parse(localStorage.getItem('users') || '{}');

            // Check if email already exists
            if (users[email]) {
                throw new Error('See e-posti aadress on juba kasutusel');
            }

            // Check if username already exists
            const existingUser = Object.values(users).find(u => u.username === username);
            if (existingUser) {
                throw new Error('See kasutajanimi on juba kasutusel');
            }

            // Create new user
            users[email] = {
                username: username,
                email: email,
                password: password, // In production, this should be hashed!
                role: 'user', // Default role
                createdAt: new Date().toISOString()
            };

            // Save users
            localStorage.setItem('users', JSON.stringify(users));

            // Set current user
            authToken = 'local-token-' + Date.now();
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('currentUserEmail', email);
            currentUser = {
                username: username,
                email: email,
                role: 'user'
            };

            console.log('Registration successful (local), currentUser:', currentUser);
        } else {
            // Backend registration
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registreerimine ebaõnnestus');
            }

            // Save token and user
            authToken = data.token;
            localStorage.setItem('authToken', authToken);
            currentUser = data.user || data.data;
        }

        // Show success
        successDiv.textContent = 'Konto edukalt loodud! Suuname sind sisse...';
        successDiv.style.display = 'block';

        // Wait a moment then close modal and update UI
        setTimeout(() => {
            updateUIForLoggedInUser();
            closeModal(registerModal);
            showNotification('Tere tulemast, ' + username + '!', 'success');
        }, 1500);

    } catch (error) {
        errorDiv.textContent = error.message || 'Viga registreerimisel. Palun proovi uuesti.';
        errorDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Registreeru';
    }
}

// Handle Password Change
async function handlePasswordChange(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const errorDiv = document.getElementById('password-error');
    const successDiv = document.getElementById('password-success');

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;

    // Clear previous messages
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Muutmine...';

    try {
        const response = await fetch(`${API_URL}/users/${currentUser._id}/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ currentPassword, newPassword })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Parooli muutmine ebaõnnestus');
        }

        // Show success
        successDiv.textContent = 'Parool edukalt muudetud!';
        successDiv.style.display = 'block';

        // Reset form
        passwordChangeForm.reset();

    } catch (error) {
        errorDiv.textContent = error.message || 'Viga parooli muutmisel.';
        errorDiv.style.display = 'block';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Muuda parooli';
    }
}

// Logout
function logout() {
    authToken = null;
    currentUser = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUserEmail');
    updateUIForLoggedOutUser();
    closeUserDropdown();
    showNotification('Oled välja logitud', 'info');
}

// Update UI for logged in user
function updateUIForLoggedInUser() {
    console.log('updateUIForLoggedInUser called, currentUser:', currentUser); // Debug

    if (!currentUser) {
        console.error('No currentUser found!');
        return;
    }

    // Toggle Dropdown Items
    const guestItems = document.getElementById('guest-menu-items');
    const userItems = document.getElementById('user-menu-items');

    if (guestItems) guestItems.style.display = 'none';
    if (userItems) userItems.style.display = 'block';

    // Update user info in menu
    const userName = document.querySelector('.user-name');
    const dropdownUsername = document.querySelector('.dropdown-name');
    const dropdownEmail = document.querySelector('.dropdown-email');

    if (userName) {
        userName.textContent = currentUser.username;
        console.log('Username set to:', currentUser.username);
    }
    if (dropdownUsername) dropdownUsername.textContent = currentUser.username;
    if (dropdownEmail) dropdownEmail.textContent = currentUser.email;
    
    // Initialize notifications
    if (window.initNotifications) {
        window.initNotifications();
    }
}

// Update UI for logged out user
function updateUIForLoggedOutUser() {
    // Toggle Dropdown Items
    const guestItems = document.getElementById('guest-menu-items');
    const userItems = document.getElementById('user-menu-items');

    if (guestItems) guestItems.style.display = 'block';
    if (userItems) userItems.style.display = 'none';

    // Update user info to Guest defaults
    const userName = document.querySelector('.user-name');
    const dropdownUsername = document.querySelector('.dropdown-name');
    const dropdownEmail = document.querySelector('.dropdown-email');

    if (userName) userName.textContent = 'Külaline';
    if (dropdownUsername) dropdownUsername.textContent = 'Külaline';
    if (dropdownEmail) dropdownEmail.textContent = 'Logi sisse, et näha rohkem';
    
    // Cleanup notifications
    if (window.cleanupNotifications) {
        window.cleanupNotifications();
    }
}

// Open profile modal
function openProfileModal() {
    if (!currentUser) return;

    // Update profile info
    document.getElementById('profile-username').textContent = currentUser.username;
    document.getElementById('profile-email').textContent = currentUser.email;

    const createdDate = new Date(currentUser.createdAt).toLocaleDateString('et-EE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('profile-date').textContent = createdDate;

    openModal(profileModal);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#51cf66' : type === 'error' ? '#ff6b6b' : '#ffd700'};
        color: ${type === 'info' ? '#0a0a0a' : '#fff'};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
