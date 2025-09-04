//Math es un objeto nativo de JavaScript que nos permite trabajar con numeros y realizar operaciones matematicas mas complejas

let resultado;

//PI
resultado = Math.PI;    
console.log(resultado);

//Redondear
resultado = Math.round(2.8);
console.log(resultado);

resultado = Math.round(2.2);
//redondea hacia abajo
console.log(resultado);

//Redondear hacia arriba
resultado = Math.ceil(2.1);
console.log(resultado);

//Redondear hacia abajo
resultado = Math.floor(2.9);
console.log(resultado);

//raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);

//valor absoluto
resultado = Math.abs(-500);
console.log(resultado);

//Potencia
resultado = Math.pow(8,2);
console.log(resultado);


//minimo y maximo 
resultado = Math.min(3,5,1,6,7,8,-2);
console.log(resultado);
console.log(`minimo: ${resultado}`);
resultado = Math.max(3,5,1,6,7,8,-2);
console.log(resultado);
console.log(`maximo: ${resultado}`);

//aleatorio
resultado = Math.random();
console.log(Math.floor(resultado*100))

