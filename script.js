// Business Identity Page - Interactive JavaScript
// This file handles all interactive animations and effects

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initParallaxEffect();
    initSmoothAnimations();
    initClickEffects();
    initAccessibility();
});

/**
 * Parallax Effect for Background Orbs
 * Makes the background orbs move based on mouse position
 */
function initParallaxEffect() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.02;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

/**
 * Smooth Scroll-based Animations
 * Adds intersection observer for scroll animations
 */
function initSmoothAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all major sections
    const sections = document.querySelectorAll('.profile-section, .social-section');
    sections.forEach(section => observer.observe(section));
}

/**
 * Click Effects and Ripple Animation
 * Adds ripple effect on button clicks
 */
function initClickEffects() {
    // Add ripple effect to all clickable elements
    const clickableElements = document.querySelectorAll('.icon-btn, .social-link');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', createRipple);
    });
    
    function createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles dynamically
        if (!document.getElementById('ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

/**
 * Enhanced Hover Effects
 * Adds magnetic effect to buttons on hover
 */
function initMagneticEffect() {
    const buttons = document.querySelectorAll('.icon-btn, .social-link');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

/**
 * Accessibility Enhancements
 * Improves keyboard navigation and screen reader support
 */
function initAccessibility() {
    // Add keyboard navigation
    const focusableElements = document.querySelectorAll('.icon-btn, .social-link');
    
    focusableElements.forEach((element, index) => {
        element.setAttribute('tabindex', index + 1);
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Announce page load to screen readers
    announceToScreenReader('Business identity page loaded');
}

/**
 * Screen Reader Announcement
 * Creates a live region for screen reader announcements
 */
function announceToScreenReader(message) {
    let liveRegion = document.getElementById('sr-live-region');
    
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'sr-live-region';
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
}

/**
 * Social Link Analytics (Optional)
 * Tracks clicks on social links
 */
function initAnalytics() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = link.className.split(' ').find(c => c !== 'social-link');
            console.log(`Clicked on ${platform} link`);
            
            // You can add analytics tracking here
            // Example: gtag('event', 'social_click', { platform: platform });
        });
    });
}

/**
 * Dynamic Background Color Change
 * Changes background gradient based on time of day
 */
function updateBackgroundByTime() {
    const hour = new Date().getHours();
    const background = document.querySelector('.background');
    
    if (hour >= 6 && hour < 12) {
        // Morning
        background.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    } else if (hour >= 12 && hour < 18) {
        // Afternoon
        background.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else if (hour >= 18 && hour < 22) {
        // Evening
        background.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    } else {
        // Night
        background.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)';
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
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

/**
 * Loading State Management
 * Shows loading animation while page resources load
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loaded class for CSS animations
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) * {
            animation-play-state: paused !important;
        }
    `;
    document.head.appendChild(style);
});

/**
 * Performance Optimization
 * Debounce function for performance-heavy operations
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optional: Initialize analytics if needed
// initAnalytics();

// Optional: Update background based on time
// updateBackgroundByTime();

console.log('🎨 Business Identity Page Initialized!');
console.log('✨ All animations and effects are active');
