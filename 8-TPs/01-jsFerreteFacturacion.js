/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;
    let resultado;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 + num2 + num3;

    alert("La suma de los precios es "+resultado);
}
function Promedio () 
{
    let num1;
    let num2;
    let num3;
    let resultado;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = (num1 + num2 + num3)/3;

    alert("El promedio de los precios es "+resultado);
}
function PrecioFinal () 
{
    let num1;
    let num2;
    let num3;
    let iva;
    let resultado;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    iva = (num1 + num2 + num3)*21/100;
    resultado = num1 + num2 + num3 + iva;

    alert("El total de los precios más el 21% IVA es "+resultado);
}