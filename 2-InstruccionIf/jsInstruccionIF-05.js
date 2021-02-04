function mostrar() {
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// Condicion que es verdadera para los valores de edad
	// que estan por debajo o por encima del rango [13,17]
	/*	
	if(edad < 13 || edad > 17){
	
			alert("No es adolescente");
			}
			*/
	if (!(edad >= 13 && edad <= 17)) {
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN