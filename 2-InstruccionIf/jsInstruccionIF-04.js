function mostrar()
{
	//tomo la edad 
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	/*Dos formas de escribir la funcion if para mostrar el mensaje si es adolescente
	El primero dice si la edad es igual o mayor a 13 y menor o igual a 17 es adolescente
	La segunda ! es negacion entonces el contenido a negar deberia ir en parentesis
	si la edad es mayor a 13 o menor a 17 es adolescente
	}*/
	/*
	if(edad >= 13 && edad <= 17 ){

		alert("Es adolescente");
		}
*/
	if ( !(edad <13 || edad > 17) ){
		alert("Es adolescente")
	}
}

//FIN DE LA FUNCIÓN