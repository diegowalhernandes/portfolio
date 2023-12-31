var tipe = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
let typed = new Typed('.animate', {
    strings: [
        "SOFTWARE ENGINEER, FRONT END.",
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});

// Efeito mouse 
const numTrails = 20; // Número de elementos de rastro
  const trails = [];

  for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    trails.push(trail);
  }

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    trails.forEach((trail, index) => {
      const delay = index * 10; // Atraso progressivo para criar efeito de rastro
      setTimeout(() => {
        trail.style.left = `${mouseX}px`;
        trail.style.top = `${mouseY}px`;
        trail.style.transition = 'transform 0.3s, opacity 0.3s';
        trail.style.transform = `scale(${1 - (index / numTrails)})`;
        trail.style.opacity = `${1 - (index / numTrails)}`;
      }, delay);
    });
  });