function mostrar() {
	let vDestino;
	let vEstacion;
	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;

//mal

	switch (vDestino) {
		case "Bariloche":
			if (vEstacion == "Invierno"){
				alert("Viajar a Bariloche cuesta: $"+(15000+15000*0.2));
			}
			else if (vEstacion == "Verano"){
				alert("Viajar a Bariloche cuesta: $"+(15000-15000*0.2));
			}
			else {
				alert("Viajar a Bariloche cuesta: $"+(15000+15000*0.1));
			}
			break;
		case "Cataratas":
		case "Cordoba":
			if (vEstacion == "Invierno"){
				alert("Viajar cuesta: $"+(15000-15000*0.1));
			}
			else if (vEstacion == "Verano"){
				alert("Viajar cuesta: $"+(15000+15000*0.1));
			}
			break;
		case "Cataratas":
			if (vEstacion == "Primavera" || vEstacion == "Otoño"){
				alert("Viajar a Cataratas cuesta: $"+(15000+15000*0.1));
			}
			break;
		case "Mar del plata":
			if (vEstacion == "Invierno"){
				alert("Viajar a Mar del plata cuesta: $"+(15000-15000*0.2));
			} 
			else if (vEstacion == "Verano"){
				alert("Viajar a Mar del plata cuesta: $"+(15000+15000*0.2));
			else {
				alert("Viajar a Mar del plata cuesta: $"+(15000+15000*0.1));
			}
			break;
		default:
			alert("Viajar cuesta $15,000")
			break;
		//TP 4 resolver con IF y con Switch

	}


}//FIN DE LA FUNCIÓN