// Utility Functions
class Utils {
  // Scroll to top functionality
  static initScrollToTop() {
    const button = document.getElementById('scrollToTop');
    if (button) {
      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
  
  // Set current year in footer
  static setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Initialize hero animations with delay
  static initHeroAnimations() {
    setTimeout(() => {
      const fadeInLeft = document.querySelector('.fade-in-left');
      const fadeInScale = document.querySelector('.fade-in-scale');
      
      if (fadeInLeft) fadeInLeft.classList.add('animate');
      if (fadeInScale) fadeInScale.classList.add('animate');
    }, 300);
  }
}

// Export for use in main.js
window.Utils = Utils;