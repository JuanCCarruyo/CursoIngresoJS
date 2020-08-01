/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	let num=0;
	let i=0;
	let promedio=0;
	let x;

	while(!(x == "Si" || x == "si")){  //cuenta el 0 entonces son 5 las iteraciones

		num = num + parseInt(prompt("Ingrese un numero: "));
		i = i + 1;
		x = prompt("Quieres dejar de introducir numeros?")

	}

	promedio = num / i;

	document.getElementById("txtIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = promedio;


	/*
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
	*/

}//FIN DE LA FUNCIÓN