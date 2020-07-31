/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 10){
		numeroIngresado = prompt("ERROR: ingrese un número entre 0 y 10.");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	alert ("You did it! #hackerman");	
	
}//FIN DE LA FUNCIÓN