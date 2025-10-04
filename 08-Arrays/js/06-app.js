// se hablo de declaracion imperativa y declarativa
// en la imperativa es una forma literal de crear un array
const carrito = [
    { nombre: "Monitor 32 Pulgadas", precio: 400 },
    { nombre: "Celular", precio: 800 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Mouse", precio: 30 },
];  

//en la imperativa se utilizan los metodos de los arrays, modifican el array original
carrito.push({ nombre: "Audifonos", precio: 200 });
carrito.unshift({ nombre: "Motherboard", precio: 300 });
console.table(carrito);

//En la declaracion declarativa (spread operator)
//la forma de interactuar con los array u objetos 
const nuevoCarrito = [...carrito, { nombre: "Parlantes", precio: 400 }]; //agrega al final
const nuevoCarrito2 = [{ nombre: "Escritorio", precio: 400 }, ...carrito]; //agrega al inicio

console.table(nuevoCarrito);
console.table(nuevoCarrito2);
