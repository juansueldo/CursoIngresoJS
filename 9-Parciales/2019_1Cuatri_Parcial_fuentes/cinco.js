/*Bienvenidos (SOLO SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar y la cantidad de días ,
la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas
de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% ,
por mercadoPago un 10% y cualquier otro medio 5% cualquier otro continente tiene un recargo del 20%*/
function mostrar() {
    let dia = 100;
    let descuento;
    let recargo;
    let metodoDePago;
    let continente;
    let precioFinal;
    let precioFinal2;

    continente = document.getElementById("Marca").value;
    metodoDePago = prompt("Ingrese el metodo de pago");

    switch (continente) {
        case "América":
            descuento = 50;
            switch(metodoDePago){
                case "débito":
                    descuento = 60;
                    break;
            }
            break;
        case "África":
            descuento = 60;
            switch(metodoDePago){
                case "mercadoPago":
                case "efectivo":
                    descuento = 75;
                    break;
            }
            break;
        case "Europa":
            descuento = 20;
            switch(metodoDePago){
                case "débito":
                    descuento = 35;
                    break;
                case "mercadoPago":
                    descuento = 30;
                    break;
                default:
                    descuento =25;
            }
            break;
        case "Asia":
        case "Oceania":
            recargo = 20;
            break;
    }
    switch (let){
        case descuento:
            precioFinal = dia - dia * descuento / 100;
            break;
        case recargo:
            precioFinal =dia + dia * recargo / 100;
            break;
    }
    alert("El precio por día es: $" + precioFinal);
}
