const numero1 = 20;
const numero2 = "20.20";
const numero3 = 30;


//operador mayor que

console.log(numero1 > numero3); //false
console.log(numero3 > numero1); //true

console.log(numero1 > numero2); //false
//Al comparar un numero con un string, JS convierte el string a numero y luego hace la comparacion

//operador menor que

console.log(numero1 < numero3); //true
console.log(numero3 < numero1); //false