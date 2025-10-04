const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen4.jpg"
}
//agregar propiedades a un objeto
// producto.imagen = "imagen.jpg";
// console.log(producto);   
//metodos para objetos
Object.seal(producto); //no permite eliminar ni agregar nuevas propiedades, pero si modificar las existentes

producto.imagen = "imagen.jpg";
producto.precio = 400; //si se puede modificar
console.log(producto);

Object.freeze(producto); //no permite eliminar, agregar o modificar las propiedades del objeto
producto.imagen = "imagen.jpg"; //no se puede agregar
console.log(producto);
