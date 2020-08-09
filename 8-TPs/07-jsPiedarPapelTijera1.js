/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var seleccion;

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
        alert("Empató");
    }
    else if (eleccionMaquina == "papel"){
        alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "tijera"){
        alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
    }


}//FIN DE LA FUNCIÓN


function papel()
{
    seleccion = "papel";

    if (seleccion == eleccionMaquina){
        alert("Empató");
    }
    else if (eleccionMaquina == "tijera"){
        alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "piedra"){
        alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
    }


}//FIN DE LA FUNCIÓN


function tijera()
{
    seleccion = "tijera";

    if (seleccion == eleccionMaquina){
        alert("Empató");
    }
    else if (eleccionMaquina == "tijera"){
        alert("La maquina seleccionó "+eleccionMaquina+". Perdió.");
    }
    else if (eleccionMaquina == "papel"){
        alert("La maquina seleccionó "+eleccionMaquina+". Ganó.");
    }
	

}//FIN DE LA FUNCIÓN