const producto = 'Monitor 20 pulgadas';

// .repeat es un metodo que nos permite repetir una cadena de texto
const texto = "en Promocion".repeat(3);
console.log(texto); 

console.log(`${producto} ${texto} !!!`);

//.repeat si se ponen valores que no son enteros, los redondea hacia abajo
console.log("Hola".repeat(2.8)); // HolaHola
console.log("Hola".repeat(0.8)); // "" (cadena vacia)

// si se pone un valor negativo o 0, devuelve una error
//console.log("Hola".repeat(-2));

//Split, dividir un string 

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // divide el string por los espacios y lo convierte en un array
console.log(actividad.split("a")); // divide el string por la letra "a" y lo convierte en un array
console.log(actividad.split("a",2)); // Limita el numero de cortes a 2

//Si yo quisiera utilizar mas delimitadores es necesario usar expresiones regulares (RegEx)

console.log(actividad.split(/[aeo]/)); // divide el string por las letras "a", "e" y "o" y lo convierte en un array

