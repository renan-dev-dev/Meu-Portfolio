// Contact Form System
class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.successMessage = document.getElementById('successMessage');
    
    this.init();
  }
  
  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      this.showSuccessMessage();
      this.form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.hideSuccessMessage();
      }, 5000);
    }, 1000);
  }
  
  showSuccessMessage() {
    if (this.successMessage) {
      this.successMessage.classList.remove('hidden');
    }
  }
  
  hideSuccessMessage() {
    if (this.successMessage) {
      this.successMessage.classList.add('hidden');
    }
  }
}

// Export for use in main.js
window.ContactForm = ContactForm;