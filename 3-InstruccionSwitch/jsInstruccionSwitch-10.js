/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/
function mostrar()
{
	var estacionIngresada;
	var localidad;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno":
			if(localidad == "Bariloche"){
			alert("Se viaja");
		}
		else{
			alert("No se viaja");
		}
		break;
		case "Verano":
			if(localidad == "Mar del plata" || localidad == "Cataratas"){
				alert("Se viaja")
			}
			else{
				alert("No se viaja");
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			if(localidad == "Bariloche"){
				alert("No se viaja");
			}
			else{
				alert("Se viaja");
			}
			break;
			
	}


}//FIN DE LA FUNCIÓN