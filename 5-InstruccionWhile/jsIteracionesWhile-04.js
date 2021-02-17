/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num;

	num = parseInt(prompt("Ingrese un valor"));

	while (num < 0 || num > 9 ) {
		num = parseInt(prompt("No es un valor válido, ingrese nuevamente un valor"));
	
	}
	alert("Es un valor válido");
	document.getElementById("txtIdNumero").value = num;

}//FIN DE LA FUNCIÓN