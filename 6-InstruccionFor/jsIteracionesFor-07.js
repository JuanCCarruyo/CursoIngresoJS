function mostrar()
{

	let num;
	let contdiv=0;

	num = parseInt(prompt("Ingrese un numero"));

	// al presionar el botón pedir un número. mostrar los numeros divisores desde 
	// el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.

	for (let i=1; i<=num; i++){   	

		if (num%i==0){
			alert("El numero "+i+" es divisor de "+num);
			contdiv++;
		}

	}

	alert("Se encontraron "+contdiv+" numeros divisores.");


}//FIN DE LA FUNCIÓN