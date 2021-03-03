/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad ,
edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
//variables para el ingreso de datos y contador de repeticiones mientras el usuario quiera
let nombre;
let nacionalidad;
let edad;
let sexo;
let estadoCivil;
let temperatura;
let seguir;

//punto a
let flagTempMax = 1;
let tempMax;
let nacionalidadTempMax;

//punto b,c,d y e
let contadorMayoresSolteros = 0;
let contadorMSV = 0;
let contadorTempMaxTerceraEdad = 0;
let contadorMC = 0;
let acumuladorEdadCasadas = 0;
let promedio;

do{
	nombre = prompt("Ingrese el nombre");
	nacionalidad = prompt("Ingrese la nacionalidad");
	edad = parseInt(prompt("Ingrese la edad"));
	while(isNaN(edad) || edad < 0){
		edad = parseInt(prompt("Error. Ingrese la edad"));
	}
	sexo = prompt("Ingrese el sexo f/m");
	while(sexo != 'f' && sexo != 'm'){
		sexo = prompt("Error. Ingrese el sexo f/m");
	}
	estadoCivil = prompt("Ingrese el estado civil soltero/viudo/casado");
	while(estadoCivil != "soltero" && estadoCivil != "viudo" && estadoCivil != "casado"){
		estadoCivil = prompt("Error. Ingrese el estado civil soltero/viudo/casado");
	}
	temperatura = parseFloat(prompt("Ingrese la temperatura"));

	if(flagTempMax || temperatura > tempMax){
		tempMax = temperatura;
		nacionalidadTempMax = nacionalidad;
		flagTempMax = 0;
	}
	if(edad > 17 && estadoCivil == "soltero"){
		contadorMayoresSolteros++;
	}
	if(sexo == 'f'&& estadoCivil != "casado"){
		contadorMSV++;
	}
	if(sexo == 'f' && estadoCivil == "casado"){
		acumuladorEdadCasadas += edad;
		contadorMC++;
	}
	if(edad > 60 && temperatura > 38){
		contadorTempMaxTerceraEdad++;
	}
	seguir = prompt("Desea ingresar un pasajero más?");
}while(seguir == "si");

console.log("A - La mayor temperatura es "+ tempMax +"°C y la nacionalidad de la persona es " +nacionalidadTempMax);
console.log("B - La cantidad de mayores de edad solteros es "+ contadorMayoresSolteros);
console.log("C - La cantidad de mujeres solteras o viudas es " + contadorMSV);
console.log("D -La canitadad de personas mayores a 60 y con temperatura mayor a 38°C es "+ contadorTempMaxTerceraEdad);
if(acumuladorEdadCasadas != 0){
	promedio = acumuladorEdadCasadas / contadorMC;
	console.log("D- El promedio de edad entre las mujeres casadas es "+ promedio);
}
else{
	console.log("D - No se registraron mujeres casadas")
}

}
