/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let num;
	let acumulador = 0;
	let contador = 1;


	while (contador <= 2) {
		num = parseInt(prompt("Ingrese un valor"));
		contador++;
		if (num >= 0 || num <= 9) {
			acumulador = acumulador + num;
		}
	}
	document.getElementById("txtIdNumero").value = acumulador;

}//FIN DE LA FUNCIÓN