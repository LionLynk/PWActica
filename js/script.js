// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botón de contacto que desplaza al formulario
document.getElementById('contactBtn').addEventListener('click', () => {
  document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});

