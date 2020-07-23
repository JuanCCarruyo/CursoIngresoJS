function mostrar()
{
	//tomo la edad  

	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

	if(Edad<18 && EstadoCivil != "Soltero"){

		alert("Es muy pequeño para NO ser soltero.");

	}
	

}//FIN DE LA FUNCIÓN