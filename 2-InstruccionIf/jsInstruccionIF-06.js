function mostrar()
{
	//tomo la edad  

	let Edad;

	Edad = parseInt(document.getElementById("txtIdEdad").value);

	if(Edad>=13 && Edad<=17){

		alert("Esta persona es adolecente.");

	}
	if(Edad>=18){
		alert("Esta persona es mayor de edad.")
	}
	if(Edad<13){

		alert("Esta persona es niño.")

	}


}//FIN DE LA FUNCIÓN