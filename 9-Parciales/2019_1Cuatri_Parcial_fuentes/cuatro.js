/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/
function mostrar()
{
//declarar las variables
let num1;
let num2;
let suma;
let resta;

num1 = parseInt(prompt("Ingrese un número"));
num2 = parseInt(prompt("Ingrese otro número"));
resta = num1 - num2;
suma = num1 + num2;

if(num1 == num2){
    alert(num1.toString() + num2.toString);
}
else if(num1 > num2){
    alert("El resultado es: "+ resta);
}
else{
    alert("El resultado es: "+ suma);
}
if(resta > 10){
    alert(`La resta es ${resta} y supero el 10`);
}
}
