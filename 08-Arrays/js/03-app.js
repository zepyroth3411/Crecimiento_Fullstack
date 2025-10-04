const numeros2 = [[10, 20, 30], [40, 50, 60],[70,80,90]];
let sumasub = 0;
//cuanto mide un array
//console.log(numeros2.length);
//iterar sobre un array
for(let i = 0; i < numeros2.length; i++){
    console.log(numeros2[i]); //imprime cada array interno
    sumasub=0;
    for(let j =0; j < numeros2[i].length; j++){
        //console.log(numeros2[i][j]); //imprime cada elemento de los arrays internos
        sumasub=sumasub + numeros2[i][j];
        
    }
    console.log(sumasub);
}   