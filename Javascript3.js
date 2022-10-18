function saludo (nombre){
    console.log('Hola, cómo estas?, '+nombre);
}
saludo('Fernando');

//operadores lógicos
/* Nos ayudan a verificar si algo es verdadero o falso
    Y - O - No (negación)
    && - || - !(condicion)
    lógica:
    verdadero y verdadero -> verdadero
    falso y verdadero -> falso
    verdadero y falso -> falso
    falso y falso -> falso
    verdadero o verdadero -> verdadero
    falso o verdadero -> verdadero
    verdadero o falso -> verdadero
    falso o falso -> falso
    !(verdadero y verdadero)->falso
    !verdadero y verdadero -> falso
    !falso y verdadero -> verdadero
    */

//operadores Aritmético
/* Nos ayudan a hacer operación matemáticas
    Suma -> + -> 2+6 -> 8
    Resta -> - -> 2-6 -> -4
    División -> / -> 2/6 -> 0.333333
    Multiplicación -> * -> 2*6 -> 12
    Resto -> % -> 7%2 -> 1 
    PLUS 
    Adición(Incremento) -> i++ (suma 1 a i) i++ -> i = i + 1
    Sustracción(Decremento) -> i-- (resta 1 a i) i-- = i= i - 1 */

//Condicionales 
/*
si mañana tengo prueba -> estudio
si mañana no tengo prueba -> no estudio

si mañana sale el sol -> me pongo una polera
si mañana no sale el sol -> me pongo una polera y chaqueta

si pasa la micro -> me demoro 30 minutos
si tomo uber -> me demoro 20 minutos
si no tomo ninguno -> no llego

if - else if - else

if(mañana tengo prueba){
    estudio
}else{
    no estudio
}
if(mañana sale el sol){
    me pongo polera
}else{
    me pongo polera y chaqueta
}

if(pasa la micro){
    demoro 30 minutos
}
else if(si tomo uber){
    demoro 20 minutos
}
else if(si tomo metro){
    demoro 35 minutos
}
else if(si tomo taxi){
    demoro 25 minutos
}
else{
    no llego
}

*/

//Operadores de comparación
/* > -> mayor que -> 2>8 -> falso -> 2>2 -> falso
    < ->menor que -> 2<8 -> verdadero
    <= -> menor o igual que -> 2>=2 -> verdadero -> 2>=8 falso
    >= -> mayor o igual que -> 2<=2 -> verdadero -> 2<=8 verdadero
    == -> igual -> 2==2 -> verdadero -> 3==2 -> falso 
    != -> distinto de -> 2!=2 -> falso -> 3!=2 -> verdadero

    var num = 0;
    var letra = "0";

    num -> ser un cero -> number;
    letra -> ser un cero -> string;

    num == letra -> verdadero
    num === letra -> falso

    var obj1 = {a:1, b:2};
    var obj2 = {a:1, b:2};
    var obj3 = obj1;

    obj1 === obj1 -> verdadero;
    obj1 === obj2 -> falso;
    obj1 === obj3 -> verdadero;


    === -> Igual estricto
    !== -> Distinto estricto */

function divisible(num){
    if(num % 4 == 0||num % 9 == 0) {
        console.log('Verdadero');
    }else {
        console.log('Falso');
    }
}

function divisible2(num){
    if(num % 4 == 0) {
        console.log('Verdadero');
    }
    else if(num % 9 == 0) {
        console.log('Verdadero');
    }else {
        console.log('Falso');
    }
}

divisible(2);
divisible2(12);

//Funciones básicas de cadenas (strings)
/*
toUpperCase() -> convierte todo string a mayúsculas
toLowerCase() -> convierte todo String en minúscula
charAt() -> toma una cadena de texto y la separa en caracteres, si no le poner parámetro asume que es un 0
concat() -> une dos o más Strings
parseInt() -> toma String y los convierte a number
slice()-> corta la cadena de texto desde un inicio hasta un final

*/

var oracion = 'esta es una oracion';
var oracion2 = 'eSTa Es uNa oRaciOn';
var num = '20';
console.log(oracion.toUpperCase());
console.log(oracion2.toLowerCase());
console.log(oracion.charAt(4));
console.log(oracion2.concat(oracion));
console.log(typeof(num));
var numInt = parseInt(num);
console.log(typeof(numInt));
console.log(numInt);

//como dejar mayúscula la primera letra de una oracion

var oracion3 = "esta es otra oración";
var primeraLetra = oracion3.charAt(0);
var restoOracion = oracion3.slice(1,);
var oracion4 = primeraLetra.toUpperCase().concat(restoOracion);

var oracion5 = oracion3.charAt(0).toUpperCase().concat(oracion3.slice(1,));
console.log(oracion4);
console.log(oracion5);

var numbers = [4, 2, 5, 1, 3]; numbers.sort(function(a, b) {
    if (a < b) {
       return -1;
   }

   if (a > b) {
       return 1;
   }

   return 0;
});
console.log(numbers);
// output [1, 2, 3, 4, 5]
//o la versión simple
var numbers = [4, 2, 5, 1, 3]; numbers.sort(function(a, b) {
    console.log(b);
   return a - b;
});
console.log(numbers);
// output [1, 2, 3, 4, 5]



