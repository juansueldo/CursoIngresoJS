
/*Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt
y que muestre el perímetro por alert.*/
function mostrar() {
    let ladoA;
    let ladoB;
    let base;
    let perimetro;

    ladoA = parseInt(prompt("Ingrese la medida de un lado"));
    ladoB = parseInt(prompt("Ingrese la medida de un lado"));
    base = parseInt(prompt("Ingrese la medida de la base"));
    if (ladoA == ladoB && ladoB == base) {
        perimetro = ladoA + ladoB + base;
        alert("El perimetro del triángulo es: " + perimetro);
    }
    else {
        alert("No es un triángulo equilatero");
    }

}
