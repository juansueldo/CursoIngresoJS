/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar()
{

let nombre;
let tipo;
let cantidadMaterias;
let sexo;
let nota;
let edad;
let seguir;

let flag = 1;
let notaMax;
let nombreMaxNota;

let flagEdad = 1;
let joven;
let nombreJoven;

let acumM = 0;
let acumF = 0;
let acumNB = 0
let contM = 0;
let contF = 0;
let contNB = 0;
let promedioM;
let promedioF;
let promedioNB;

let flagCantidad = 1;
let edadMaxMaterias;
let nombreMaxMaterias;
let maxMaterias;

do{
	nombre = prompt("Ingrese el nombre");

	tipo = prompt("Ingrese el tipo de cursada (libre/precencial/remota)");
	while(tipo != "libre" && tipo != "precencial" && tipo != "remota"){
		tipo = prompt("Error. Ingrese el tipo de cursada (libre/precencial/remota)")
	}

	cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
		while(isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8){

			cantidadMaterias = parseInt(prompt("Error. Ingrese la cantidad de materias"));
		}

	edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad <= 0){
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}

		sexo = prompt("Ingrese el sexo (f/m/nobinario)")
		while(isNaN(sexo) == false || sexo != 'f' && sexo != 'm' & sexo != "nobinario"){
			sexo = prompt("Error. Ingrese el sexo (f/m/nobinario)")
		}

		nota = parseInt(prompt("Ingrese la nota"));
		while(isNaN(nota) || nota < 0 || nota > 10){
			nota = parseInt(prompt("Error. Ingrese la nota"));
		}

		if(sexo != 'm' && (flag || nota > notaMax)){
			notaMax = nota;
			nombreMaxNota = nombre;
			flag = 0;
		}
		if(tipo == "libre" && (flagEdad || edad < joven)){
			joven = edad;
			nombreJoven = nombre;
			flagEdad = 0;
		}
		switch(sexo){
			case 'f':
				acumF += nota;
				contF++;
				break;
			case 'm':
				acumM += nota;
				contM++;
				break;
			case "nobinario":
				acumNB += nota;
				contNB++;
				break;
		}
		if(tipo != "remota" &&(flagCantidad || cantidadMaterias > maxMaterias)){
			maxMaterias = cantidadMaterias;
			edadMaxMaterias = edad;
            nombreMaxMaterias = nombre;
			flagCantidad = 0;
		}

		seguir = prompt("Quiere ingresar un dato más?");

}while(seguir == 's')
if(contM != 0){
	promedioM = acumM / contM;
}
else{
	promedioM = "No se ingresaron varones"
}
if(contF != 0){
	promedioF = acumF / contF;
}
else{
	promedioF = "No se ingresaron mujeres"
}
if(contNB != 0){
	promedioNB = acumNB /contNB;
}
else{
	promedioNB = "No se ingresaron no binarios "
}


console.log("A - El nombre del mejor promedio no masculino es " +nombreMaxNota +" y la nota fue "+ notaMax);
console.log("B - El nombre del mas joven de los alumnos entre los que la dan libre "+nombreJoven)
console.log("C - El promedio de nota de varones es "+promedioM + ", de mujeres es "+promedioF+ " y no binarios "+promedioNB);
console.log("D - La edad "+ edadMaxMaterias + " y nombre " +nombreMaxMaterias+ " del que cursa mas materias que no sean en forma remota")
/*a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
}



