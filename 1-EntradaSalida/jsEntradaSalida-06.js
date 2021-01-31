/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;


	numero1 = document.getElementsByClassName("txtIdNumeroUno").value;
	numero2 = document.getElementsByName("txtIdNumeroDos").value;

	let resultado;
	resultado = numero1 + numero2;

	
	alert("La suma es " + resultado);

}

