//objetos 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"
    },
    fabricacion: {
        pais: "China"
    }   

}

//agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

//eliminar propiedades
delete producto.disponible;
console.log(producto);
// destructuring
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
// el destructuring es una forma de extraer propiedades de un objeto y convertirlas en variables independientes
// tambien se puede hacer con arreglos
const numeros = [10, 20, 30, 40, 50];
const [primero, segundo, ...tercero] = numeros;
console.log(primero);
console.log(segundo);
console.log(tercero);// el operador ... se llama operador de propagacion y se utiliza para agrupar el resto de los elementos en un nuevo arreglo



