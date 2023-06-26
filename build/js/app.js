document.addEventListener('DOMContentLoaded', function() {
  iniciarApp();
})

function iniciarApp() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for(let i = 1; i <= 12; i++) {
    const imagen = document.createElement('PICTURE');
    
    imagen.innerHTML = `
      <source srcset="build/img/thumb/${i}.avif" type="image/avif">
      <source srcset="build/img/thumb/${i}.webp" type="image/webp">
      <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="Imagen Galería">
    `;

    imagen.onclick = function() {
       mostrarImagen(i);
    }

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement('PICTURE');

  imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" src="build/img/grande/${id}.jpg" alt="Imagen Galería">
  `;

  // Crea el Overlay con la Imagen
  const overlay = createElement('DIV');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');

  // Botón para Cerrar el Modal
  const cerrarModal = document.createElement('P');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  overlay.appendChild(cerrarModal);

  // Añadirlo al HTML
  const body = querySelector('body');
  body.appendChild(overlay);
}
