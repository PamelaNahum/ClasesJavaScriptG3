// Qué es un bucle? -> algo que se repite.
/*
    bucles:
    for -> for - forEach
    while -> while - do While

    for(var i = 0; i < 10; i++){
        proceso
    }

    var matriz = [1,5,8,7,4,6];
    matriz.forEach(x => proceso)
*/
var matriz = [1,5,8,7,4,6];
    //matriz.forEach(numero=>console.log(numero+2));
//console.log('--------------------------')
for(var i = 0; i < matriz.length; i++){
        //console.log(matriz[i]+2);
    }
var matrizPrecios = [1000,500,800,7000,400,600];
var nuevosPrecios =[];
matrizPrecios.forEach(x=>nuevosPrecios.push(x*0.85));
//console.log(nuevosPrecios);

/*Ciclos While
    while(condicion){

    }
    
    do{

    }while(condicion);
*/



/*while(x<=3){
    console.log('si');
    x--;
    console.log(x);
}*/
var x = 4;
do{
    x--;//0
    console.log(x)
    if(x==0){
        break;
    }
}while(x<=3);

//Refactorizar-> optimizar el código
/*
    Caracteristicas
    1.- Fácil de mantener(escalable)-> puede crecer y mejorar sin problemas con el tiempo
    2.- Buena legibilidad 
    3.- Mejora la eficacia
*/