function mostrar() {
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;

	}
		/*
		case "Julio":
			alert("Abrigate que hace frio");
			break;
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Enero":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Marzo":
			alert("Falta para el invierno");
			break;
		case "Abril":
			alert("Falta para el invierno");
			break;
		case "Mayo":
			alert("Falta para el invierno");
			break;
		case "Junio":
			alert("Falta para el invierno");
			break;
	}
*/

}//FIN DE LA FUNCIÓN