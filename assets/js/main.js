'use strict';

// Solo preferencias de lectura. Sin cuentas, API ni datos de estudiantes.
const root = document.documentElement;
const size = document.getElementById('tamano-texto');
const motion = document.getElementById('reducir-movimiento');
const status = document.getElementById('estado-ajustes');
const defaultSettings = { size: 'normal', reduced: false };
let settings = { ...defaultSettings };
try {
  const saved = JSON.parse(localStorage.getItem('vanty-accessibility') || 'null');
  if (saved && ['normal', 'large', 'larger'].includes(saved.size)) {
    settings = { size: saved.size, reduced: saved.reduced === true };
  }
} catch { /* La web funciona también con almacenamiento bloqueado. */ }

function applySettings(announce = false) {
  root.dataset.textSize = settings.size;
  root.dataset.reducedMotion = String(settings.reduced);
  size.value = settings.size;
  motion.checked = settings.reduced;
  try { localStorage.setItem('vanty-accessibility', JSON.stringify(settings)); } catch { /* Preferencia válida durante esta visita. */ }
  if (announce) status.textContent = 'Preferencias de lectura actualizadas.';
}
applySettings();
size.addEventListener('change', () => { settings.size = size.value; applySettings(true); });
motion.addEventListener('change', () => { settings.reduced = motion.checked; applySettings(true); });
document.getElementById('restablecer').addEventListener('click', () => {
  settings = { ...defaultSettings };
  applySettings();
  status.textContent = 'Se restablecieron los ajustes de lectura.';
});

// La navegación móvil se cierra al elegir una sección.
const menu = document.getElementById('menu');
menu.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  const destination = document.querySelector(link.getAttribute('href'));
  if (destination) {
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
  }
}));

// Bootstrap gestiona Escape, el foco atrapado y su devolución al disparador.
const modalElement = document.getElementById('imagen-modal');
const previewImage = document.getElementById('imagen-ampliada');
document.querySelectorAll('[data-preview]').forEach(button => {
  button.addEventListener('click', () => {
    previewImage.src = button.dataset.preview;
    previewImage.alt = button.dataset.title + ', datos de demostración';
    previewImage.classList.toggle('mobile-expanded', button.classList.contains('phone-preview'));
    document.getElementById('titulo-imagen').textContent = button.dataset.title;
    const restoreFocus = () => button.focus();
    modalElement.addEventListener('hidden.bs.modal', restoreFocus, { once: true });
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  });
});

// Los videos permanecen bajo control del visitante: sin audio automático.
const demoVideo = document.getElementById('video-demo');
if (demoVideo) {
  const player = demoVideo.parentElement;
  const playButton = document.createElement('button');
  playButton.type = 'button';
  playButton.className = 'demo-play-button';
  playButton.setAttribute('aria-label', 'Reproducir demostración de Vanty School');
  playButton.innerHTML = '<span aria-hidden="true">▷</span>';
  player.classList.add('demo-player');
  player.append(playButton);
  playButton.addEventListener('click', () => {
    demoVideo.play().catch(() => {
      playButton.hidden = true;
      demoVideo.focus();
    });
  });
  demoVideo.addEventListener('play', () => { playButton.hidden = true; });
  demoVideo.addEventListener('ended', () => { playButton.hidden = false; });
}

// El contenido siempre empieza visible; la mejora de movimiento es opcional.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .aria-character').forEach(element => observer.observe(element));
}
