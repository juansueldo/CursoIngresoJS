/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	let contador = 0;
	let sexoValidado;

	while(contador < 1){
		sexo = prompt("Ingrese f ó m .");
		contador++;
		if(sexo == "f"){
			sexoValidado = "Femenino";
		}
		else{
			sexoValidado = "Masculino";
		}
	}
	document.getElementById("txtIdSexo").value = sexoValidado;

}//FIN DE LA FUNCIÓN