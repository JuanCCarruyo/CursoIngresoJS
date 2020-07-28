function mostrar()
{
	//tomo el mes
	let vMes;
	vMes = document.getElementById("txtIdMes").value;
//  var vMes = txtIdMes.value;

	switch(vMes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio": 
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre": //en vez de esta parte se puede poner default: alert() porque son los meses que faltan
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;

	}

//en vez de esta parte se puede poner default: alert() porque son los meses que faltan

//       lol no
    /*
	switch(vMes)
	{
		case "Enero" || "Febrero" || "Marzo" || "Abril" || "Mayo" || "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio" || "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre" || "Octubre" || "Noviembre" || "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;

	}
*/


}//FIN DE LA FUNCIÓN