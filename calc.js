function limpiar(){
    document.getElementById("formulario").reset();
}

function sumar(){
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("El resultado es").innerHTML = x+y;
    alert(x+y);
   
}

function restar(){
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("El resultado es").innerHTML = x-y;
    alert(x-y);
}

function multiplicar(){
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("El resultado es").innerHTML = x*y;
    alert(x*y);
}

function dividir(){
    var x = parseInt(document.getElementById("valor1").value);
    var y = parseInt(document.getElementById("valor2").value);
    document.getElementById("El resultado es").innerHTML = x/y;
    alert(x/y);
}
