/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let centigrados;

    temperatura = parseFloat (document.getElementById("txtIdTemperatura").value);
    centigrados = (temperatura-32) /1.8;
    centigrados = centigrados. toFixed(2);

    alert("La temperatura en grados farenheit "+temperatura+"° y en grados centigrados es "+centigrados+"°");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let farenheit;

    temperatura = parseFloat (document.getElementById("txtIdTemperatura").value);
    farenheit = temperatura*1.8+32;

    farenheit = farenheit. toFixed(2);

    alert("La temperatura en grados centigrados es "+temperatura+"° y en grados farenheit es "+farenheit+"°");
}