/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let precio = 600;
	let contadorViudosMayores = 0;
	let flagMujer = 1;
	let jovenMujer;
	let nombreJovenMujer;
	let edadJovenMujer;
	let seguir;

	do{
		nombre = prompt("Ingrese el nombre");
		estadoCivil = prompt("Ingrese el estado civil (soltero, casado, viudo)");
		while(isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error. Ingrese el estado civil (soltero, casado, viudo)");
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad < 18){
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}
		sexo = prompt("Ingrese el sexo (f o m)").toLocaleLowerCase();
		while(isNaN(sexo) == false || sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Ingrese el sexo (f o m)").toLocaleLowerCase();
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(isNaN(temperatura) || temperatura < 35){
			temperatura = parseFloat(prompt("Error. Ingrese la temperatura"));
		}
		//punto a
		if(estadoCivil == "viudo" && edad > 60){
			contadorViudosMayores++;
		}
		if(sexo == 'f' && estadoCivil == "soltera" && (flagMujer || edad < jovenMujer)){
			jovenMujer = edad;
			nombreJovenMujer = nombre;
			edadJovenMujer = edad;
		}

}


