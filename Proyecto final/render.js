export function renderStays(stays) {
  const container = document.getElementById("results");
  container.innerHTML = "";
  stays.forEach(stay => {
    const card = document.createElement("article");
    card.className = "bg-white rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl";
    card.innerHTML = `
      <img src="${stay.photo}" alt="${stay.title}" class="w-full h-64 object-cover" />
      <div class="p-4">
        <div class="flex justify-between items-center text-sm text-gray-600">
          <div class="flex items-center gap-2">
            ${stay.superHost ? `<span class="border border-gray-800 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">SUPER HOST</span>` : ""}
            <span>${stay.type}${stay.beds ? ` • ${stay.beds} beds` : ""}</span>
          </div>
          <div class="text-sm text-gray-800">
            <span class="text-pink-500">★</span> ${stay.rating}
          </div>
        </div>
        <h3 class="mt-2 font-semibold text-gray-900">${stay.title}</h3>
      </div>
    `;
    container.appendChild(card);
  });
}
