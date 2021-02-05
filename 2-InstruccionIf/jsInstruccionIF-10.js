function mostrar()
{
	let random;

	random = Math.round(Math.random()*9+1);

	if(random>=9){
		alert("Usted obtuvo un "+random+ " EXCELENTE");
	}
	else if(random>=4){
		alert("Usted obtuvo un "+random+ " APROBÓ");;
	}
	else{
		alert("Usted obtuvo un "+random+" Vamos, la proxima se puede");
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN