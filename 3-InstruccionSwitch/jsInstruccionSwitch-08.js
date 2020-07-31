function mostrar()
{
	let vDestino;
	let Temp;
	vDestino = document.getElementById("txtIdDestino").value;
//  var destinoIngresado =txtIdDestino.value;

	switch(vDestino)
	{
		case "Bariloche":
		case "Cordoba":
			Temp = "FRIO";
			break;
		case "Cataratas":
		case "Mar del plata":
			Temp = "CALOR";
			break;

	}

	alert("Hace "+Temp+" en "+vDestino)



}//FIN DE LA FUNCIÓN