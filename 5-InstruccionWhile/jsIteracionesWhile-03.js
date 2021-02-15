/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let clave;
  let contador = 0;
	alert("Bienvenido");
do{
	clave = prompt("Ingrese la clave");
	contador++;
	  
  }while(clave != "utn750");
  alert("Clave correcta.")
  
} //FIN DE LA FUNCIÓN
