//object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Television", 500);
const producto3 = new Producto("Tablet", 200);
const producto4 = new Producto("Audifonos", 300);
console.log(producto2);

console.log(producto4); 

producto3.disponible = false;
console.log(producto3);