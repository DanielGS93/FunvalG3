const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 }
];

// 1️⃣ Recorrer y mostrar productos (forEach)
console.log("1️⃣ Lista de productos:");
productos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

// 2️⃣ Crear array de nombres y verificar disponibilidad
const productosDisponibles = productos.map(p => p.nombre);
console.log("\n2️⃣ Productos disponibles:", productosDisponibles);

const productoBuscado = "Tablet";
const disponible = productosDisponibles.includes(productoBuscado);
console.log(`¿Está "${productoBuscado}" disponible?`, disponible ? "Sí" : "No");

// 3️⃣ Aplicar un 10% de descuento
const productosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: (p.precio * 0.9).toFixed(2)
}));
console.log("\n3️⃣ Productos con 10% de descuento:", productosConDescuento);

// 4️⃣ Filtrar productos por precio < $100
const productosBaratos = productos.filter(p => p.precio < 100);
console.log("\n4️⃣ Productos con precio menor a $100:", productosBaratos);

// 5️⃣ Obtener los primeros 2 productos
const primerosProductos = productos.slice(0, 2);
console.log("\n5️⃣ Primeros 2 productos:", primerosProductos);

// 6️⃣ Ordenar productos por precio (menor a mayor)
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\n6️⃣ Productos ordenados por precio (menor a mayor):", productosOrdenados);

// 7️⃣ Invertir el orden de los productos
const productosInvertidos = [...productos].reverse();
console.log("\n7️⃣ Productos en orden inverso:", productosInvertidos);
