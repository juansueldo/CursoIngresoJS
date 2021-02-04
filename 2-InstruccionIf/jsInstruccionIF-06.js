function mostrar()
{
	//tomo la edad  
	let edad; //Primero declaré la variable edad
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	/*Le asignamos el valor a edad, la cual con el 
	comando parseInt la convertimos en nro entero,
	con document.getElementById la traemos del html y con value
	le damos valor */
/*
	if (edad >= 18){
		alert("Es mayor de edad");
	}
	if (edad < 13){
		alert("Es un niño");
	}
	if(edad >= 13 && edad <= 17){
		alert("Es adolescente");
*/
		/*es && y no || ya que el rango es entre 13 y 17*/
/*	
if (edad < 13){
alert("Es un niño");
}
 else{
   if(edad >=13 && edad <=17){
	   alert("Es adolescente");
   }
	   else{
		   alert("Es adulto")
	   }
   }
/* se puede simplificar de la siguiente manera*/
if ( edad < 13){
	alert("Es un niño");
}
else if(edad >= 13 && edad <= 17){
	alert("Es un adolescente");
}
else if(edad >= 18){
	alert("Es un adulto")
}


}//FIN DE LA FUNCIÓN