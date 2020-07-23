function mostrar()
{
	//tomo la edad  
	
	let Edad;

	Edad = parseInt(document.getElementById("txtIdEdad").value);

	if(Edad>=18){

		alert("Esta persona es mayor de edad.");

	}
	else{

		alert("Esta persona es menor de edad.")

	}


}//FIN DE LA FUNCIÓN