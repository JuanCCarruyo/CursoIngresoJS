/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe
	var Res1
	var Res2

	Importe = parseInt(document.getElementById("txtIdImporte").value);
	
	Res1 = Importe*0.25;
	Res2 = Importe-Res1;

	document.getElementById("txtIdResultado").value = Res2;

}
