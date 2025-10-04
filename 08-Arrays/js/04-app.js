const numeros2 = [[10, 20, 30], [40, 50, 60],[70,80,90]];

numeros2[0][0]=1000; //cambia el valor 10 por 1000
console.log(numeros2);
numeros2[3]=[100,200,300]; //agrega un nuevo array al final
console.log(numeros2);

numeros2[3][5]="Holis"; //agrega un nuevo elemento al final del array 3
console.log(numeros2);