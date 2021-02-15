/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador =0;
	let numero =0;
	let positivo =0;
	let negativo =1;
	let acumulador =0;
	let seguir;
	
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador=+numero
		contador++
		if(numero>=0){
			positivo = positivo + numero
		}
		else{
			negativo = negativo * numero
		}
		seguir = prompt("Quiere continuar ingresando números?");
		
	}while(seguir == 's')
	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;
	
}//FIN DE LA FUNCIÓN