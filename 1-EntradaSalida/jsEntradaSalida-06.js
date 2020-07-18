/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1
	var num2
	var res
	
    //esta bien "inicializar variables ya con las funciones pero queda mas prolijo declarar todas las var al inicio y despues usarlas"

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    res = num1+num2;
	
	alert(num1+" + "+num2+" = "+res);
}

