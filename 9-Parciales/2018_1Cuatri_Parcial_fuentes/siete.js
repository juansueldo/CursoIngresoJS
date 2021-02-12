/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
let nota1;
let nota2;
let nota3;
let nota4;
let nota5;
let sexo1;
let sexo2;
let sexo3;
let sexo4;
let sexo5;

nota1 = parseInt(prompt("Ingrese la nota de 0 a 10"));
nota2 = parseInt(prompt("Ingrese la nota de 0 a 10"));
nota3 = parseInt(prompt("Ingrese la nota de 0 a 10"));
nota4 = parseInt(prompt("Ingrese la nota de 0 a 10"));
nota5 = parseInt(prompt("Ingrese la nota de 0 a 10"));
sexo1 = prompt("Ingrese F para fememino o M para masculino");
sexo2 = prompt("Ingrese F para fememino o M para masculino");
sexo3 = prompt("Ingrese F para fememino o M para masculino");
sexo4 = prompt("Ingrese F para fememino o M para masculino");
sexo5 = prompt("Ingrese F para fememino o M para masculino");

alert("El promedio es "+ (nota1+nota2+nota3+nota4+nota5)/5);

}
