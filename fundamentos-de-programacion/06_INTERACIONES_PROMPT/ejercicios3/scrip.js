function Acceso(){

  let nombreUsuario = prompt("Por favor ingrese el nombre de usuario")
  let contraseña = prompt("Por favor ingrese contraseña")
  
  if (nombreUsuario === "usuario123" && contraseña === "secreto") {
    alert("Acceso concedido");
  } else {
    alert("Acceso denegaddo");
  }
}

Acceso();