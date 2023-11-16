function puntacion(){
    let puntacion = prompt("coloca tu puntacion");

    if (puntacion >= 90) {
        alert("Excelente");
    } else if (puntacion >= 70) {
        alert('Buen trabajo') 
    } else {
        alert('Necesitas mejorar')
    }
}

puntacion();