/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var numbre = document.getElementById("txtIdNombre").value;
	var age = document.getElementById("txtIdEdad").value;
	
	alert("Su nombre es "+numbre+" y tiene "+age+" años.");
}

