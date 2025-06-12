// Morphing Border Selector System
class MorphingSelector {
  constructor() {
    this.currentMorphing = 'none';
    this.heroImage = null;
    this.morphingContainer = null;
    
    this.init();
  }
  
  init() {
    this.setupHeroImage();
    this.createSelector();
    this.setMorphing('flames'); // Morphing de chamas como padrão
  }
  
  setupHeroImage() {
    this.heroImage = document.querySelector('.hero-image');
    if (this.heroImage) {
      // Criar container para morphing
      this.morphingContainer = document.createElement('div');
      this.morphingContainer.className = 'morphing-container';
      
      // Envolver a imagem no container
      this.heroImage.parentNode.insertBefore(this.morphingContainer, this.heroImage);
      this.morphingContainer.appendChild(this.heroImage);
    }
  }
  
  createSelector() {
    const selector = document.createElement('div');
    selector.id = 'morphingSelector';
    selector.innerHTML = `
      <div class="fixed top-20 left-4 z-50 bg-background-dark/90 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[320px]">
        <h3 class="text-white font-semibold mb-3 text-sm flex items-center">
          🔥 MORPHING DE CHAMAS
          <button id="toggleMorphingSelector" class="ml-auto text-gray-400 hover:text-white">
            <span class="text-xs">−</span>
          </button>
        </h3>
        <div id="morphingSelectorContent" class="space-y-2">
          <div class="text-xs text-gray-400 mb-2 font-medium">🔥 ROTAÇÃO COM MORPHING SIMULTÂNEO</div>
          
          <button data-morphing="flames" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors bg-primary-500 text-white">
            🔥 Metamorfose de Chamas (Atual)
          </button>
          
          <div class="mt-2 p-3 bg-red-500/10 rounded text-xs text-red-300">
            🔥 <strong>ROTAÇÃO COM MORPHING:</strong><br>
            • Formato de chama dinâmico<br>
            • 8 estágios de transformação<br>
            • Rotação completa (360°) em 8 segundos<br>
            • Morphing simultâneo com rotação<br>
            • Escala dinâmica (0.8x → 1.2x)<br>
            • Cores de fogo (laranja para amarelo)<br>
            • Efeito hipnótico e flamejante<br>
            • Glow triplo intenso
          </div>
          
          <hr class="border-gray-600 my-2">
          <div class="text-xs text-gray-400 mb-2 font-medium">✨ OUTROS MORPHINGS</div>
          
          <button data-morphing="deformation" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10">
            🌀 Deformação Extrema
          </button>
          
          <button data-morphing="outer-border" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10">
            🔮 Morphing Outer Border
          </button>
          
          <button data-morphing="liquid" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10">
            🌊 Transformação Líquida
          </button>
          
          <button data-morphing="star" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10">
            ⭐ Metamorfose Estelar
          </button>
          
          <hr class="border-gray-600 my-2">
          
          <button data-morphing="none" class="morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10">
            ❌ Remover Morphing
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(selector);
    
    // Event listeners
    const buttons = selector.querySelectorAll('.morphing-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const morphingType = btn.dataset.morphing;
        this.setMorphing(morphingType);
        this.updateActiveButton(btn);
      });
    });
    
    // Toggle selector
    const toggleBtn = selector.querySelector('#toggleMorphingSelector');
    const content = selector.querySelector('#morphingSelectorContent');
    let isCollapsed = false;
    
    toggleBtn.addEventListener('click', () => {
      if (isCollapsed) {
        content.style.display = 'block';
        toggleBtn.innerHTML = '<span class="text-xs">−</span>';
      } else {
        content.style.display = 'none';
        toggleBtn.innerHTML = '<span class="text-xs">+</span>';
      }
      isCollapsed = !isCollapsed;
    });
  }
  
  setMorphing(type) {
    if (!this.morphingContainer) return;
    
    // Remover morphing atual
    const existingMorphing = this.morphingContainer.querySelector('.morphing-border');
    if (existingMorphing) {
      existingMorphing.remove();
    }
    
    this.currentMorphing = type;
    
    if (type === 'none') return;
    
    // Criar novo elemento de morphing
    const morphingElement = document.createElement('div');
    morphingElement.className = 'morphing-border';
    
    switch (type) {
      case 'deformation':
        morphingElement.classList.add('morphing-deformation');
        break;
      case 'outer-border':
        morphingElement.classList.add('morphing-outer-border');
        break;
      case 'liquid':
        morphingElement.classList.add('morphing-liquid');
        break;
      case 'flames':
        morphingElement.classList.add('morphing-flames');
        break;
      case 'star':
        morphingElement.classList.add('morphing-star');
        break;
    }
    
    this.morphingContainer.appendChild(morphingElement);
  }
  
  updateActiveButton(activeBtn) {
    const buttons = document.querySelectorAll('.morphing-btn');
    buttons.forEach(btn => {
      if (btn === activeBtn) {
        btn.className = 'morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors bg-primary-500 text-white';
        btn.innerHTML = btn.innerHTML.replace(')', ' (Atual)');
      } else {
        btn.className = 'morphing-btn w-full text-left px-3 py-2 rounded-md text-sm transition-colors text-gray-300 hover:bg-white/10';
        btn.innerHTML = btn.innerHTML.replace(' (Atual)', '');
      }
    });
  }
}

window.MorphingSelector = MorphingSelector;