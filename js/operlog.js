function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDate()+"/"+(fecha.getUTCMonth()+1)+"/"+fecha.getFullYear();
    return cadena
}
document.getElementById("fecha").innerHTML= muestraFecha();

function muestraHora(){
let hora;
hora=new Date();
let cadena= hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
return cadena 
}
document.getElementById("hora").innerHTML= muestraHora();

function ecuacion(){
    resultados = document.getElementById("raices");

    var a = Number(document.rellenar.vc.value);
    var b = Number(document.rellenar.vl.value);
    var c = Number(document.rellenar.vi.value);
    var d;

    if (a==0)
    {
        var x1= (-c)/b;
        var x2=0;
    }
    else{
        d=b*b-4*a*c;
        if(d>0)
        {
            var x1 = (-b+(Math.sqrt(d)))/(2*a);
            var x2 = (-b-(Math.sqrt(d)))/(2*a);
        }
        if(d==0)
        {
            var x1= (-b)/2*a;
            var x2= (-b)/2*a;
        }
        if (d<0)
        {
            alert("Las raices solo existen en Narnia...");
        }
    }

    document.getElementById("x1").value = Number(x1.toFixed(2));
    document.getElementById("x2").value = Number(x2.toFixed(2));

}

function validanumero(elemento){
    if (!/^([0-9\-])*$/.test(elemento.value)){
        alert("Ingrese solo numeros");
        elemento.value = '';
    }
}




