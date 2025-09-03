//M o n i t o r   2 0  p u l g a d a s
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18

//M o n i t o r   2 0   p u l g a d a s
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19


//producto.length, length es una propiedad que nos dice cuantos caracteres tiene el string
//producto.indexOf("palabra"),es un metodo que a su ves es una funcion, donde recibe como parametro 
//una palabra y nos devuelve la posicion en la que empieza esa palabra dentro del string, si no la encuentra nos devuelve -1
//producto.includes("palabra"), es un metodo que a su ves es una funcion, donde recibe como parametro
//una palabra y nos devuelve true o false si la palabra que le pasamos como parametro esta o no en el string
//en los metodos indexOf e includes es sceptible a mayusculas y minusculas




const producto = "Monitor 20 pulgadas"


console.log(producto)

//length es una propiedad para conoser la cantidad de caracteres de un string/cadena de texto
console.log(producto.length) // length es una propiedad que nos dice cuantos caracteres tiene el string

console.log(producto.indexOf("Monitor"))
//indexOf es un metodo que nos dice en que posicion empieza la palabra que le pasemos como parametro, si no la encuentra nos devuelve -1
//en este caso nos devuelve 0 porque la palabra "Monitor" empieza en la posicion 0
//esto es sceptible a mayusculas y minusculas, si le pasamos "monitor" nos devuelve -1 porque no la encuentra

console.log(producto.indexOf("pulgadas")) // nos devuelve 9 porque la palabra "pulgadas" empieza en la posicion 


console.log(producto.includes("Monitor")) // nos devuelve true porque la palabra "Monitor" si esta en el string
console.log(producto.includes("monitor")) 
// nos devuelve false porque la palabra "monitor" no esta en el string, es sceptible a mayusculas y minusculas

console.log(producto.includes("Tablet")) // nos devuelve false porque la palabra "Tablet" no esta en el string
//includes es un metodo que nos devuelve true o false si la palabra que le pasamos como parametro esta o no en el string

