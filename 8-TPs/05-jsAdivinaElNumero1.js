/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let random = Math.round(Math.random()*99 + 1);
let contador = 1;

function comenzar()
{
alert("Se genero el numero random ");
}

function verificar()
{
  let numeroIngresado;
  
  let falta;
  let sobro;

  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  
  falta = random-numeroIngresado;
  sobro = numeroIngresado-random;
  
  if(random == numeroIngresado){
    alert("Usted es un ganador y en solo "+ contador +" intentos");
  }
  else if(random < numeroIngresado){
    alert("Siga intentando. Paso por "+sobro+" para llegar al número secreto");
  }
	else{
    alert("Siga intentando. Faltaron "+falta+" para llegar al número secreto");
  }
  document.getElementById("txtIdIntentos").value = contador++;
}