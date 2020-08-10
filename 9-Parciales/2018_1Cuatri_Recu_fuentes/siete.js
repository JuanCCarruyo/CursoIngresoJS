function mostrar()
{
    /*
    Bienvenidos.
			
    Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo
    (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:

    El promedio de las notas totales.
 
    La nota más baja y el sexo de esa persona.
 
    La cantidad de varones que su nota haya sido mayor o igual a 6.

    */

    let nota=0;
    let sexo;
    let acumNota=0;
    let contAlum=0;

    let flag=0;
    let notamin=0;
    let sexomin="";

    let contVaronAprob=0;

    for(let i=0 ; i<5 ; i++){  

        do{
            nota = parseFloat(prompt("Ingrese la nota:"));
        }while (isNaN(nota) || nota < 0 || nota > 10);

        do{
            sexo = prompt("Ingrese el sexo: (f/m)").toLowerCase();
        }while (!(sexo == "f" || sexo == "m"));

        acumNota = acumNota + nota;
        contAlum++;

        if (flag==0 || nota < notamin){
            notamin = nota;
            sexomin = sexo;
        }

        if (sexo == "m" && nota >= 6){
            contVaronAprob++;
        }

    }

    promedio = acumNota/contAlum;

    switch(sexomin){
        case "f":
            sexomin = "femenino";
            break;
        case "m":
            sexomin = "masculino";
            break;
    }

    document.write("El promedio de las notas totales es: "+promedio+"<br>"+"<br>"); //a)

    document.write("La nota más baja es "+notamin+" y el sexo de esa persona es "+sexomin+"<br>"+"<br>"); //b)

    document.write("La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+contVaronAprob); //c)

}
