let saldo = 0;
let historial = [];
let retirosDiarios = {};
const LIMITE_DIARIO = 500;

function obtenerFechaHoy() {
  const hoy = new Date();
  return hoy.toISOString().split("T")[0]; // formato 'YYYY-MM-DD'
}

function obtenerCantidad() {
  const input = document.getElementById("cantidad");
  const cantidad = parseFloat(input.value);
  input.value = ""; // limpiar campo
  return isNaN(cantidad) ? 0 : cantidad;
}

function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;

  if (tipo === "exito") {
    mensaje.className = "text-green-600 font-semibold mt-4";
  } else if (tipo === "error") {
    mensaje.className = "text-red-600 font-semibold mt-4";
  } else {
    mensaje.className = "text-blue-600 font-semibold mt-4";
  }
}

function agregarHistorial(tipo, monto) {
  const fechaHora = new Date().toLocaleString();
  historial.push(`${fechaHora} - ${tipo}: $${monto.toFixed(2)}`);

  const lista = document.getElementById("historial");
  lista.innerHTML = "";
  historial.slice().reverse().forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function depositar() {
  const cantidad = obtenerCantidad();
  if (cantidad > 0) {
    saldo += cantidad;
    mostrarMensaje(`Depósito exitoso. Saldo: $${saldo.toFixed(2)}`, "exito");
    agregarHistorial("Depósito", cantidad);
  } else {
    mostrarMensaje("Ingrese una cantidad válida para depositar.", "error");
  }
}

function retirar() {
  const cantidad = obtenerCantidad();
  const hoy = obtenerFechaHoy();

  if (cantidad <= 0) {
    mostrarMensaje("Ingrese una cantidad válida para retirar.", "error");
    return;
  }

  if (cantidad > saldo) {
    mostrarMensaje("Saldo insuficiente para realizar el retiro.", "error");
    return;
  }

  if (!retirosDiarios[hoy]) {
    retirosDiarios[hoy] = 0;
  }

  if (retirosDiarios[hoy] + cantidad > LIMITE_DIARIO) {
    mostrarMensaje(`Has alcanzado el límite diario de retiro ($${LIMITE_DIARIO}).`, "error");
    return;
  }

  saldo -= cantidad;
  retirosDiarios[hoy] += cantidad;
  mostrarMensaje(`Retiro exitoso. Saldo: $${saldo.toFixed(2)}`, "exito");
  agregarHistorial("Retiro", -cantidad);
}

function consultarSaldo() {
  mostrarMensaje(`Saldo actual: $${saldo.toFixed(2)}`, "info");
}
