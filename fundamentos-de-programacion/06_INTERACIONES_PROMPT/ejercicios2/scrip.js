function temp(){
    let temperatura = prompt();

    if (temperatura < 0) {
        alert("Hace frio");
    } else if (temperatura >= 0 && temperatura < 25) {
        alert("La temperatura es agradable");
    } else 
        alert("Hace calor");
}

temp();