function mostrar()
{
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;
//  var destinoIngresado =txtIdDestino.value;

	switch(vDestino)
	{
		case "Bariloche":
		case "Cordoba":
			alert("Hace FRIO en el destino.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace CALOR en el destino.");
			break;

	}


}//FIN DE LA FUNCIÓN