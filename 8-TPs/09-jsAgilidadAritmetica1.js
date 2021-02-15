/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
let num1;
let num2;
let operador;

num1 = Math.round(Math.random()*9+1);
num2 = Math.round(Math.random()*9+1);
operador = Math.round(Math.random()*3+1);
if(operador == 1){
    document.getElementById("txtIdOperador").value = "+";
}
else if(operador == 2){
    document.getElementById("txtIdOperador").value = "-";
}
else if(operador == 3){
    document.getElementById("txtIdOperador").value = "*";
}
else{
    document.getElementById("txtIdOperador").value = "/";
}


document.getElementById("txtIdPrimerNumero").value = num1;
document.getElementById("txtIdSegundoNumero").value = num2;

alert(num1+operador+num2);
	
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
