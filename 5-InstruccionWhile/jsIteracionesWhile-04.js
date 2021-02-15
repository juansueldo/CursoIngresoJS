/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num = 0;

	num = parseInt(prompt("Ingrese un valor"));
	while (num <= 9) {
		num++;
	}
	document.getElementById("txtIdNumero").value = num;

}//FIN DE LA FUNCIÓN