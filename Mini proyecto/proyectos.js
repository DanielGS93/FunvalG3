
const proyectos = [
  {
    titulo: "Landing Page Startup",
    descripcion: "Una página responsive con HTML y Tailwind.",
    imagen: "img/proyecto1.png",
    link: "https://github.com/usuario/landing-startup"
  },
  {
    titulo: "App de Tareas",
    descripcion: "App para gestionar tareas con JavaScript puro.",
    imagen: "img/proyecto2.png",
    link: "https://github.com/DanielGS93/funvalg3"
  }
];

const contenedor = document.getElementById("galeria-proyectos");

proyectos.forEach(proy => {
  const card = document.createElement("div");
  card.className = "bg-deepBlue p-4 rounded-lg shadow";

  card.innerHTML = `
    <img src="${proy.imagen}" alt="${proy.titulo}" class="mb-2 rounded" />
    <h4 class="font-semibold">${proy.titulo}</h4>
    <p class="text-softGray text-sm">${proy.descripcion}</p>
    <a href="${proy.link}" class="text-highlight text-sm underline" target="_blank">Ver en GitHub</a>
  `;
  contenedor.appendChild(card);
});
