function mostrar()
{
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;
//  var destinoIngresado =txtIdDestino.value;

	switch(vDestino)
	{
		case "Bariloche":
			alert("Esta en el oeste de Argentina.");
			break;
		case "Cataratas":
			alert("Esta en el norte de Argentina.");
			break;
		case "Mar del plata":
			alert("Esta en el este de Argentina.");
			break;
		case "Cordoba":
			alert("Esta en el sur de Argentina.");
			break;

	}



}//FIN DE LA FUNCIÓN