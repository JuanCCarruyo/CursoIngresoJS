/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	let num=0;
	let i=0;
	let positivo=0;
	let negativo=1;
	let x="si";

	while(x == "si"){  //cuenta el 0 entonces son 5 las iteraciones

		num = parseInt(prompt("Ingrese un numero: "));
		i = i + 1;
		if (num>=0){
			positivo = positivo + num;
		}
		else{
			negativo = negativo * num;
		}
		x = prompt("Quieres introducir otro numero?").toLowerCase();

	}


	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;



	/*
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
	*/


}//FIN DE LA FUNCIÓN