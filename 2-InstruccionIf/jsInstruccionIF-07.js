function mostrar()
{
	//tomo la edad  
	let edad;
	let soltero;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	soltero = document.getElementById("Soltero")

	if (edad < 18 && soltero){
		alert("Es muy pequeño para NO ser soltero");
	}
	

	


}//FIN DE LA FUNCIÓN