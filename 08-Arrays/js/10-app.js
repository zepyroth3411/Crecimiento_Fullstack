const carito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },]

carito.forEach( producto => console.log(producto.nombre)); 
//itera sobre cada elemento del arreglo, sin modificar el arreglo original
//no retorna nada
//console.log(producto) //error porque no existe fuera del scope

const precios = carito.map( producto => producto.precio * 1.15);
//retorna un nuevo arreglo con los valores modificados
console.log(precios);
console.log(carito); //arreglo original sin modificar