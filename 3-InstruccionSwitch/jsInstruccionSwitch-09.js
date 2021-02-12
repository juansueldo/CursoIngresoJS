function mostrar() {
  const PRECIO = 15000;
  let estacionIngresada;
  let localidad;
  let descuento;
  let aumento;
  let precioFinal;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  localidad = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada) {
    case "Invierno":
      if (localidad == "Bariloche") {
        aumento = (PRECIO * 20) / 100;
        precioFinal = PRECIO + aumento;
        alert("El precio es $" + precioFinal);
      } else if (localidad == "Mar del plata") {
        descuento = (PRECIO * 20) / 100;
        precioFinal = PRECIO - descuento;
        alert("El precio es $" + precioFinal);
      } else {
        descuento = (PRECIO * 10) / 100;
        precioFinal = PRECIO - descuento;
        alert("El precio es $" + precioFinal);
      }
      break;
    case "Verano":
      if (localidad == "Bariloche") {
        descuento = (PRECIO * 20) / 100;
        precioFinal = PRECIO - descuento;
        alert("El precio es $" + precioFinal);
      } else if (localidad == "Mar del plata") {
        aumento = (PRECIO * 20) / 100;
        precioFinal = PRECIO + aumento;
        alert("El precio es $" + precioFinal);
      } else {
        aumento = (PRECIO * 10) / 100;
        precioFinal = PRECIO + aumento;
        alert("El precio es $" + precioFinal);
      }
      break;
    case "Otoño":
    case "Primavera":
      if (localidad != "Cordoba") {
        aumento = (PRECIO * 10) / 100;
        precioFinal = PRECIO + aumento;
        alert("El precio es $" + precioFinal);
      } else {
        alert("El precio es $" + PRECIO);
      }
      break;
  }
  /*const PRECIO = 15000;
	let estacionIngresada;
	let localidad;
	let descuento =0;
	let aumento = 0;
	let precioFinal;

    estacionIngresada = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno":
			if(localidad == "Bariloche"){
				aumento = 20;
			}
			else if(localidad == "Mar del plata"){
				descuento = 20;
			}
			else{
				descuento = 10;
			}
			break;
		case "Verano":
				if(localidad == "Bariloche"){
				descuento = 20;
			}
			else if(localidad == "Mar del plata"){
				aumento = 20;
			}
			else{
				aumento = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
				if(localidad == "Cordoba"){
					precioFinal = PRECIO;
				}
				else{
					aumento = 10;
				}	
			break;
	    }
    if(amuento !=0){
		precioFinal = PRECIO + PRECIO *aumento/100;
	}
	else if(descuento !=0){
		precioFinal = PRECIO - PRECIO *aumento/100;
	}
	alert("El precio es $"+precioFinal);
	}
*/
} //FIN DE LA FUNCIÓN
