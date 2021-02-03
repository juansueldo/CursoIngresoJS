function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//Luego de if colocamos entre parentesis la codicion, luego de cerrar parentesis
	//abrimos un corchete para ingresar lo que nos debe imprimir en pantalla
	//finalizamos cerrando los correchetes
	if(edad==15){
	
	alert("La niña bonita");
	}

	//Podemos imprimir en pantalla luego del if el final de la función
	alert("Fin de la función");

//FIN DE LA FUNCIÓN
}