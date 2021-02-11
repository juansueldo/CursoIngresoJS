let random = Math.round(Math.random()*2+1);
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	alert("Comenzamos")

	function piedra()
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
}
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
			
	}
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
		
}
}/*document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates++;
document.getElementById("txtIdPerdidas").value = ContadorDePerdidas++;
document.getElementById("txtIdGanadas").value = ContadorDeGanadas++;*/
	