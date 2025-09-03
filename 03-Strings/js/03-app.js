const producto = "Monitor 20 pulgadas"
const precio = "300 USD"

//concat
//es un metodo que nos permite concatenar dos o mas cadenas de texto

console.log(producto.concat(precio));
//Esto nos da como resultado "Monitor 20 pulgadas300 USD",
//porque concatena las dos cadenas de texto sin espacio entre ellas

console.log(producto.concat(" En oferta a solo ", precio));
//Esto nos da como resultado "Monitor 20 pulgadas En oferta a solo 300 USD",
//porque concatena las dos cadenas de texto con el texto que le pasamos como parametro

//otra forma de concatenar es con el operador de suma (+)
console.log(producto + " En oferta a solo " + precio);
//Esto nos da como resultado "Monitor 20 pulgadas En oferta a solo 300 USD",
//porque concatena las dos cadenas de texto con el texto que le pasamos como parametro

//otra forma de concatenar es con los template literals o plantillas literales
console.log(`El producto ${producto} tiene un precio de: ${precio}`);
//Esto nos da como resultado "El producto Monitor 20 pulgadas tiene un precio de: 300 USD",
//porque concatena las dos cadenas de texto con el texto que le pasamos como parametro
//y ademas nos permite insertar variables dentro de la cadena de texto
//de una forma mas sencilla y legible