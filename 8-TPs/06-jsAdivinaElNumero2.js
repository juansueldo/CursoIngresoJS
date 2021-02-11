/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let random = Math.round(Math.random()*99+1);
let contador = 1;

function comenzar()
{
	alert("Se genero el numero random entre 1 y 100");

}

function verificar()
{
let numeroIngresado;
let falta;
let sobro;

numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
falta = random-numeroIngresado;
sobro = numeroIngresado-random;

if(random < numeroIngresado){
	alert(`Siga intentando. Paso por ${sobro} para llegar al número secreto`);
}
else if(random > numeroIngresado){
	alert(`Siga intentando. Falta ${falta} para llegar al número secreto`);
}
else{
	alert(`Acerto en ${contador} intentos`);
	switch(contador){
		case 1:
			alert("Usted es un Psíquico");
			break;
		case 2:
			alert("Excelente percepción");
			break;
		case 3:
			alert("Esto es suerte");
			break;
		case 4:
			alert("Excelente técnica");
			break;
		case 5:
			alert("Usted está en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta técnica");
			break;
		default:
			alert("Afortunado en el amor!!");
	}
}
document.getElementById("txtIdIntentos").value = contador++;
/*
switch(contador){
	case 1:
		alert("Usted es un Psíquico");
		break;
	case 2:
		alert("Excelente percepción");
		break;
	case 3:
		alert("Esto es suerte");
		break;
	case 4:
		alert("Excelente técnica");
		break;
	case 5:
		alert("Usted está en la media");
		break;
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		alert("Falta técnica");
		break;
	default:
		alert("Afortunado en el amor!!");
}*/
	

}