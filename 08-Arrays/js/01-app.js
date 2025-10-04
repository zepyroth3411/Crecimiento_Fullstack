const numeros = [10, 20, 30, 40, 50]; //Forma regular de crear un arreglo
const meses = new Array('Enero', 'Febrero', 'Marzo'); //Forma con el constructor mas antigua


console.log(meses); //Imprime todo el arreglo
console.log(numeros[1]); //Imprime el valor en la posicion 1 del arreglo
console.log(meses.length); //Imprime la cantidad de elementos que tiene el arreglo

//Arreglo de varios tipos de datos

const deTodo = ['Hola', 10, true, null, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3]];
console.log(deTodo);
console.log(deTodo[4].nombre); //Accediendo a la propiedad nombre del objeto que esta en la posicion 4 del arreglo 