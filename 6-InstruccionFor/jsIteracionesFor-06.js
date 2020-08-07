function mostrar()
{

	let num;
	let contpar=0;

	num = parseInt(prompt("Ingrese un numero"));

	// al presionar el botón pedir un número. 
	// mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

	for (let i=1; i<=num; i++){   	

		if (i%2==0){
			alert("El numero "+i+" es par.");
			contpar++;
		}

	}

	alert("Se encontraron "+contpar+" numeros pares.");


}//FIN DE LA FUNCIÓN