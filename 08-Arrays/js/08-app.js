const carrito = [
    { nombre: "Monitor 32 Pulgadas", precio: 400, disponible: true },
    { nombre: "Celular", precio: 800 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Mouse", precio: 30 },
];  

// Destructuring // Sirve para objetos
// const {disponible } =  carrito 
// console.log(disponible); 


// Destructuring // Sirve para arrays
const numeros=[10,20,30,40,50]

//const [primero, segundo]=numeros // toma el elemento por su posicion
//const [primero, , , cuarto]=numeros // toma el elemento por su posicion, si no quieres uno lo dejas vacio
const [primero, segundo, ...tercero]=numeros // operador rest, toma el resto de los elementos y los mete en un array
console.log(primero);
console.log(segundo);
console.log(tercero); // [30,40,50] // operador rest, toma el resto de los elementos y los mete en un array