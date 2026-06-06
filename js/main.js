// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MENÚ MÓVIL =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ANIMACIONES SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.servicio-card, .proyecto-detalle, .ci-item, .red-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== FORMULARIO WHATSAPP =====
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
  window.open(`https://wa.me/573163793069?text=${encodeURIComponent(texto)}`, '_blank');
});

// ===== VISOR DE PROYECTOS =====
const proyectos = {
  p1: {
    medios: [
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto1.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto2.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video1.mp4', thumb: 'img/proyecto-bodega-palmira/foto1.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto3.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto4.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto5.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto6.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto8.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto9.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto10.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video2.mp4', thumb: 'img/proyecto-bodega-palmira/foto10.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto11.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video3.mp4', thumb: 'img/proyecto-bodega-palmira/foto11.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto12.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video4.mp4', thumb: 'img/proyecto-bodega-palmira/foto12.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto13.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video5.mp4', thumb: 'img/proyecto-bodega-palmira/foto13.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto14.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto15.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video6.mp4', thumb: 'img/proyecto-bodega-palmira/foto15.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto16.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto17.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto18.jpg' },
      { tipo: 'video', src: 'img/proyecto-bodega-palmira/video7.mp4', thumb: 'img/proyecto-bodega-palmira/foto18.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto19.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto20.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto21.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto22.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto23.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto24.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto25.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto26.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto27.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto28.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto29.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto30.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto31.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto32.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto33.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto34.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto35.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto36.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto37.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto38.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto39.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto40.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto41.jpg' },
      { tipo: 'foto', src: 'img/proyecto-bodega-palmira/foto42.jpg' },
    ],
    indice: 0
  }
};

function iniciarVisor(id) {
  const p = proyectos[id];
  const visor = document.getElementById('visor-' + id);
  const thumbs = document.getElementById('thumbs-' + id);
  visor.innerHTML = `
    <span class="pd-visor-type foto-tag" id="tipo-${id}">FOTO</span>
    <span class="pd-visor-counter" id="counter-${id}">1 / ${p.medios.length}</span>
    <div class="pd-visor-nav">
      <button class="pd-nav-btn" onclick="navVisor('${id}',-1)"><i class="fas fa-chevron-left"></i></button>
      <button class="pd-nav-btn" onclick="navVisor('${id}',1)"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;
  thumbs.innerHTML = '';
  p.medios.forEach((m, i) => {
    const div = document.createElement('div');
    div.className = 'pd-thumb' + (m.tipo === 'video' ? ' es-video' : '') + (i === 0 ? ' activo' : '');
    div.onclick = () => irA(id, i);
    const img = document.createElement('img');
    img.src = m.tipo === 'foto' ? m.src : m.thumb;
    img.loading = 'lazy';
    div.appendChild(img);
    thumbs.appendChild(div);
  });
  mostrarMedio(id, 0);
}

function mostrarMedio(id, i) {
  const p = proyectos[id];
  const visor = document.getElementById('visor-' + id);
  const medio = p.medios[i];
  visor.querySelectorAll('img, video').forEach(el => el.remove());
  visor.querySelectorAll('video').forEach(v => v.pause());
  if (medio.tipo === 'foto') {
    const img = document.createElement('img');
    img.src = medio.src;
    img.className = 'activo';
    img.onclick = () => abrirFoto(medio.src);
    img.style.cursor = 'zoom-in';
    visor.appendChild(img);
    document.getElementById('tipo-' + id).textContent = 'FOTO';
    document.getElementById('tipo-' + id).className = 'pd-visor-type foto-tag';
  } else {
    const video = document.createElement('video');
    video.src = medio.src;
    video.className = 'activo';
    video.controls = true;
    video.preload = 'metadata';
    visor.appendChild(video);
    document.getElementById('tipo-' + id).textContent = 'VIDEO';
    document.getElementById('tipo-' + id).className = 'pd-visor-type video-tag';
  }
  document.getElementById('counter-' + id).textContent = (i + 1) + ' / ' + p.medios.length;
  document.querySelectorAll('#thumbs-' + id + ' .pd-thumb').forEach((t, idx) => {
    t.classList.toggle('activo', idx === i);
  });
  p.indice = i;
}

function navVisor(id, dir) {
  const p = proyectos[id];
  const nuevo = (p.indice + dir + p.medios.length) % p.medios.length;
  mostrarMedio(id, nuevo);
}

function irA(id, i) {
  mostrarMedio(id, i);
}

function toggleProyecto(id) {
  const contenido = document.getElementById(id);
  const btn = contenido.previousElementSibling.querySelector('.pd-toggle-btn');
  const abierto = contenido.classList.contains('abierto');
  if (abierto) {
    contenido.classList.remove('abierto');
    btn.innerHTML = '<i class="fas fa-images"></i> Ver proyecto';
  } else {
    contenido.classList.add('abierto');
    btn.innerHTML = '<i class="fas fa-times"></i> Cerrar proyecto';
    iniciarVisor(id);
    contenido.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== LIGHTBOX =====
function abrirFoto(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = src;
  lb.classList.add('active');
}
function cerrarFoto() {
  document.getElementById('lightbox').classList.remove('active');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarFoto();
});
// ===== LIGHTBOX CON FLECHAS =====
let lbFotos = [];
let lbIndice = 0;

function abrirFoto(src) {
  const p = proyectos['p1'];
  lbFotos = p.medios.filter(m => m.tipo === 'foto').map(m => m.src);
  lbIndice = lbFotos.indexOf(src);
  if (lbIndice === -1) lbIndice = 0;
  mostrarLb();
}

function mostrarLb() {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = lbFotos[lbIndice];
  document.getElementById('lb-counter').textContent = (lbIndice + 1) + ' / ' + lbFotos.length;
  lb.classList.add('active');
}

function navLightbox(dir) {
  lbIndice = (lbIndice + dir + lbFotos.length) % lbFotos.length;
  mostrarLb();
}

function cerrarFoto() {
  document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') cerrarFoto();
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft') navLightbox(-1);
});

// ===== CONTADOR ANIMADO =====
const contadores = document.querySelectorAll('.contador-num');
const contadorObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
      contadorObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
contadores.forEach(c => contadorObserver.observe(c));

// ===== BOTÓN VOLVER ARRIBA =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});