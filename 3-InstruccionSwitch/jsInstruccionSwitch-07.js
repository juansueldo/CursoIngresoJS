function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("Se encuentra al Sur");
		break;
		case "Mar del plata":
			alert("Se encuentra al Este");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte");
			break;
	}


}//FIN DE LA FUNCIÓN