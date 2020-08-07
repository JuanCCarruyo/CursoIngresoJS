function mostrar()
{

//  al presionar el botón repetir el pedido de número hasta que ingresemos el 9.	
	


	for ( ; ; ){   // 	si no se pone condicion al for queda en un bucle infinito (en todos sus anos de programadora la profe nunca vio for vacio)

		num = parseInt(prompt("Ingrese un numero"));
		alert("Se ingreso el "+num);

		if (num==9){
			break;
		}

	}




}//FIN DE LA FUNCIÓN