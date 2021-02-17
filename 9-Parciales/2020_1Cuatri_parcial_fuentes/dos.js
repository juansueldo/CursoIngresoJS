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
  let producto;
  let acumuladorProducto =0;
  let cantidad;
  let acumuladorCantidad = 0;
  let contadorCantidad = 0;
  let precio;
  let acumuladorPrecio = 0;
  let contadoPrecio =0;
  let seguir;

  do{

    producto = prompt("Ingrese un producto");
    producto++

    /*cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    acumuladorCantidad += + cantidad;
    contadorCantidad++;

    precio = parseInt(prompt("Ingrese el precio de bolsas"));
    acumuladorPrecio += + precio;
    contadoPrecio++;*/

    seguir = prompt("Desea contiuar?");

  }while(seguir == "si");

  console.log(producto);
}

