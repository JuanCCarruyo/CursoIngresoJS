function mostrar()
{
	let Dest;
	let Esta;
	let Price = 15000;
	let vSi = "Si se viaja a ";
	let vNo = "No se viaja a ";
	let Mens;

	Dest = document.getElementById("txtIdDestino").value;
	Esta = document.getElementById("txtIdEstacion").value;
	
	switch(Esta){

		case "Invierno":
			if (Dest == "Bariloche"){
				Mens = vSi;
			}
			else {
				Mens = vNo;
			}
			break;
		case "Verano":
			if (Dest == "Mar del plata" || Dest == "Cataratas"){
				Mens = vSi;
			}
			else {
				Mens = vNo;
			}
			break;
		case "Otoño":
			Mens = vSi;
			break;
		case "Primavera":
			if (Dest == "Bariloche"){
				Mens = vSi;
			}
			else {
				Mens = vNo;
			}
			break;

	}

	alert(Mens+Dest);
	
}//FIN DE LA FUNCIÓN