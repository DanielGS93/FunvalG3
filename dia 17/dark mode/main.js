const boton = document.getElementById('toggleModo');
const body = document.getElementById('body');
const imagen = document.getElementById('imagen');

let modoOscuro = false;

boton.addEventListener('click', () => {
  modoOscuro = !modoOscuro;

  if (modoOscuro) {
    body.classList.replace('bg-white', 'bg-gray-900');
    body.classList.replace('text-black', 'text-white');
    imagen.src = './imagenes/DarthVader.webp';
    boton.textContent = 'Cambiar a modo claro';
  } else {
    body.classList.replace('bg-gray-900', 'bg-white');
    body.classList.replace('text-white', 'text-black');
    imagen.src = './imagenes/250px-AnakinEstGrumpyHead.webp';
    boton.textContent = 'Cambiar a modo oscuro';
  }
});
