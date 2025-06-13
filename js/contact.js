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

  async handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);

    try {
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.showSuccessMessage();
        this.form.reset();

        setTimeout(() => {
          this.hideSuccessMessage();
        }, 5000);
      } else {
        alert('Erro ao enviar o formulário.');
      }
    } catch (error) {
      alert('Erro de rede. Tente novamente.');
    }
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

// Inicia o formulário
new ContactForm();
