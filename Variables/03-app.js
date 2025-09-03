const producto ="Tablet" // String

//La declaracion const no puede ser reasignada
// producto = "Monitor"; // Esto no se puede hacer

console.log(producto)

//producto = "Monitor" // Esto no se puede hacer el resultado --> 03-app.js:8 Uncaught TypeError: Assignment to constant variable.
console.log(producto)

//const disponible // Esto no se puede hacer el resultado --> 03-app.js:11 Uncaught SyntaxError: Missing initializer in const declaration

const disponible = true // Boolean
console.log(disponible)

