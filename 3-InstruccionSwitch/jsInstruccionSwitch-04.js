function mostrar()
{
	//tomo el mes
	let vMes;
	vMes = document.getElementById("txtIdMes").value;
//  var vMes =txtIdMes.value;
	
	switch(vMes)
	{
		case "Febrero":
			alert("Este mes tiene 29 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;
		default:
			alert("Este mes tiene 31 días");
			break;

	}



}//FIN DE LA FUNCIÓN