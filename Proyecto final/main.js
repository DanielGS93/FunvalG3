document.addEventListener("DOMContentLoaded", () => {
  const staysContainer = document.getElementById("staysContainer");
  const cityInput = document.getElementById("cityInput");
  const guestsInput = document.getElementById("guestsInput");
  const dateInput = document.getElementById("dateInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultsCount = document.getElementById("resultsCount");

  const searchBar = document.getElementById("searchBar");
  const searchCard = document.getElementById("searchCard");
  const whereLabel = document.getElementById("whereLabel");
  const whenLabel = document.getElementById("whenLabel");
  const guestsLabel = document.getElementById("guestsLabel");

  let selectedDates = "";

  // Mostrar tarjeta al hacer clic en la barra
  searchBar.addEventListener("click", (e) => {
    e.stopPropagation();
    searchCard.classList.remove("hidden");
  });

  // Ocultar tarjeta al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!searchCard.contains(e.target) && !searchBar.contains(e.target)) {
      searchCard.classList.add("hidden");
    }
  });

  // Ejecutar búsqueda
  searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim().toLowerCase();
    const guests = parseInt(guestsInput.value) || 1;
    const date = selectedDates || dateInput.value.trim();

    // Actualizar etiquetas
    whereLabel.textContent = city ? city[0].toUpperCase() + city.slice(1) : "¿Dónde?";
    whenLabel.textContent = date ? date.replace(" to ", " → ") : "¿Cuándo?";
    guestsLabel.textContent = guests ? `${guests} huésped(es)` : "¿Quiénes?";

    // Filtrar resultados
    const filtered = stays.filter(stay =>
      stay.city.toLowerCase().includes(city) &&
      stay.maxGuests >= guests
    );

    renderStays(filtered);

    // Ocultar tarjeta
    searchCard.classList.add("hidden");

    // Actualizar URL
    const params = new URLSearchParams({ city, guests, date });
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  });

  // Renderizar cards
  function renderStays(staysArray) {
    staysContainer.innerHTML = "";

    staysArray.forEach(stay => {
      const card = document.createElement("div");
      card.className = "rounded-xl overflow-hidden shadow-lg bg-white text-gray-900";

      card.innerHTML = `
        <img src="${stay.photo}" alt="${stay.title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <div class="flex items-center justify-between text-sm mb-2">
            ${stay.superHost ? '<span class="border px-2 py-1 rounded text-xs font-bold">SUPER HOST</span>' : ""}
            <span>${stay.type}${stay.beds ? ` · ${stay.beds} camas` : ""}</span>
            <span>⭐ ${stay.rating}</span>
          </div>
          <h3 class="text-lg font-semibold">${stay.title}</h3>
        </div>
      `;

      staysContainer.appendChild(card);
    });

    resultsCount.textContent = `${staysArray.length} estadía(s) disponible(s)`;
  }

  // Inicializar filtros desde la URL
  function initializeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city") || "";
    const guests = params.get("guests") || "";
    const date = params.get("date") || "";

    cityInput.value = city;
    guestsInput.value = guests;
    dateInput.value = date;

    whereLabel.textContent = city ? city[0].toUpperCase() + city.slice(1) : "¿Dónde?";
    whenLabel.textContent = date ? date.replace(" to ", " → ") : "¿Cuándo?";
    guestsLabel.textContent = guests ? `${guests} huésped(es)` : "¿Quiénes?";

    selectedDates = date;

    const filtered = stays.filter(stay =>
      stay.city.toLowerCase().includes(city.toLowerCase()) &&
      stay.maxGuests >= (parseInt(guests) || 1)
    );

    renderStays(filtered);
  }

  initializeFromURL();

  // Inicializar Flatpickr
  const fp = flatpickr("#dateInput", {
    mode: "range",
    dateFormat: "Y-m-d",
    defaultDate: dateInput.value.includes(" to ") ? dateInput.value.split(" to ") : undefined,
    locale: "es",
    closeOnSelect: true, // ← cierre automático al seleccionar 2 fechas
    onChange: function(selectedDatesArr, dateStr) {
      selectedDates = dateStr;
      whenLabel.textContent = dateStr ? dateStr.replace(" to ", " → ") : "¿Cuándo?";
    }
  });

  // Abrir calendario al hacer clic en el input
  dateInput.addEventListener("focus", () => {
    fp.open();
  });
});
