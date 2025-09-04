const producto = 'Monitor 20 Pulgadas'; 
const usuario= "Brandon"

//metodo replace sirve para reemplazar una palabra por otra en un string

console.log(producto);
console.log(producto.replace('Pulgadas', '"'))
console.log(producto.replace("Monitor", "Monitor Curvo"));
console.log("----------------------------");
//metodo slice sirve para extraer una parte de un string, recibe dos parametros, el primero es la posicion inicial
// y el segundo la posicion final (no incluida)
console.log(producto.slice(0,10)); //extrae una parte del string, en este caso desde la posicion 0 hasta la 9
console.log(producto.slice(8)); //extrae una parte del string, en este caso desde la posicion 8 hasta el final
console.log(producto.slice(18,7)); //no imprime nada porque la posicion inicial es mayor a la final
console.log("----------------------------");
//metodo substring sirve para extraer una parte de un string, recibe dos parametros, el primero es la posicion inicial
// y el segundo la posicion final (no incluida)
console.log(producto.substring(0,10)); //extrae una parte del string, en este caso desde la posicion 0 hasta la 9
console.log(producto.substring(2,1)); //extrae una parte del string, en este caso desde la posicion 1 hasta la 2
console.log("----------------------------");

//slice → más estricto (si te equivocas con los índices, devuelve vacío).

//substring → más permisivo (corrige si te equivocas e invierte los valores).

console.log(producto.slice(10, 0));     // "" (vacío)
console.log(producto.substring(10, 0)); // "Monitor 20" (invierte los índices)

//metodo charAt sirve para obtener el caracter en la posicion que se le indique
console.log(usuario.substring(0,1)); //B
console.log(usuario.charAt(0)); //B
