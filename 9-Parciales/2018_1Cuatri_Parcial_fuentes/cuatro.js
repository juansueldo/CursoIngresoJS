/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
let num1;
let num2;
let suma;
let resta;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese un numero"));
resta = num1 - num2;

if(num1 == num2){
    alert(num1.toString() + num2.toString());
}
else if(num1 > num2){
    alert(resta = num1 - num2);
}
else{
    alert(suma = num1 + num2);
}
if(suma > 10){
    alert("La suma es "+suma+ " y supero el 10");
}
}
