"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"
    },
    fabricacion: {
        pais: "China"
    }   

}
producto.fabricacion.pais = "España";
console.log(producto);  
Object.freeze(producto);

producto.disponible = 1;
console.log(producto);

const x =25;
console.log(x);


