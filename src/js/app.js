document.addEventListener('DOMContentLoaded', function() {
  iniciarApp();
})

function iniciarApp() {
  navegacionFija();
  crearGaleria();
  scrollNav();
}

function navegacionFija() {
  const barra = document.querySelector('.header');
  const sobreFestival = document.querySelector('.sobre-festival');
  const body = document.querySelector('body');

  window.addEventListener('scroll', function() {
    if(sobreFestival.getBoundingClientRect().bottom < 0) {
      barra.classList.add('fijo');
      body.classList.add('body-scroll');

    } else {
      barra.classList.remove('fijo');
      body.classList.remove('body-scroll');
    }
  });
}


function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a');
  enlaces.forEach( enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({behavior: "smooth"});
    });
  })
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for(let i = 1; i <= 12; i++) {
    const imagenes = document.createElement('PICTURE');
    
    imagenes.innerHTML = `
      <source srcset="build/img/thumb/${i}.avif" type="image/avif">
      <source srcset="build/img/thumb/${i}.webp" type="image/webp">
      <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="Imagen Galería">
    `;

    imagenes.onclick = function() {
      mostrarImagen(i);
    }

    galeria.appendChild(imagenes);
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
  const muestraFoto = document.createElement('DIV');
  muestraFoto.classList.add('muestraFoto');
  muestraFoto.appendChild(imagen);
  muestraFoto.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
    muestraFoto.remove();
  }

  // Botón para Cerrar el Modal
  const cerrarModal = document.createElement('P');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  cerrarModal.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
    muestraFoto.remove();
  }
  muestraFoto.appendChild(cerrarModal);

  // Añadirlo al HTML
  const body = document.querySelector('body');
  body.appendChild(muestraFoto);
  body.classList.add('fijar-body');
}
