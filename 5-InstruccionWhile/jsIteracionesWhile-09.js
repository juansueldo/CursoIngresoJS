/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables 
	/*let num;
	let max;
	let min;
	let seguir;
	let flag = 0;

	do {
		num = parseInt(prompt("Ingrese un número"));

		if (flag == 0) {
			max = num;
			min = num;
			flag = 1;
		}
		if (num > max) {
			max = num;
		}
		else if (num < min) {
			min = num;
		}
		seguir = prompt("Quiere ingresar otro número?");
	} while (seguir == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}/*function mostrar(){
let num;
	let max;
	let min;
	let seguir;
	let flag = 0;

	do {
		num = parseInt(prompt("Ingrese un número"));

		if (flag == 0 || num > max) {
			max = num;
		}
		if (flag == 0 || num < min) {
			min = num;
		    flag = 1;
		}
		seguir = prompt("Quiere ingresar otro número?");
	} while (seguir == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}
}*///Al presionar el botón pedir  números  hasta que el usuario quiera,
//mostrar el número máximo y el número mínimo ingresado.*/

let num;
let max;
let min;
let seguir;
let flag = 0;

do{
	num = parseInt(prompt("Ingrese un número"));
	if(flag == 0 || num > 0){
		max = num;
	}
	if(flag == 0 || num < 0){
		min = num;
		flag = 1;
	}
	seguir = prompt("Desea ingresar otro número?");
}while(seguir == "si");

document.getElementById("txtIdMaximo").value = max;
document.getElementById("txtIdMinimo").value = min;
}
