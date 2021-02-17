/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas 
y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
	let acumuladorEdad;
 	let sexo;
	 let acumuladorSexo;
 	let estado;
	 let acumuladorEstado;
	let sueldo;
	let acumuladorSueldo;
	let legajo;
	let acumuladorLegajo;
	let nacionalidad;
	let acumuladorNacionalidad;
	let seguir;

	 do{
		edad = parseInt(prompt("Edad, entre 18 y 90 años inclusive"));
		if(edad < 18 || edad > 90){
			alert("La edad no es válida")
		}
		sexo = prompt(`Sexo, M para masculino y F para femenino`);
		if(sexo != "M" || sexo != "F"){
			alert("No es un sexo válido")
		}
		estado = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
		sueldo = parseInt(prompt("Sueldo Bruto"));
		legajo = parseInt(prompt("Ingrese el legajo, numérico de 4 cifras"));
		if(legajo >= 10000){
			alert("No es un numero de legajo válido")
		}
		nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

		acumuladorEdad = acumuladorEdad + edad;
		acumuladorSexo = acumuladorSexo + sexo;
		acumuladorEstado = acumuladorEstado + estado;
		acumuladorSueldo = acumuladorSueldo + sueldo;
		acumuladorLegajo = acumuladorLegajo + legajo;
		acumuladorNacionalidad = acumuladorNacionalidad + nacionalidad;
   

		seguir = prompt("Desea ingresar algun dato más?");
	 }while(seguir == "Si");

	 document.getElementById("txtIdEdad").value = acumuladorEdad;
	 document.getElementById("txtIdSexo").value = acumuladorSexo;
	 document.getElementById("txtIdEstadoCivil").value = acumuladorEstado;
	 document.getElementById("txtIdSueldo").value = acumuladorSueldo;
	 document.getElementById("txtIdLegajo").value = acumuladorLegajo;
	 document.getElementById("txtIdNacionalidad").value = acumuladorNacionalidad;
}
