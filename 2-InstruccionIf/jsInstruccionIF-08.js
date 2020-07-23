function mostrar()
{
	//tomo la edad  

	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

	if(Edad<18 && EstadoCivil != "Soltero"){

	}
	if(Edad>=18 && EstadoCivil == "Soltero"){

		alert("Es soltero y no es menor.")

	}
	


}//FIN DE LA FUNCIÓN