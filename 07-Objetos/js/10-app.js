const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = { 
    peso: "1kg",
    medida: "1m"
}

const nuevoProducto = Object.assign(producto, medidas); // Une dos objetos, el primero es el que se va a modificar, 
// no crea uno nuevo
console.log(nuevoProducto); 
// en todo caso para crear uno nuevo agregando ambos objetos, se podria hacer lo siguiente:
const nuevoProducto2 = Object.assign({}, producto, medidas);
console.log(nuevoProducto2);

nuevoProducto2.nombre = "Monitor 24 pulgadas"; // Modifica el nombre del nuevo objeto
console.log(nuevoProducto2);
console.log(producto); // El objeto original no se modifica

// Otra forma de unir objetos es con el operador spread (...)   
const nuevoProducto3 = {...producto, ...medidas};
console.log(nuevoProducto3);
nuevoProducto3.nombre = "Monitor 30 pulgadas";
console.log(nuevoProducto3);
console.log(producto); // El objeto original no se modifica