function mostrar() {
	let vDestino;
	let vEstacion;
	let vPrice = 15000;

	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;

//mal

	switch (vDestino) {
		case "Bariloche":
			if (vEstacion == "Invierno"){
				vPrice = vPrice+vPrice*0.2;
			}
			else if (vEstacion == "Verano"){
				vPrice = vPrice-vPrice*0.2;
			}
			else {
				vPrice = vPrice+vPrice*0.1;
			}
			break;
		case "Cataratas":
			if (vEstacion == "Primavera" || vEstacion == "Otoño" || vEstacion == "Verano"){
				vPrice = vPrice+vPrice*0.1;
			}
			else {
				vPrice = vPrice-vPrice*0.1;
			}
			break;
		case "Mar del plata":
			if (vEstacion == "Invierno"){
				vPrice = vPrice-vPrice*0.2;
			} 
			else if (vEstacion == "Verano"){
				vPrice = vPrice+vPrice*0.2;
			}
			else {
				vPrice = vPrice+vPrice*0.1;
			}
			break;
		case "Cordoba":
			if (vEstacion == "Invierno"){
				vPrice = vPrice-vPrice*0.1;
			}
			else if (vEstacion == "Verano"){
				vPrice = vPrice+vPrice*0.1;
			}
			break;
		default:
			alert("Este destino no esta contemplado.")
			break;
		//TP 4 resolver con IF y con Switch

	}

	alert("Viajar a "+vDestino+" cuesta: $"+vPrice)

}//FIN DE LA FUNCIÓN