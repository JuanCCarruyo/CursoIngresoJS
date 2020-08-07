function mostrar()
{

//  al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

	let num;

	num = parseInt(prompt("ingrese el número de repeticiones"));

	for (let i=0; i<num; i++){

		document.write("Hola UTN FRA"+"<br>");

	}

}//FIN DE LA FUNCIÓN