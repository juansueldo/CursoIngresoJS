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
  /*let acumulador = 0;
  let contador = 0;

  while(contador < 5){
    acumulador += parseInt(prompt("Ingrese un número: "));
    acumulador +=;

    contador++;
  }
  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / contador;*/

} //FIN DE LA FUNCIÓN
