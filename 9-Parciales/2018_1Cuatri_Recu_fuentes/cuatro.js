function mostrar()
{

    let num1=0;
    let num2=0;
    let num3=0;

    num1 = parseFloat(prompt("Ingrese el primer numero"));
    num2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (num1 == num2){
        alert(""+num1+num2);
    }
    else if ( num1 < num2 ){
        num3 = num1+num2;
        alert(num3);
        if (num3 < 50){
            alert("la suma es "+num3+" y es menor a 50");
        }
    }
    else if ( num1 > num2){
        num3 = num1/num2;
        alert(num3);
    }

}
