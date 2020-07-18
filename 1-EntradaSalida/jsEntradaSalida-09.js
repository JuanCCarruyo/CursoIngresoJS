/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var Sueldo
	var Res1
	var Res2

	Sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	Res1 = Sueldo*0.1;  //	Res1 = 10*Sueldo/100;
	Res2 = Sueldo+Res1;

	document.getElementById("txtIdResultado").value = Res2;

}
