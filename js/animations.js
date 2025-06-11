// Scroll Animations System
class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-scale, .stagger-children');
    this.init();
  }
  
  init() {
    this.setupIntersectionObserver();
  }
  
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);
    
    this.elements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Export for use in main.js
window.ScrollAnimations = ScrollAnimations;