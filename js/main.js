// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MENÚ MÓVIL =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===== CERRAR MENÚ AL HACER CLIC EN UN ENLACE =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== ANIMACIÓN AL HACER SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio-card, .proyecto-card, .ci-item, .red-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
// ===== FORMULARIO → WHATSAPP =====
document.getElementById('formBtn').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const tipo = document.getElementById('tipo').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !telefono || !tipo) {
    alert('Por favor completa al menos tu nombre, teléfono y tipo de proyecto.');
    return;
  }

  const texto = `Hola, soy *${nombre}*.\n\n📋 *Tipo de proyecto:* ${tipo}\n📞 *Teléfono:* ${telefono}\n📧 *Correo:* ${correo || 'No indicado'}\n\n📝 *Descripción:*\n${mensaje || 'Sin descripción adicional'}`;
  const url = `https://wa.me/573163793069?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});