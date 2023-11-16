/*
Problema 1: Supongamos que tienes una variable llamada edad que almacena la edad de una persona. Escribe un programa en JavaScript que imprima "Eres mayor de edad" si la edad es igual o mayor que 18, o "Eres menor de edad" si la edad es menor de 18. Utiliza una declaración "if" para resolver este problema.

Problema 2: Crea una variable llamada temperatura que almacene la temperatura actual en grados Celsius. Escribe un programa en JavaScript que muestre un mensaje de acuerdo a la temperatura:

Si la temperatura es menor a 0, imprime "Hace frío".
Si la temperatura está entre 0 y 25, imprime "La temperatura es agradable".
Si la temperatura es mayor o igual a 25, imprime "Hace calor". Utiliza declaraciones "if-else" para resolver este problema.

Problema 3: Crea una variable llamada nombreUsuario y otra llamada contraseña que almacene un nombre de usuario y una contraseña, respectivamente. Escribe un programa en JavaScript que verifique si el nombre de usuario es "usuario123" y la contraseña es "secreto". Si ambos son correctos, imprime "Acceso concedido"; de lo contrario, imprime "Acceso denegado". Utiliza una declaración "if" para realizar la verificación.

Problema 4: Crea una variable llamada numero que almacene un número. Escribe un programa en JavaScript que determine si el número es positivo, negativo o igual a cero. Imprime el resultado en la consola. Utiliza una declaración "if-else if-else" para resolver este problema.

Problema 5: Supongamos que tienes una variable puntuación que almacena la puntuación de un juego. Escribe un programa en JavaScript que determine el rango de la puntuación:

Si la puntuación es igual o mayor a 90, imprime "Excelente".
Si la puntuación está entre 70 y 89, imprime "Buen trabajo".
Si la puntuación es menor a 70, imprime "Necesitas mejorar". Utiliza declaraciones "if-else" para resolver este problema.


*/


let edad = 18;

if (edad >= 18) {
    console.log('ústed es mayor de edad');
}
else {
    console.log('usted no es mayor de edad');
}


let temperatura = 20;

if (temperatura < 0){
    console.log("Hace frio: " + temperatura + "°C");
} else if (temperatura >= 0 && temperatura < 25) {
    console.log("La temperatura es agradable: " + temperatura + "°C" );
} else 
    console.log("Hace calor");



let nombreUsuario = "usuario123";
let contraseña = "secreto";

if (nombreUsuario === "usuario123" && contraseña === "secreto") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegaddo");
}

let numero = 2;

    if (numero > 0 ) {
    console.log("número es positivo"); 
    } else if (numero < 0) {
    console.log("El numero es negativo");
        } else {
        console.log("El numero es igual a cero");
    }


    let puntacion = 76;

    if (puntacion >= 90) {

        console.log("Excelente");

    } else if (puntacion >= 70) {
        console.log('Buen trabajo') 

    } else {
        console.log('Necesitas mejorar')

    }

