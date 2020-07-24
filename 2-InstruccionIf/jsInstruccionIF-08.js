function mostrar()
{
	//tomo la edad  

	let Edad;
	let EstadoCivil;

	Edad = parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil = document.getElementById("estadoCivil").value;

	if(!(Edad<18 || EstadoCivil != "Soltero"))
	{

		alert("Es soltero y no es menor.")

	}
	
	//repasar esta, un poco confusa


}//FIN DE LA FUNCIÓN