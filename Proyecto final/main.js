import { stays } from "../assets/stays.js";
import { filterStays } from "./filters.js";
import { renderStays } from "./render.js";

const form = document.getElementById("filterForm");
const citySelect = document.getElementById("citySelect");
const guestInput = document.getElementById("guestInput");

function updateResults() {
  const city = citySelect.value;
  const guests = parseInt(guestInput.value) || 0;
  const filtered = filterStays(stays, city, guests);
  renderStays(filtered);
}

form.addEventListener("change", updateResults);
guestInput.addEventListener("input", updateResults);

updateResults(); // Inicializa con todos los resultados
