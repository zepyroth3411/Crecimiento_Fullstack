const producto = 'Monitor 20 pulgadas';
const precio = '300 USD';
const producto2 = "         Monitor de 50 pulgadas        ";

//metodos y propiedades de los strings

console.log(producto);

//length es una propiedad para conoser la cantidad de caracteres de un string/cadena de texto
console.log(producto.length); 

//indexOf es un metodo que nos dice en que posicion empieza 
//la palabra que le pasemos como parametro, si no la encuentra nos devuelve -1 
//de lo contrario si la encuentra nos devuelve la posicion en la que empieza
console.log(producto.indexOf("monitor"));

//length y indexOf son propiedades y metodos respectivamente
//las propiedades no llevan parentesis y los metodos si 

console.log(producto.indexOf("Pulgadas"));

//ambas son suceptibles a mayusculas y minusculas

//includes es un metodo que nos devuelve true o false
console.log(producto.includes("pulgadas"));

console.log(producto.includes("Tablet"));


//metodo concat sirve para concatenar dos o mas cadenas de texto
console.log(producto.concat(precio));
// hay diferentes formas de concatenar cadenas de texto y formatearlo

console.log(producto.concat(" en oferta a solo ", precio));
// otras formas de concatenar es con el operador de suma (+)

console.log(producto + " en oferta a solo " + precio);

//otra forma de concatenar es con los template literals o plantillas literales
console.log(`El producto ${producto} tiene un precio de: ${precio}`);
//Los literal templates nos permiten insertar variables dentro de la cadena de texto
//de una forma mas sencilla y legible.

// en resumen length es una propiedad que nos dice la cantidad de caracteres
// indexOf es un metodo que nos dice en que posicion empieza una palabra
// includes es un metodo que nos devuelve true o false si encuentra o no una palabra
// concat es un metodo que nos permite concatenar dos o mas cadenas de texto
// tambien podemos concatenar con el operador de suma (+) o con los template literals (``)

console.log("----------------------------");

console.log(producto2);

//trim es un metodo que nos permite eliminar los espacios en blanco al inicio y al final de una cadena de texto
console.log(producto2.trimStart()); //elimina los espacios al inicio
console.log(producto2.trimEnd()); //elimina los espacios al final
console.log(producto2.trim()); //elimina los espacios al inicio y al final


console.log("----------------------------");


//metodo replace sirve para reemplazar una palabra por otra en un string

console.log(producto);

console.log(producto.replace('pulgadas', 'prime'))

console.log(producto.replace("Monitor", "Monitor Curvo"));

//el metodo replace solo reemplaza la primera coincidencia que encuentra
console.log("----------------------------");

//el metodo slice sirve para extraer una parte de un string, recibe dos parametros, el primero es la posicion inicial
// y el segundo la posicion final (no incluida)

console.log(producto.slice(0,10)); //extrae una parte del string, en este caso desde la posicion 0 hasta la 9
console.log(producto.slice(8));

console.log("----------------------------");

//el metodo substring sirve para extraer una parte de un string, recibe dos parametros, el primero es la posicion inicial
// y el segundo la posicion final (no incluida)

console.log(producto.substring(0,10)); //extrae una parte del string, en este caso desde la posicion 0 hasta la 9
console.log(producto.substring(2,1)); //extrae una parte del string, en este caso desde la posicion 1 hasta la 2

//slice → más estricto (si te equivocas con los índices, devuelve vacío).
//substring → más permisivo (corrige si te equivocas e invierte los valores).

//el metodo charAt sirve para obtener el caracter en la posicion que se le indique
console.log(producto.charAt(0)); //M
