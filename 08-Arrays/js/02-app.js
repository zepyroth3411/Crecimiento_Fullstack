const numeros = [10, 20, 30, 40, 50]; //Forma regular de crear un arreglo

console.log(numeros); //Imprime todo el arreglo


//acceder a un elemento del arreglo
console.log(numeros[0]); //Imprime el primer elemento del arreglo
console.log(numeros[20]); //Imprime undefined porque no existe el elemento 20 en el arreglo

const numeros2 = [[10, 20, 30], [40, 50, 60],[70,80,90]]; //Arreglo de arreglos (matriz)
console.table(numeros2); //Imprime la matriz en forma de 
console.log(numeros2[1][2]); //Accede al elemento 60 (fila 1, columna 2)

sumita=numeros2[0][1]+numeros2[2][1]; //Suma el elemento 20 y 80
console.log(typeof sumita); //Imprime la suma (100)