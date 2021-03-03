/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
let producto;
let precio;
let cantidad;
let tipo;
let marca;

let acumAlcohol = 0;
let acumIAC = 0;
let acumQUAT = 0;
let contAlcohol = 0;
let contIAC = 0;
let contQUAT = 0;
let acumUnidades = 0;
let promedioAlcohol;
let promedioIAC;
let promedioQUAT;

let flag = 1;
let masInflamable;
let tipoMasInflamable;


let flagCaro = 1;
let precioCaro;
let tipoCaro;
let marcaCaro;

for(let i = 0; i < 2; i++){
	producto = prompt("Ingrese el producto alcohol/IAC/QUAT");
	while (producto != "alcohol" && producto != "IAC" && producto != "QUAT"){
		producto = prompt("Error. Ingrese el producto alcohol/IAC/QUAT");
	}
	precio = parseFloat(prompt("Ingrese el precio(entre 100 y 300)"));
	while(isNaN(precio) || precio < 100 || precio > 300){
		precio = parseFloat(prompt("Error. Ingrese el precio(entre 100 y 300)"));
	}
	cantidad = parseInt(prompt("Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	while(isNaN(cantidad) || cantidad <= 0 || cantidad >1000){
	cantidad = parseInt(prompt("Error. Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	}
	tipo = prompt("Ingrese el tipo (ignifugo, combustible, explosivo)");
	while(tipo != "ignifugo" && tipo != "combustible" && tipo!= "explosivo"){
		tipo = prompt("Erro. Ingrese el tipo (ignifugo, combustible, explosivo)");
	}
	marca = prompt("Ingrese la marca");

	if(tipo = "explosivo" && (flag || cantidad > masInflamable)){
		masInflamable = cantidad;
		tipoMasInflamable = tipo;
		flag = 0;
	}
	if(flagCaro || precio > precioCaro){
		precioCaro = precio;
		tipoCaro = tipo;
		marcaCaro = marca;
		flag = 0;
}
	switch(tipo){
		case "alcohol":
			acumAlcohol += cantidad;
			contAlcohol++;
			break;
		case "IAC":
			acumIAC += cantidad;
			contIAC++;
			if(precio <= 200){
				acumUnidades += cantidad
			}
			break;
		case "QUAT":
			acumQUAT += cantidad;
			contQUAT++;
			break;
	}
}
if(contAlcohol > 0){
	promedioAlcohol = acumAlcohol / contAlcohol;
	console.log("A - del tipo alcohol el promedio es "+promedioAlcohol);
}
else{
	console.log("No se ingresaron alcoholes");
}
if(contIAC > 0){
	promedioIAC = acumIAC / contIAC;
	console.log("A - del tipo alcohol el promedio es "+promedioIAC);
}
else{
	console.log("No se ingresaron IAC");
}
if(contQUAT > 0){
	promedioQUAT = acumQUAT / contQUAT;
	console.log("A - del tipo alcohol el promedio es "+promedioQUAT);
}
else{
	console.log("No se ingresaron QUAT");
}
console.log("B -El tipo de inflamable con más cantidad de unidades en total de la compra " +tipoMasInflamable);
console.log("C - La cantidad de unidades de IAC con precios menos a 200 (inclusive) "+acumUnidades);
console.log("D - La marca "+ marcaCaro+ " y tipo del más caro de los productos " + tipoCaro + " y el precio es $"+precioCaro );
/*a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
}
