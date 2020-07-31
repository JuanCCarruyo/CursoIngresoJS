/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(!(sexoIngresado == "f" || sexoIngresado == "F" || sexoIngresado == "m" || sexoIngresado == "M")){
		sexoIngresado = prompt("ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
	alert ("You did it! #hackerman");

}//FIN DE LA FUNCIÓN