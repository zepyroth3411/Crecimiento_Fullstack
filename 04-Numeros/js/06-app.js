const numero1 = "5.5";
const numero2 = 10; 
const numero3 = "Uno";

//typeof es un operador que nos dice el tipo de dato 
console.log(numero1);
console.log(typeof numero1);

//Convertir String a numero
//Number es una funcion que convierte String a numero, parseInt convierte a entero y parseFloat a decimal
console.log(Number(numero1));
console.log(parseInt(numero1));
console.log(parseFloat(numero1));


console.log(Number(numero3)); //NaN no es un numero

console.log(Number.isNaN(Number(numero3))); //true  //isNaN es una funcion que nos dice si el valor es NaN



