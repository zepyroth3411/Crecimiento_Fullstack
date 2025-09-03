const producto = "        Monitor 20 pulgadas        "


//console.log(producto);
console.log(producto.length);

// Eliminar espacios al inicio y al final
//console.log(producto.trimStart()); // Elimina los espacios al inicio
//console.log(producto.trimEnd());    // Elimina los espacios al final
//console.log(producto.trim());       // Elimina los espacios al inicio y al final

//colocar un metedo encadenado --> chaining
console.log(producto.trimStart().trimEnd());
console.log(producto.trim().length);
console.log(producto)