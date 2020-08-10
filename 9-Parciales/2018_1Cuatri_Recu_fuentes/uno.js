
function mostrar()
{

    let ancho=0;
    let largo=0;
    let per=0;

    ancho = parseFloat(prompt("Ingrese el ancho"));
    largo = parseFloat(prompt("Ingrese el largo"));

    per = (ancho+largo)*2;

    alert("el perimetro es "+per);

}
