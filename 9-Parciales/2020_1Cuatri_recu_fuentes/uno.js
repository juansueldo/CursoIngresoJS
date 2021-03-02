
/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{
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
let contadorJabon = 0
let flag = 0;
let jabonCaro = 0;
let cantidadJabonCaro = 0;
let fabricanteJabonCaro = "NO SE INGRESARON JABONES";
let promedio;
let tipoMaxCantidad;

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
			break;
		case "barbijo":
			acumuladorBarbijo += cantidad;
			contadorBarbijo++;
			break;
		case "jabon":
			acumuladorJabon += cantidad;
			contadorJabon++;

			if(flag || precio > jabonCaro){
				jabonCaro = precio;
				cantidadJabonCaro = cantidad;
				fabricanteJabonCaro = fabricante;
				flag = 1;
			}
			break;
	}
}
if( acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
   tipoMaxCantidad = "alcohol";
   promedio = acumuladorAlcohol / contadorAlcohol;
}
else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
	tipoMaxCantidad = "barbijo";
	promedio = acumuladorBarbijo / contadorBarbijo;
}
else{
	tipoMaxCantidad = "jabon";
	promedio = acumuladorJabon / contadorJabon;
}
console.log("El más caro de los jabones cuesta $"+jabonCaro+" la cantidad de unidades es "+cantidadJabonCaro+" y el fabricante es "+fabricanteJabonCaro);
console.log("El tipo con más unidades es "+tipoMaxCantidad+" y el promedio de compra es "+promedio);
console.log("Unidades de barbijos compradas "+(acumuladorBarbijo/contadorBarbijo));
//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
//c) Cuántas unidades de Barbijos se compraron en total*/
}
