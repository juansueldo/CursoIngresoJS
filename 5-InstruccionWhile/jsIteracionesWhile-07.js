/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let num = 0;
  let seguir;
  let acumulador =0; //acá se van acumulando y sumando los nros ingresados
  let contador = 0; // se cuentan las cantidades para el promedio

  do{
    num = parseInt(prompt("Ingrese un numero."));
    seguir = prompt("Quiere ingresar otro numero?");
    acumulador = acumulador + num;
    contador++;

  }while (seguir == 's');

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador/contador;
 /* let seguir = 's';

  while (seguir == 's') {
    alert("Hola");
    seguir = prompt("Quiere continuar?");
  }
  alert("Entonces ya terminamos.");*/
} //FIN DE LA FUNCIÓN
