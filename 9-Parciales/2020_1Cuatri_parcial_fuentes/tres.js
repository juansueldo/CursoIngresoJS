/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let contadorViudosMayores = 0;
	let contadorViudosHombres = 0;
	let contadorSolterosHombres = 0;
	let acumuladorSolteros = 0;
	let temperaturaMax;
	let nombreTemperaturaMax;
	let contadorTerceraEdad = 0;
	let flag = 0;
	let promedio;
	let seguir;

	do{
		nombre = prompt("Ingrese el nombre");
		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad <= 0){
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}
		sexo = prompt("Ingrese el sexo (f o m)");
		while(isNaN(sexo) == false || sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error. Ingrese el sexo (f o m)");
		}
		estadoCivil = prompt("Ingrese el estado civil (soltero, casado, viudo)");
		while(isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error. Ingrese el estado civil (soltero, casado, viudo)");
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(isNaN(temperatura) || temperatura < 35){
			temperatura = parseFloat(prompt("Error. Ingrese la temperatura"));
		}
		if(flag == 0 || temperatura > temperaturaMax){
			temperaturaMax = temperatura;
			nombreTemperaturaMax = nombre;
			flag = 1;
		}
		switch(estadoCivil){
			case "soltero":
				if(sexo == 'm'){
					acumuladorSolteros += edad;
					contadorSolterosHombres++;
				}
				break;
			case "viudo":
				if(edad > 18){
					contadorViudosMayores++;
				}
				if(sexo == 'm'){
					contadorViudosHombres++;
				}
				break;
			}
			if(edad > 60 && temperatura > 38){
				contadorTerceraEdad++;
			}
		seguir = prompt("Desea ingresesar un dato más?")
		}while(seguir == "si");
	if(acumuladorSolteros > 0){
	promedio = acumuladorSolteros / contadorSolterosHombres;
	}
	else{
		promedio = `"No se ingresaron hombres solteros"`
	}

	console.log("La mayor temperatura es "+temperaturaMax+"°C y el nombre de la persona es "+nombreTemperaturaMax);
	console.log("La cantidad de mayores de edad viudos es "+contadorViudosMayores);
	console.log("La cantidad de hombres que hay solteros o viudos es "+ (contadorViudosHombres+contadorSolterosHombres));
	console.log("La cantidad de personas de la tercera edad con temperatura mayor a 38°C es "+ contadorTerceraEdad);
	console.log("El promedio de edad entre solteros hombres es "+ promedio)
/*a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
}
