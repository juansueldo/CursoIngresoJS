/*Realizar el algoritmo que permita ingresar los datos de una compra
de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
function mostrar()
{
//variables para el ingreso de datos y repeticiones
let tipo;
let cantidad;
let precio;
let seguir;

//punto a y b
let importe;
let totalBruto = 0;
let totalNeto;
let descuento;

//punto d
let acumuladorArena = 0;
let acumuladorCal = 0;
let acumuladorCemento = 0;
let acumuladorBolsas = 0;
let tipoMaxBolsas;

//punto f
let flag = 1;
let precioMax;
let tipoMaxPrecio;

do{
  tipo = prompt("Ingrese el tipo a validar (arena, cal, cemento)");
  while(isNaN(tipo) == false || tipo != "arena" && tipo != "cal" && tipo != "cemento"){
    tipo = prompt("Error. Ingrese el tipo a validar (arena, cal, cemento)");
  }
  cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
  while(isNaN(cantidad) || cantidad <= 0){
    cantidad = parseInt(prompt("Error. Ingrese la cantidad de bolsas"));
  }
  precio = parseFloat(prompt("Ingrese el precio"));
  while(isNaN(precio) || precio <= 0){
    precio = parseFloat(prompt("Error. Ingrese el precio"));
  }
  importe = precio * cantidad;
  totalBruto += importe;

  acumuladorBolsas += cantidad;

  switch(tipo){
    case "arena":
      acumuladorArena += cantidad;
      break;
    case "cal":
      acumuladorCal += cantidad;
      break;
    case "cemento":
      acumuladorCemento += cantidad;
      break;
  }
  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
    tipoMaxBolsas = "arena"
  }
  else if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento){
    tipoMaxBolsas = "cal"
  }
  else{
    tipoMaxBolsas = "cemento"
  }
  
  if(flag || precio > precioMax){
    precioMax = precio;
    tipoMaxPrecio = tipo;
    flag = 0;
  }
  
  seguir = prompt("Desea ingresar un producto más?")
}while(seguir == "si")

if(acumuladorBolsas < 10){
  descuento = 0;
}
else if(acumuladorBolsas >= 10 || acumuladorBolsas < 30){
  descuento = 0.15
}
else{
  descuento = 0.25
}
totalNeto = totalBruto - totalBruto * descuento;

console.log("A - El importe bruto sin descuento es $" + totalBruto);
if(descuento != 0){
console.log("B - Usted lleva " + acumuladorBolsas + " bolsas, por lo que tiene un descuento de $" +(totalBruto * descuento).toFixed(2) + ". El total neto es $" + totalNeto.toFixed(2));
}
else{
  console.log("B - Usted lleva " + acumuladorBolsas + " no tiene ningun descuento");
}
console.log("C - El tipo con más catidad de bolsas es " + tipoMaxBolsas);
console.log("D - El tipo más caro es " + tipoMaxPrecio);

}
