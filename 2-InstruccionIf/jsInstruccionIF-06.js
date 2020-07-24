function mostrar()
{
	//tomo la edad  

	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);

/*
	 if(Edad>=13 && Edad<=17){

		alert("Esta persona es adolecente.");

	}
	if(Edad>=18){
		alert("Esta persona es mayor de edad.")
	}
	if(Edad<13){

		alert("Esta persona es niño.")

	} usar 3 ifs no es lo mas optimo, si son excluyentes las condiciones es mas optimizado usar else */

	if(Edad<13)
	{
		alert("Esta persona es niño.")
	}
	else if(Edad<18)
	{
		alert("Esta persona es adolecente.")
	}
	else
	{
		alert("Esta persona es mayor de edad.")
	}


}//FIN DE LA FUNCIÓN