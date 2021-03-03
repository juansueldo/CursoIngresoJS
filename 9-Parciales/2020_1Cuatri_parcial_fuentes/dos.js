/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
//variables pedir los datos
let tipo;
let cantidad;
let precio;
let descuento;
let importe;
let seguir;

//totales
let totalBruto = 0;
let totalNeto;

//acumuladores
let acumuladorArena = 0;
let acumuladorCal = 0;
let acumuladorCemento = 0;
let acumBolsas = 0;

//para caulcular el precio más caro
let flag = 1;
let precioCaro;
let tipoCaro;
let tipoMayorCantidad;


//ingreso de datos y validación
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

  acumBolsas += cantidad;

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
    tipoMayorCantidad = "arena";
  }
  else if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento){
    tipoMayorCantidad = "cal";
  }
  else{
    tipoMayorCantidad = "cemento";
  }
  
  if(flag || precio > precioCaro){
    precioCaro = precio;
    tipoCaro = tipo;
    flag = 0;
  }
  seguir = prompt("Desea ingresar otro producto?");
}while(seguir == "si")

if(acumBolsas < 10){
  descuento = 0
}
else if(acumBolsas >= 10 || acumBolsas < 30){
  descuento = 0.15
}
else{
  descuento = 0.25
}
if(descuento != 0){
totalNeto = totalBruto - totalBruto * descuento;
}
else{
  totalNeto = totalBruto;
}

console.log("A - El importe bruto a pagar es $" + totalBruto);
console.log("B - El importe neto a pagar es $" + totalNeto);
console.log("C - El tipo con más cantidad de bolsas es " + tipoMayorCantidad);
console.log("D - El tipo más caro es " + tipoCaro);

/*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
}

