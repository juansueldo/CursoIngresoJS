let random = Math.round(Math.random() * 2 + 1);
let contadorDeEmpates = 1;
let contadorDeGanadas = 1;
let contadorDePerdidas = 1;
function comenzar() {
  alert("Comenzamos");
}
function piedra() {
  if (random == 1) {
    alert("Empate");
    document.getElementById("txtIdEmpatadas").value = contadorDeEmpates++;
  } else if (random == 2) {
    alert("Perdiste");
    document.getElementById("txtIdPerdidas").value = contadorDePerdidas++;
  } else {
    alert("Ganaste");
    document.getElementById("txtIdGanadas").value = contadorDeGanadas++;
  }
}
function papel() {
  if (random == 1) {
    alert("Ganaste");
    document.getElementById("txtIdGanadas").value = contadorDeGanadas++;
  } else if (random == 2) {
    alert("Empate");
    document.getElementById("txtIdEmpatadas").value = contadorDeEmpates++;
  } else {
    alert("Perdiste");
    document.getElementById("txtIdPerdidas").value = contadorDePerdidas++;
  }
}
function tijera() {
  if (random == 1) {
    alert("Perdiste");
    document.getElementById("txtIdPerdidas").value = contadorDePerdidas++;
  } else if (random == 2) {
    alert("Ganaste");
    document.getElementById("txtIdGanadas").value = contadorDeGanadas++;
  } else {
    alert("Empate");
    document.getElementById("txtIdEmpatadas").value = contadorDeEmpates++;
  }
}

//FIN DE LA FUNCIÓN
/*function piedra()
{
	
    if(random == 1){
        alert("Empate");
    }
    else if(random == 2){
        alert("Perdiste");
    }
    else{
        alert("Ganaste");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(random == 1){
        alert("Ganaste");
    }
    else if(random == 2){
        alert("Empate");
    }
    else{
        alert("Perdiste");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    if(random == 1){
        alert("Perdiste");
    }
    else if(random == 2){
        alert("Ganaste");
    }
    else{
        alert("Empate");
    }

}*/
/*document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates++;
document.getElementById("txtIdPerdidas").value = ContadorDePerdidas++;
document.getElementById("txtIdGanadas").value = ContadorDeGanadas++;*/
