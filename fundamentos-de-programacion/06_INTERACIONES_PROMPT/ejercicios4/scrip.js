    function numero(){

        let numero = prompt("ingrese numero");
        if (numero < 0 ) {
        alert("es positivo" + numero + "es negativo"); 
        } else if (numero === 0) {
        alert("El numero es igual a 0");
        } else {
            alert("El numero " + numero + "es positivo");
        }
    }
    
numero();

