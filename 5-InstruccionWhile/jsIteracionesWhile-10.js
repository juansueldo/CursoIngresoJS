/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let num;
	let positivo = 0;
	let negativo = 0;
	let seguir;
	let acumulador = 0;
	let contador = 0;
	let promedio;
	let promedio2;
	let diferencia;

	do {
		num = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador+num

		if (num < 0) {
			contador++
			negativo = negativo + num;
		}
		else if (num > 0) {
			contador--
			positivo = positivo + num;
		}
		seguir = prompt("Quiere continuar?");
	} while (seguir == 's');

	promedio = positivo / contador;
	promedio2 = negativo / contador;

	document.write("La suma de los numeros positivos es: "+ positivo);
	document.write("El promedio de los positivos es: "+promedio);
	document.write("La suma de los numeros negativos es: "+negativo);
	document.write("El promedio de los negativos es: "+promedio2);
	document.write("La diferencia de positivos y negativos es: "+positivos-negativos);

}//FIN DE LA FUNCIÓN