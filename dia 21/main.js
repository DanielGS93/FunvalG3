/* PRACTICAR ITERACIONES */
/* fuerza bruta
    optimzando
    refactorizando
*/
// la serie de fibonacci
////  0,1,1,2,3,5,8,13
/* impelementar un programa q pidan un numero N al cliente
q representara la cantidad de elementos de la serie fibonacci
 
n=5
0,1,1,2,3
n=2
0,1
n=7
0,1,1,2,3,5,8
*/

/* resolver */
/* 
let a = 0;
let b = 1;
let c = 0;

let n = parseInt(prompt("ingrese el numero de la serie"));

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(a);
  }
  if (i === 2) {
    console.log(b);
  }
  if (i > 2) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
} */

/* function nombre(numero) {
  if (numero > 1) {
    console.log("hola amigo");
    nombre(numero - 1);
  } else {
    console.log("bucle terminado");
  }
}
nombre(5);
 */

/* ARRAYS matrices */

let matriz = [
  [5, 3, 12],
  [8, 7, 4],
  [15, 10, 77],
];
/*deberan devoolver la suma de la diagonal principal
este programa debera funcionar con cualquier matriz cuadrada
15 min
*/
let resultado = 0;
for (let j = 0; j < matriz.length; j++) {
  resultado += matriz[j][j];
}

/* FUNCIONES DE ORDEN SUPERIOR */

function saludar(nombre) {
  console.log("hola " + nombre);
}
function despedida(nombre) {
  console.log("chau " + nombre);
}

function superSaludo(nombre, callback) {
  callback(nombre);
}

superSaludo("PEPITO", saludar);

superSaludo("KEVIN", despedida);

let notas = [0, 10, 64, 99];

/* forEach */
notas.forEach((nota) => {
  console.log(nota);
});

/* MAP */
let notasDoble = notas.map((nota) => nota * 2);

/* Filter */
let notasAprob = notas.filter((nota) => nota > 51);
console.log(notasAprob);
/* find */
let notaEncontrada = notas.find((nota) => nota > 9);
console.log(notaEncontrada);
/* findIndex */
let indice = notas.findIndex((nota) => nota > 300);
console.log(indice);
/* includes */
let tiene = notas.includes("64");
console.log(tiene);

/* Fill */
notas.fill(10, 1, 3); //modifica el array original
console.log(notas);
/* slice */
let subnotas = notas.slice(0);

let res = notas.map((nota) => nota * 3).filter((nota) => nota > 40);

/* EJERCICIOS */

const estudiantesFunval = [
  { nombre: "Felipe", nota: 89 },
  { nombre: "Thomas", nota: 34 },
  { nombre: "Pablo", nota: 77 },
  { nombre: "woodleine", nota: 68 },
  { nombre: "Mahonri", nota: 23 },
];
/* extraer los nombres solo de los estudiantes aprobados y mostrarlos en mayusculas 
se consideran apribados los estudiantes con nota arriba de 76
*/
//FELIPE----PABLO------ ESTA PROHIBIDO USAR FOR
