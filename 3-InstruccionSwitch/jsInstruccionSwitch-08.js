function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
		break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN