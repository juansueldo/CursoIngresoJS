function mostrar()
{
	const PRECIO = 15000;
	let estacionIngresada;
	let localidad;
	let descuento;
	let aumento;
	let precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada && localidad){
		case "Invierno" && "Bariloche":
			aumento = PRECIO* 20/100;
			precioFinal = PRECIO + aumento;
			alert("El precio es $"+precioFinal);
			break;
		case "Invierno" && "Mar del plata":
			descuento = PRECIO *20/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			break;
	}


}//FIN DE LA FUNCIÓN