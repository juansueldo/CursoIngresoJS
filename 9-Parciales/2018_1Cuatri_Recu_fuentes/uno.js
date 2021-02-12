
/*Bienvenidos.
Realizar el algoritmo que pida el ancho
y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar() {
    let largo;
    let ancho;
    let perimetro;

    largo = parseFloat(prompt("Ingrese el largo"));
    ancho = parseFloat(prompt("Ingrese el ancho"));
    perimetro = (ancho + largo) * 2;

    alert("El perimetro es " + perimetro);
}
