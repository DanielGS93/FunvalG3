let contador = 0;

const botonSumar = document.getElementById('sumarBtn');
const botonRestar = document.getElementById('restarBtn');
const spanContador = document.getElementById('contador');

function actualizarContador() {
  spanContador.textContent = contador;
}

botonSumar.addEventListener('click', () => {
  contador++;
  actualizarContador();
});

botonRestar.addEventListener('click', () => {
  contador--;
  actualizarContador();
});
