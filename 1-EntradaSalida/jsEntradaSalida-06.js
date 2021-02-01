/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;
/* otra forma de convertir la cadena de string que tomamos de la caja de texto es usando la funcion
"parseInt":
numero1 = document.getElementById("txtIdNumeroUno").value;
numero1 = parseInt(numero1)

ambas formas son validas, pero en un mismo ejercicio no mezclar, solo usar una forma*/
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	
	resultado = numero1 + numero2;

	
	alert("La suma es " + resultado);

}

