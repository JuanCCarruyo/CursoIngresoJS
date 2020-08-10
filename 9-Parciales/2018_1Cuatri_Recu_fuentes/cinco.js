function mostrar()
{

    let dia;
    let msj="";

    dia = prompt("Ingresa un dia de la semana").toLowerCase();

    switch(dia){

        case "sabado":
        case "domingo":
            msj = "buen finde";
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            msj = "a trabajar";
            break;
        default:
            msj = "no es un dia valido";
            break;
    }

    alert(msj);

}
