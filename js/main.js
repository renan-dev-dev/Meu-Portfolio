// Main Application Controller
document.addEventListener('DOMContentLoaded', () => {
  // Initialize utility functions
  Utils.setCurrentYear();
  Utils.initScrollToTop();
  
  // Initialize all components
  new ParticleBackground();
  new Navbar();
  new ScrollAnimations();
  new ContactForm();
  
  // Initialize hero animations after a short delay
  Utils.initHeroAnimations();
});

// Initialize Lucide icons and remove loading state when page loads
window.addEventListener('load', function() {
  lucide.createIcons();
  document.body.classList.add('loaded');
});