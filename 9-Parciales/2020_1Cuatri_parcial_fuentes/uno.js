
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
	let producto;
	let precio;
	let cantidad;
	let contador = 0;
	let acumulador;
	let acumulador2 = 0;
	let acumulador3 = 0;

	while (contador < 2) {
		producto = prompt("Ingrese el nombre del producto");
		acumulador =+ producto;
		precio = parseInt(prompt("Ingrese el precio"));
		acumulador2 =+ precio;
		cantidad = parseInt(prompt("Ingrese la cantidad"));
		acumulador3 =+ cantidad;
		contador++;

	}

	console.log(`Los ${producto} cuestan $${precio} y hay ${cantidad} unidades`);
}
