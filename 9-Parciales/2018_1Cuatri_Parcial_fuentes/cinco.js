function mostrar()
{
    /*
					Bienvenidos (SWITCH).
        </br>pedir el ingreso de un planeta del sistema solar
        </br>Si es la tierra mostrar  "acá vivimos".
        </br>Si está más cerca del sol, "acá hace más calor".
        </br>Si está más lejos del sol, "acá hace más frio".
        </br>Si no es un planeta valido informarlo.
        </br>Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
      
    */

    let planeta;

    planeta = prompt("Ingrese un planeta del sistema solar").toLowerCase();

    switch(planeta){
        case "mercurio":
        case "venus":
            alert("acá hace más calor");
            break;
        case "tierra":
            alert("acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("acá hace más frio");
            break;
        default:
            alert("no es un planeta valido");
            break;
        
    }
}
