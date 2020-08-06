/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	let num=0;
	let i=0;
	let x="si";
	let list = [];
	let listMax;
	let listMin;

	while(x == "si"){ 

		num = parseInt(prompt("Ingrese un numero: "));
		list.push(num);
		console.log(list);
		x = prompt("Quieres introducir otro numero?").toLowerCase();

	}

	listMax = Math.max(...list);  //debe tener ... el comando por alguna razon
	listMin = Math.min(...list);

	document.getElementById("txtIdMaximo").value = listMax;
	document.getElementById("txtIdMinimo").value = listMin;


}//FIN DE LA FUNCIÓN