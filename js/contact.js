function showMessage() {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('successMessage');

    // Mostrar a mensagem
    msg.style.display = 'block';

    // Limpar formulário depois de 3 segundos
    setTimeout(() => {
      msg.style.display = 'none';
      form.reset();
    }, 3000);
  }