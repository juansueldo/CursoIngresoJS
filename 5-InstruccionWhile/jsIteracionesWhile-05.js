/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo;

	sexo = prompt("Ingrese F para femenino o M para masculino")
	while (!(sexo == "M" || sexo == "F")) {
		sexo = prompt("El sexo no es válido, ingrese nuevamente")
	}
	if (sexo == "M") {
		sexo = "Masculino";
	}
	else{
		sexo = "Femenino";
	}
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN