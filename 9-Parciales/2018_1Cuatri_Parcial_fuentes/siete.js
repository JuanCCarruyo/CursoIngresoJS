function mostrar()
{
    /*
    		Bienvenidos.
			
			</br>Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo
			(validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
			</br>a)
			El promedio de las notas totales.
			</br>b)
			La nota más baja y el sexo de esa persona.
			</br>c)
			La cantidad de varones que su nota haya sido mayor o igual a 6.
			</h3>
    */

    let nota=0;
    let sexo;
    let acumNota=0;
    let flag=0;
    let notaMin=0;
    let sexoMin;
    let contMAprobado=0;
    let cont=0;

    for (let i=0; i<5; i++){
        
        do{
            nota = parseFloat(prompt("Ingresar nota: (entre 0 y 10)"));
        }while (nota < 0 || nota > 10);

        do{
			sexo = prompt("Ingrese su sexo. (F/M)").toLowerCase();
        }while(!(sexo == "f" || sexo == "m"));
        
        acumNota = acumNota + nota;

        //b)
        if (flag==0 || nota < notaMin){
            notaMin = nota;
            sexoMin = sexo;
        }

        if (sexo == "m" && nota >= 6){
            contMAprobado++;
        }
        cont++;

    }

    switch(sexoMin){
        case "f":
            sexoMin = "femenino";
            break;
        case "m":
            sexoMin = "masculino";
            break;
    }
    
    alert("El promedio de las notas totales es de: "+(acumNota/cont));
    alert("La nota más baja es "+notaMin+" y el sexo de esa persona es "+sexoMin);
    alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es de: "+contMAprobado);


}
