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
		case "Invierno" && "Cataratas":
		case "Invierno" && "Cordoba":
			descuento = PRECIO *10/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			break;
		case "Verano" && "Bariloche":
			descuento = PRECIO* 20/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			break;
		case "Verano" && "Cataratas":
		case "Verano" && "Cordoba":
					aumento = PRECIO *10/100;
					precioFinal = PRECIO + aumento;
					alert("El precio es $"+precioFinal);
					break;
		case "Verano" && "Mar del plata":
				aumento = PRECIO *20/100;
				precioFinal = PRECIO + aumento;
				alert("El precio es $"+precioFinal);
				break;
		case "Otoño" && "Bariloche":
		case "Primavera" && "Bariloche":
		case "Otoño" && "Cataratas":
		case "Primavera" && "Cataratas":
		case "Otoño" && "Mar del plata":
		case "Primavera" && "Mar del plata":
				aumento = PRECIO *10/100;
				precioFinal = PRECIO + aumento;
					alert("El precio es $"+precioFinal);
					break;
		case "Otoño" && "Cordoba":
		case "Primavera" && "Cordoba":
				alert("El precio es $"+PRECIO);
				break;
	}


}//FIN DE LA FUNCIÓN