
function mostrar()
{

    //Realizar el algoritmo que  pida el ancho y el largo de un rectángulo  por prompt y que muestre el perímetro por alert

    let ancho=0;
    let largo=0;
    let perimetro=0;

    ancho = parseFloat(prompt("Ingrese el ancho del rectangulo."));
    largo = parseFloat(prompt("Ingrese el largo del rectangulo."));

    perimetro = (ancho+largo)*2;

    alert("El perimetro es "+perimetro);
}
