// Stardust Particles - Partículas de Poeira Estelar
class ParticleBackground {
  constructor() {
    this.canvas = document.getElementById('particleCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 150;
    this.animationId = null;
    this.time = 0;
    
    this.init();
  }
  
  init() {
    this.updateCanvasSize();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.updateCanvasSize());
  }
  
  updateCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        trail: [],
        maxTrailLength: 8,
      });
    }
  }
  
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    try {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.time += 0.016;
      
      this.particles.forEach((particle) => {
        // Movimento
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        if (particle.y > this.canvas.height) particle.y = 0;
        
        // Adicionar à trilha
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > particle.maxTrailLength) {
          particle.trail.shift();
        }
        
        // Efeito twinkle
        particle.twinkle += particle.twinkleSpeed;
        const twinkleIntensity = Math.sin(particle.twinkle) * 0.5 + 0.5;
        
        // Desenhar trilha
        particle.trail.forEach((point, index) => {
          const trailOpacity = (index / particle.trail.length) * particle.opacity * 0.3;
          const trailSize = particle.size * (index / particle.trail.length);
          
          this.ctx.beginPath();
          this.ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(249, 115, 22, ${trailOpacity})`;
          this.ctx.fill();
        });
        
        // Desenhar partícula principal
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size * twinkleIntensity, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity * twinkleIntensity})`;
        this.ctx.shadowColor = '#ff4500';
        this.ctx.shadowBlur = particle.size * 3;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      });
    } catch (error) {
      console.warn('Canvas rendering error:', error);
    }
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Export for use in main.js
window.ParticleBackground = ParticleBackground;