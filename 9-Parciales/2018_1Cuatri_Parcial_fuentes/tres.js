function mostrar()
{
//elPrecioFinal

//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

let precio=0;
let desc=0;

precio = parseFloat(prompt("Ingrese el precio"));
desc = parseFloat(prompt("Ingrese el porcentaje de descuento"));

document.getElementById("elPrecioFinal").value = (precio - (desc*precio/100));

}
