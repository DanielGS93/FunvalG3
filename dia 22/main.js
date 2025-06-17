/* codigo sincrono */

/* console.log("1 levantamos");
console.log("2 cepillamos los dientes");
console.log("3 desayunamos");
console.log("4 hacemos lectura de libro de mormon");
console.log("5 entramos a clases");
 */
/* CODIGO ASINCRONO */
/* 
console.log("1 pedir una pizza");

setTimeout(() => {
  console.log("2 llego la pipza :v ");
}, 2000);

console.log("3 mirar una serie ");
setTimeout(() => {
  console.log("4 te fuiste a lavar los platos ");
}, 4000);
console.log("5 alistar la mesa");
 */
/* PROMESAS */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];

function traerDatos() {
  setTimeout(() => {
    return datos;
  }, 1500);
} */

//console.log(traerDatos()); /// aqui le promete al clg q en algun momento le va llegar los datos
/* console.log("hola chamos"); */

/* COMO SE CREAN PROMESAS */

let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
  {
    nombre: "Thomas",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 28,
    pais: "Chile",
  },
  {
    nombre: "Juana",
    edad: 28,
    pais: "Chile",
  },
];
/* ella me prometio esperarme 2 años */
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("error al traer los datos");
      }
    }, 3000);
  });
}
let lista = document.querySelector("#listado");
let estChile = document.querySelector("#estudiantesChile");
/* lista.innerHTML = `
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
`; */
/* traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `<li><p>nombre: ${estudiante.nombre}</p>
      <p>edad:${estudiante.edad}</p></li>`;
    });
  })
  .catch((err) => console.log(err)); */

datos.forEach((estudiante) => {
  lista.innerHTML += `
  <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
        </div>
  </div>
`;
  if (estudiante.pais === "Chile") {
    estChile.innerHTML += `<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
        </div>
  </div>`;
  }
});

/* traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `   
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>
    `;
    });
  })
  .catch((err) => console.log(err)); */

/* async y await */

async function renderizarDatos() {
  try {
    let estudiantes = await traerDatos(); //espera a q la promesa se resuleva
    lista.innerHTML = "";
    estChile.innerHTML = "";
    estudiantes.forEach((estudiante) => {
      lista.innerHTML += `   
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>
    `;
      if (estudiante.pais === "Chile") {
        estChile.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

renderizarDatos();

/*  */
