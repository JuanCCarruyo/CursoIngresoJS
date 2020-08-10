function mostrar()
{

    let altura=0;
    let sexo;

    let contAltura=0; //a)
    let acumAltura=0;

    let alturaMin=0; //b)
    let sexoMin="";
    let flag=0;

    let contMujerAlta=0; //c)

    for(let i=0 ; i<5 ; i++){

        do{

            altura = parseFloat(prompt("Ingresar una altura en centimetros: (entre 0cm y 250cm)"));

        }while(isNaN(altura) || altura < 0 || altura > 250 );

        do{

            sexo = prompt("Ingrese el sexo. (f/m)").toLowerCase();

        }while(!(sexo == "f" || sexo == "m"));

        contAltura++;
        acumAltura = acumAltura + altura;    // a)

        if (flag==0 || altura < alturaMin){  // b)
            alturaMin = altura;
            sexoMin = sexo;
            flag=1;
        }

        if ( sexo == "f" && altura > 190){  // c)
            contMujerAlta++;
        }

    } //end for

    switch(sexoMin){
        case "f":
            sexoMin = "femenino";
            break;
        case "m":
            sexoMin = "masculino";
            break;
    }

    document.write("a) El promedio de las alturas totales es: "+(acumAltura/contAltura)+"cm."+"<br>"+"<br>");
    document.write("b) La altura mas baja es "+alturaMin+"cm y el sexo de esa persona es "+sexoMin+"<br>"+"<br>");
    document.write("c) La cantidad de mujeres que su altura supere los 190 centimetros es "+contMujerAlta);



}
