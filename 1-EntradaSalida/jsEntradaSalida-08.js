/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1
	var num2
	var res
	
    //esta bien "inicializar variables ya con las funciones pero queda mas prolijo declarar todas las var al inicio y despues usarlas"

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

    res = num1%num2;
	
	alert("El resto es "+res);
}
