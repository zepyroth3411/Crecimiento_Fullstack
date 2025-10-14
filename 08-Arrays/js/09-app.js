const carrito = [
    { nombre: "Monitor 32 Pulgadas", precio: 400, disponible: true },
    { nombre: "Celular", precio: 800 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Mouse", precio: 30 },
];  
let disponible =[]

// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre);
//   }

carrito.forEach( function(producto) {
    disponible.push(producto.disponible)
  } );
console.log(disponible); // [true, undefined, undefined, undefined]
