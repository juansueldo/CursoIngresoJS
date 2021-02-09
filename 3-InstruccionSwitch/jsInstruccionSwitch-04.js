function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días");
			break;
		case "Febrero":
			alert("Tiene 28/29 días");
			break;
		default:
			alert("Tiene 31 días");	
	}
	
	



}//FIN DE LA FUNCIÓN