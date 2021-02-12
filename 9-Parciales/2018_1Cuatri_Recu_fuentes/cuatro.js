/*
Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/
function mostrar() {
    let num1;
    let num2;
    let division;
    let suma;

    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un numero"));
    resta = num1 - num2;

    if (num1 == num2) {
        alert(num1.toString() + num2.toString());
    }
    else if (num1 > num2) {
        alert((division = num1 / num2).toFixed(2));
    }
    else {
        alert(suma = num1 + num2);
    }
    if (suma < 50) {
        alert("La suma es " + suma + " y es menor a 50");
    }
}

