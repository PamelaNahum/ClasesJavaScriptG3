//Hacer un detector de numeros primos con Break hasta el número 23

function esPrimo(x){
    if(x<=1){
        return false;
    }else{
        for(var i = 2; i <= x-1; i++){
            if(x % i == 0){
                return false;
            }
        }
        return true;
    }
}
//opción 1 -> for

//se le asigna contador i = 1, mientrs que i sea menor o igual que 23,
//por cada vuelta que realice se le suma 1 al contador
for(var i = 1; i<=23; i++){
    //Se llama a la funcion con el contador
    //se verifica si el número del contador es primo 
    //si es primo se muestra en consola 'número, Es primo' (cont + ', Es primo')
    //si no es primo, se muestra en consola 'número, No es primo' (cont + ', No es primo')
    if(esPrimo(i)){
        console.log(i + ', Es primo');
    }else{
        console.log(i + ', No es primo');
    }
}

//opción 2 -> while

//declaramos una variable contador
var cont = 1;

//declaramos un while true (while infinito, hasta que yo diga lo contrario)
//mientras sea verdadero hacer:
// al darle una condición SIEMPRE verdadera al while, este iterará
// hasta que se encuentre con un break
while(true){
    //Se llama a la funcion con el contador
    //se verifica si el número del contador es primo 
    //si es primo se muestra en consola 'número, Es primo' (cont + ', Es primo')
    //si no es primo, se muestra en consola 'número, No es primo' (cont + ', No es primo')
    if(esPrimo(cont)){
        console.log(cont + ', Es primo');
    }else{
        console.log(cont + ', No es primo');
    }
    //Si el contador es igual a 23 se acabe el while
    if(cont==23){
        break;
    }
    //al contador se le suma 1
    cont++;
}

//ejercicios sin comentarios

for(var i = 1; i<=23; i++){
    if(esPrimo(i)){
        console.log(i + ', Es primo');
    }else{
        console.log(i + ', No es primo');
    }
}


var cont = 1;

while(true){
    if(esPrimo(cont)){
        console.log(cont + ', Es primo');
    }else{
        console.log(cont + ', No es primo');
    }
    if(cont==23){
        break;
    }
    cont++;
}
