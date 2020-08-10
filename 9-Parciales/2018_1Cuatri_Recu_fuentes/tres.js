function mostrar()
{
    //id="elPrecioFinal">

    let precio=0;
    let desc=0
    let precfinal=0;

    precio = parseFloat(prompt("Ingrese el precio"));
    desc = parseFloat(prompt("Ingrese el porcentaje de descuento"));

    precfinal = precio - (desc*precio/100);

    document.getElementById("elPrecioFinal").value = precfinal;

}
