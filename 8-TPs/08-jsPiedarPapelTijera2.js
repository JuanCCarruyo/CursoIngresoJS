var eleccionMaquina;
var seleccion;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	let NumMax = 3;  // generador numero random entre 1 y 3
    let NumMin = 1;
    
    eleccionMaquina = Math.round( Math.random() * (NumMax - NumMin) + NumMin);
    console.log(eleccionMaquina);

    switch(eleccionMaquina){
        case 1:
            eleccionMaquina = "piedra";
        break;
        case 2:
            eleccionMaquina = "papel";
        break;
        case 3:
            eleccionMaquina = "tijera";
        break;
    }
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN


function piedra()
{
    seleccion = "piedra";

    if (seleccion == eleccionMaquina){
		ContadorDeEmpates++;
		alert("Empató");
    }
    else if (eleccionMaquina == "papel"){
		ContadorDePerdidas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "tijera"){
		ContadorDeGanadas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
	}
	
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;


}//FIN DE LA FUNCIÓN


function papel()
{
    seleccion = "papel";

    if (seleccion == eleccionMaquina){
		ContadorDeEmpates++;
		alert("Empató");
    }
    else if (eleccionMaquina == "tijera"){
		ContadorDePerdidas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "piedra"){
		ContadorDeGanadas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
	}
	
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;


}//FIN DE LA FUNCIÓN


function tijera()
{
    seleccion = "tijera";

    if (seleccion == eleccionMaquina){
		ContadorDeEmpates++;
		alert("Empató");
    }
    else if (eleccionMaquina == "tijera"){
		ContadorDePerdidas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "papel"){
		ContadorDeGanadas++;
		alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
	}
	
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
console.log("yeet")
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;

}