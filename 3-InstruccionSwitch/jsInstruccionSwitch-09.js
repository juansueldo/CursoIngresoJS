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

	switch(estacionIngresada){
		case "Invierno":
			if(localidad == "Bariloche"){
			aumento = PRECIO* 20/100;
			precioFinal = PRECIO + aumento;
			alert("El precio es $"+precioFinal);
			}
			else if(localidad == "Mar del plata"){
			descuento = PRECIO *20/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			}
			else{
			descuento = PRECIO *10/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			}
			break;
		case "Verano":
			if(localidad == "Bariloche"){
			descuento = PRECIO* 20/100;
			precioFinal = PRECIO - descuento;
			alert("El precio es $"+precioFinal);
			}
			else if(localidad == "Mar del plata"){
				aumento = PRECIO *20/100;
				precioFinal = PRECIO + aumento;
				alert("El precio es $"+precioFinal);
			}
			else{
				aumento = PRECIO *10/100;
				precioFinal = PRECIO + aumento;
				alert("El precio es $"+precioFinal);
				
			}
			break;
		case "Otoño":
			if(localidad != "Cordoba"){
				aumento = PRECIO *10/100;
				precioFinal = PRECIO + aumento;
				alert("El precio es $"+precioFinal);
			}
			else{
				alert("El precio es $"+PRECIO);
			}
			break;
		case "Primavera":
			if(localidad != "Cordoba"){
			aumento = PRECIO *10/100;
			precioFinal = PRECIO + aumento;
			alert("El precio es $"+precioFinal);
		}
		    else{
			alert("El precio es $"+PRECIO);
		}
		break;
	}


}//FIN DE LA FUNCIÓN