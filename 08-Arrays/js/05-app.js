const carrito = [];
let sumacarrito = 0;
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400,
};

const producto2 = {
    nombre: "Celular",
    precio: 800,
};
const producto3 = {
    nombre: "Teclado",
    precio: 50,
};


//.PUSH agrega al final del array
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
const producto4 = {
    nombre: "Mouse",
    precio: 30,
};


//console.log(carrito[0].precio);

carrito.unshift(producto4); //agrega al inicio del array

console.table(carrito);

for(let i = 0; i < carrito.length; i++){
    //console.log(carrito[i].precio); //imprime cada array interno
    sumacarrito = sumacarrito + carrito[i].precio;
}
console.log(sumacarrito);
