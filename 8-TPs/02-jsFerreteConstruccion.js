/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let alambre;

largo = parseFloat(document.getElementById("txtIdLargo").value);
ancho = parseFloat(document.getElementById("txtIdAncho").value);

alambre = (largo + ancho)*3;

alert("Se debe comprar "+alambre+" metros de alambre");
}
function Circulo () 
{
	let largo;
    let ancho;
    let radio;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    alambre = (largo + ancho + radio)*3;

    alert("Se debe comprar "+alambre+" metros de alambre");
}
function Materiales () 
{
	
}