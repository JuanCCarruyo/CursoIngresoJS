/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese la clave.");

//  do {
//	  blabla
//  }
//  while(condicion);

// do while cuando quieres que el codigo dentro de while se ejecute por lo menos una vez


	while (claveIngresada != "utn750"){
		claveIngresada = prompt("ERROR: ingrese la clave.");
	}
	alert ("You did it! #hackerman");
}//FIN DE LA FUNCIÓN
