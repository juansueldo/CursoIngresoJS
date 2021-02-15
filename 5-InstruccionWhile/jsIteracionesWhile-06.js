function mostrar() {
  let contador = 1;
  let acumulador = 0;
  let numeroIngresado;
  let promedio;

  while (contador <= 5) {
    numeroIngresado = parseInt(prompt("Ingrese un número: "));

    acumulador = acumulador + numeroIngresado;

    contador++;
  }

  promedio = acumulador / 5;

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = promedio
} //FIN DE LA FUNCIÓN
