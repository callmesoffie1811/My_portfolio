/**
 * Portfolio Website - Main JavaScript
 * Handles navigation, interactions, and animations
 */

// ========================================
// NAVIGATION SYSTEM
// ========================================

/**
 * Navigate between pages
 * @param {string} page - The page to navigate to (projects, profile, cv)
 */
function navigateTo(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.getElementById(`nav-${page}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL hash (optional - for bookmarking)
    history.pushState(null, '', `#${page}`);
    
    // Close mobile menu if open
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Check URL hash on load
    const hash = window.location.hash.substring(1);
    const validPages = ['projects', 'profile', 'cv'];
    
    if (hash && validPages.includes(hash)) {
        navigateTo(hash);
    } else {
        navigateTo('projects'); // Default page
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash && validPages.includes(hash)) {
            navigateTo(hash);
        } else {
            navigateTo('projects');
        }
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// CARD HOVER EFFECTS
// ========================================

// Add subtle hover animations to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// SCROLL TO TOP BUTTON (Optional)
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
scrollTopBtn.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle';
scrollTopBtn.style.cssText = 'width: 50px; height: 50px; display: none; z-index: 1000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// FORM VALIDATION (if you add contact form)
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// ========================================
// ANIMATION ON SCROLL (Optional Enhancement)
// ========================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

// Initialize animations if elements exist
if (document.querySelectorAll('.animate-on-scroll').length > 0) {
    animateOnScroll();
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener('keydown', function(e) {
    // Press 1, 2, 3 to navigate between pages
    if (e.key === '1') {
        navigateTo('projects');
    } else if (e.key === '2') {
        navigateTo('profile');
    } else if (e.key === '3') {
        navigateTo('cv');
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

/**
 * Format date
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c👋 Welcome to Sophie Ngo\'s Portfolio!', 'color: #004A9F; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #6c757d; font-size: 14px;');

// ========================================
// PERFORMANCE MONITORING (Optional)
// ========================================

window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.message);
    // You can send errors to analytics here
});

// ========================================
// EXPORT FUNCTIONS (if using modules)
// ========================================

// If you want to use this as a module:
// export { navigateTo, validateEmail, copyToClipboard, formatDate };

