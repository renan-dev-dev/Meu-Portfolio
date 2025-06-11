// Navigation System
class Navbar {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    this.activeSection = 'home';
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.handleScroll();
  }
  
  setupEventListeners() {
    // Mobile menu toggle
    this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    
    // Close mobile menu when clicking on links
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
    
    // Scroll event
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Smooth scroll for navigation links
    [...this.navLinks, ...this.mobileNavLinks].forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });
  }
  
  toggleMobileMenu() {
    const isHidden = this.mobileMenu.classList.contains('hidden');
    if (isHidden) {
      this.mobileMenu.classList.remove('hidden');
      this.mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      this.mobileMenu.classList.add('hidden');
      this.mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    lucide.createIcons();
  }
  
  closeMobileMenu() {
    this.mobileMenu.classList.add('hidden');
    this.mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
  }
  
  handleScroll() {
    // A borda do navbar sempre permanece branca - removemos a lógica de mudança de borda
    
    // Update active section
    const scrollPosition = window.scrollY + 100;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.updateActiveNavLink(sectionId);
      }
    });
  }
  
  updateActiveNavLink(sectionId) {
    if (this.activeSection === sectionId) return;
    
    this.activeSection = sectionId;
    
    // Update desktop nav links
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.remove('text-white', 'hover:text-primary-500');
        link.classList.add('text-primary-500');
      } else {
        link.classList.remove('text-primary-500');
        link.classList.add('text-white', 'hover:text-primary-500');
      }
    });
    
    // Update mobile nav links
    this.mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        link.classList.remove('text-white', 'hover:text-primary-500');
        link.classList.add('text-primary-500');
      } else {
        link.classList.remove('text-primary-500');
        link.classList.add('text-white', 'hover:text-primary-500');
      }
    });
  }
  
  handleNavClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const targetSection = document.querySelector(href);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}

// Export for use in main.js
window.Navbar = Navbar;