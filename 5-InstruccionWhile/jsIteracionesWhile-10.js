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
	/*	let num;
		let seguir;
		let contadorPositivos = 0;
		let contadorNegativos = 0;
		let contadorCeros = 0;
		let contadorPares = 0;
		let acumuladorPositivos = 0;
		let acumuladorNegativos = 0;
		let promedioPositivos = 0;
		let promedioNegativos = 0;
		let diferencia;
	
		do {
			num = parseInt(prompt("Ingrese un número"));
	
			if (num < 0) {
				acumuladorNegativos += num;
				contadorNegativos++;
			}
			else if (num > 0) {
				acumuladorPositivos += num;
				contadorPositivos++;
			}
			else {
				contadorCeros++
			}
			if (num % 2 == 0) {
				contadorPares++;
			}
			seguir = prompt("Quiere continuar?");
		} while (seguir == 's');
		if (contadorPositivos != 0) {
			promedioPositivos = acumuladorPositivos / contadorPositivos;
		}
		if (contadorNegativos != 0) {
			promedioNegativos = acumuladorNegativos / contadorNegativos;
		}
		diferencia = contadorPositivos - contadorNegativos;
	
	
		console.log("La suma de los numeros negativos es: " + acumuladorNegativos);
		console.log("La suma de los numeros positivos es: " + acumuladorPositivos);
		console.log("La cantidad de positivos es: " + contadorPositivos);
		console.log("La cantidad de negativos es: " + contadorNegativos);
		console.log("La cantidad de ceros es: " + contadorCeros);
		console.log("La cantidad de pares es: " + contadorPares);
		console.log("El promedio de los positivos es: " + promedioPositivos);
		console.log("El promedio de los negativos es: " + promedioNegativos);
		console.log("La diferencia de positivos y negativos es: " + diferencia);*/

	/*1-Suma de los negativos.
	2-Suma de los positivos.
	3-Cantidad de positivos.
	4-Cantidad de negativos.
	5-Cantidad de ceros.
	6-Cantidad de números pares.
	7-Promedio de positivos.
	8-Promedios de negativos.
	9-Diferencia entre positivos y negativos, (positvos-negativos). */

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

	let num;
	let contadorNegativos = 0;
	let contadorPositivos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorNegativos = 0;
	let acumuladorPositivos = 0;
	let promedioPositivos;
	let promedioNegativos;
	let seguir;
	let diferencia;

	do {
		num = parseInt(prompt("Ingrese un numero"));

		if (num > 0) {
			acumuladorPositivos = acumuladorPositivos + num;
			contadorPositivos++;
		}
		else if (num < 0) {
			acumuladorNegativos = acumuladorNegativos + num;
			contadorNegativos++;
		}
		else {
			contadorCeros++;
		}

		if (num % 2 == 0) {
			contadorPares++;
		}

		seguir = prompt("Quiere ingresar otro número?");
	} while (seguir == "si");
	if (contadorPositivos != 0) {
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;

	document.write("La suma de negativos es: " + acumuladorNegativos);
	document.write("La suma de positivos es: " + acumuladorPositivos);
	document.write("La cantidad de positivos es: " + contadorPositivos);
	document.write("La cantidad de negativos es: " + contadorPositivos);
	document.write("La cantidad de ceros es: " + contadorCeros);
	document.write("La cantidad de números pares es: " + contadorPares);
	document.write("El promedio de positivos es: " + promedioPositivos);
	document.write("El promedio de negativos es: " + promedioNegativos);
	document.write("La diferencia de positivos y negativos es: " + diferencia);


}//FIN DE LA FUNCIÓN