/*//Calculadora com as 4 operações básicas
function Calculadora(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(num1) + operador + parseInt(num2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}
//Potência
function Potencia(){
    num = document.getElementById("num").value;
    elevado = document.getElementById("elevado").value;
    resultado = parseInt(Math.pow(num, elevado));
    document.getElementById("resultado-potencia").innerHTML = resultado;
}
//Raiz
function Raiz(){
    num = document.getElementById("numraiz").value;
    resultado = parseInt(Math.sqrt(num));
    document.getElementById("resultado-raiz").innerHTML = resultado;
}
//Área
function Area(){
    b = document.getElementById("b").value;
    h = document.getElementById("h").value;
    resultado = eval(parseInt((b * h)/ 2));
    document.getElementById("resultado-area").innerHTML = resultado;
}
//Bhaskara
function Quadratica(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    delta = eval(parseInt(Math.pow(b,2) -4 * a * c));
    resultado1 = eval(parseInt((-b + Math.sqrt(delta))/ 2 * a));
    resultado2 = eval(parseInt((-b - Math.sqrt(delta))/ 2 * a));
    document.getElementById("resultado-bhaskara1").innerHTML = resultado1;
    document.getElementById("resultado-bhaskara2").innerHTML = resultado2;
}*/












function Calculadora(){
    //Calculadora com as 4 operações básicas
    function operador(){
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;

        operador = document.querySelector("input[name=opt]:checked").value;

        resultado = eval(parseInt(num1) + operador + parseInt(num2));

        document.getElementById("mostrar-resultado").innerHTML = resultado;
    }

    //Potência
    function Potencia(){
        num = document.getElementById("num").value;
        elevado = document.getElementById("elevado").value;
        resultado = parseInt(Math.pow(num, elevado));

        document.getElementById("resultado-potencia").innerHTML = resultado;
    }

    //Raiz
    function Raiz(){
        num = document.getElementById("numraiz").value;
        resultado = parseInt(Math.sqrt(num));

        document.getElementById("resultado-raiz").innerHTML = resultado;
    }

    //Área
    function Area(){
        b = document.getElementById("b").value;
        h = document.getElementById("h").value;

        resultado = eval(parseInt((b * h)/ 2));

        document.getElementById("resultado-area").innerHTML = resultado;
    }

//Bhaskara
    function Quadratica(){
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;

        delta = eval(parseInt(Math.pow(b,2) -4 * a * c));


        resultado1 = eval(parseInt((-b + Math.sqrt(delta))/ 2 * a));
        resultado2 = eval(parseInt((-b - Math.sqrt(delta))/ 2 * a));

        document.getElementById("resultado-bhaskara1").innerHTML = resultado1;
        document.getElementById("resultado-bhaskara2").innerHTML = resultado2;
    }
}