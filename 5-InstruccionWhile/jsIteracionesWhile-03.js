/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar() {
  /*let clave;
  let flag = 0;

  do {
    if (flag == 0) {
      clave = prompt("Ingrese la clave");
      flag = 1;
    }
    else {
      clave = prompt("Clave inválida. Ingrese nuevamente la clave");
    }
  } while (clave != "utn750");
  alert("Clave correcta.");
*/

    let clave;
    clave = prompt("Ingrese el número clave.");
    while (clave != "utn750") {
      clave = prompt("Clave inválida. Ingrese nuevamente la clave");
    }
    alert("Clave válida.");
}//FIN DE LA FUNCIÓN
