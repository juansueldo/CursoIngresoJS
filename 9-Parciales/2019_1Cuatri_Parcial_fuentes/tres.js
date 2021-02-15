/*Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{
let precio;
let descuento;
let precioFinal;

precio = parseFloat(prompt("Ingrese el precio"));
descuento = precio*0.3;
precioFinal = precio - descuento;

document.getElementById("elPrecioFinal").value = precioFinal.toFixed(2);
}
