/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var Res;
    
    
    Precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    Res = Precio1+Precio2+Precio3;

    alert("La suma de los precios es "+Res);

}
function Promedio () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var Res;
    var ResProm;
    
    
    Precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    Res = Precio1+Precio2+Precio3;
    ResProm = Res/3

    alert("El promedio de los precios es "+ResProm);

}
function PrecioFinal () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var Res;
    var Res21;
    var ResIVA;
    
    
    Precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    Precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    Precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    Res = Precio1+Precio2+Precio3;
    Res21 = Res*0.21;
    ResIVA = Res+Res21;

    alert("La suma de los precios más IVA (21%) es "+ResIVA);
	
}