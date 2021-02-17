/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar() {
    let num1;
    let num2;
    let operador;
    let resultado;
    let resultadoingresado;

    num1 = Math.round(Math.random() * 9 + 1);
    num2 = Math.round(Math.random() * 9 + 1);
    operador = Math.round(Math.random() * 3 + 1);
    switch (operador) {
        case 1:
            
            break;
        case 2:
            num1 - num2;
            break;
        case 3:
            num1 * num2;
            break;
        case 4:
            num1 / num2;
            break;
    }

    document.getElementById("txtIdPrimerNumero").value = num1;
    document.getElementById("txtIdSegundoNumero").value = num2;
    document.getElementById("txtIdOperador").value = operador;

    resultado = parseInt(num1 + operador + num2);
    console.log(resultado);
    resultadoingresado = document.getElementById("txtIdRespuesta").value;


}//FIN DE LA FUNCIÓN
function Responder() {
    if (resultadoingresado == resultado) {
        alert("Felicidades");
    }
    else {
        alert("No es el resultado");
    }

}//FIN DE LA FUNCIÓN
