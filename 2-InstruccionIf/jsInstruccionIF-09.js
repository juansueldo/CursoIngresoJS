function mostrar()
{
	//Genero el número RANDOM entre 1 y 10

	let minimo = 1;
	let maximo = 10;
	let aleatorio; 

	aleatorio = Math.round(Math.random()*(maximo - minimo) + minimo);

	alert(aleatorio);	

}//FIN DE LA FUNCIÓN