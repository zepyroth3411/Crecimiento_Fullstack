// const producto = {
//     nombre: "Monitor 20 pulgadas",
//     precio: 300,
//     disponible: true,
//     mostrarInfo: function() {
//         console.log(`El producto: ${producto.nombre} tiene un precio de: $${producto.precio}`);
//     }
// } 

// producto.mostrarInfo();



const carrito = {
    productos: [],
    precios: [],
    agregar(producto, precio) {
        this.productos.push(producto);
        this.precios.push(precio);
        console.log(`${producto} agregado al carrito`);
    },
    eliminar(producto) {
        const index = this.productos.indexOf(producto);
        if (index > -1) { // Si el producto existe en el carrito
            this.productos.splice(index, 1);
            this.precios.splice(index, 1);
            console.log(`${producto} eliminado del carrito`);
        }else {
            console.log(`${producto} no encontrado en el carrito`); 
        }
    },
    totalprecio() {
        let total = 0;
        for (let i = 0; i < this.precios.length; i++) {
            total += this.precios[i];
        }
        console.log(`El total del carrito es: $${total}`);
    },
    mostrar() {
        console.log("Carrito:", this.productos);
    }
    
};


carrito.agregar("Laptop", 800);
carrito.agregar("Celular", 400);
carrito.mostrar();
carrito.totalprecio();
console.log("--------------------------");
carrito.eliminar("Celular");
console.log("--------------------------");
carrito.mostrar();
carrito.totalprecio();