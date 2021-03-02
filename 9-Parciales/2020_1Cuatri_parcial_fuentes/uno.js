
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar() {
let tipo;
let precio;
let cantidad;
let marca;
let fabricante;
let acumuladorAlcohol = 0;
let acumuladorBarbijo = 0;
let acumuladorJabon = 0;
let contadorAlcohol = 0;
let contadorBarbijo = 0;
let contadorJabon = 0;
let flag = 0;
let alcoholBarato = 0;
let cantidadAlcoholBarato = 0;
let fabricanteAlcoholBarato = "No se ingresaron alcoholes";
let promedio;
let mayorTipo;

for(let i = 0; i < 5; i++){
	tipo = prompt("Ingrese el tipo (alcohol, barbijo, jabon)");
	while(isNaN(tipo) == false || tipo != "alcohol" && tipo != "barbijo" && tipo != "jabon") {
		tipo = prompt("Error. Ingrese el tipo (alcohol, barbijo, jabon)");
	}
	precio = parseFloat(prompt("Ingrese el precio(entre 100 y 300)"));
	while(isNaN(precio) || precio < 100 || precio > 300){
		precio = parseFloat(prompt("Error. Ingrese el precio(entre 100 y 300)"));
	}
	cantidad = parseInt(prompt("Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	while(isNaN(cantidad) || cantidad <= 0 || cantidad >1000){
	cantidad = parseInt(prompt("Error. Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	}
	marca = prompt("Ingrese la marca");
	fabricante = prompt("Ingrese el fabricante");

	switch(tipo){
		case "alcohol":
			acumuladorAlcohol += cantidad;
			contadorAlcohol++;

			if(flag == 0 || precio < alcoholBarato){
				alcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flag = 1;
			}
			break;

		case "barbijo":
			acumuladorBarbijo += cantidad;
			contadorBarbijo ++;
			break;

		case "jabon":
			acumuladorJabon += cantidad;
			contadorJabon ++;
			break;
	}
}
if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
	mayorTipo = "alcohol"
	promedio = acumuladorAlcohol / contadorAlcohol;
}
else if(acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
	mayorTipo = "barbijo"
	promedio = acumuladorBarbijo / contadorBarbijo;
}
else{
	mayorTipo = "jabon"
	promedio = acumuladorJabon / contadorJabon;
}
	console.log("A - Del más barato de los alcohol $" + alcoholBarato + ", la cantidad es " + cantidadAlcoholBarato + " y el fabricante es " + fabricanteAlcoholBarato );
	console.log("B - Del tipo con más unidades "+ mayorTipo + ", el promedio por compra es " + promedio);
	console.log("C - La cantidad total jabones es " + acumuladorJabon);
}
