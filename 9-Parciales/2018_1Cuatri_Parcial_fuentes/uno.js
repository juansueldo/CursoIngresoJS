function mostrar() {
  let ancho;
  let largo;
  let perimetro;
  ancho = parseInt(prompt("Ingrese ancho"));
  largo = parseInt(prompt("Ingrese el largo"));

  perimetro = (ancho + largo) * 2;

  alert("El perimetro es : " + perimetro);
}
