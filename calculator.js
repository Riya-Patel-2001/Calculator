var $ = function(id) { return document.getElementById(id); };

var mainDisplay = "";
var num1 = 0.00;
var operation = "";
var lastNum = "0";

var numbersHandler = function(number){
    if($("result").value == "0"){
        $("result").value = number;
        lastNum = number;
    }
    else{
        $("result").value = $("result").value + number;
        lastNum += number;
    }
}

var signHandler = function(sign){
    lastNum = "";
    if($("result").value == "0"){
        $("result").value = sign;
    }
    else{
        $("result").value = $("result").value + sign;
    }
}

var sin = function(){
    $("result").value = Math.sin(parseFloat($("result").value));
    mainDisplay = "0";
}

var cos = function(){
    $("result").value = Math.cos(parseFloat($("result").value));
    mainDisplay = "0";
}

var tan = function(){
    $("result").value = Math.tan(parseFloat($("result").value));
    mainDisplay = "0";
}

var log = function(){
    $("result").value = Math.log(parseFloat($("result").value));
    mainDisplay = "0";
}

var sqrt = function(){
    $("result").value = Math.sqrt(parseFloat($("result").value));
    mainDisplay = "0";
}

var exp = function(){
    if($("result").value == "0"){
        $("result").value = Math.exp(1);
    }
    else{
        $("result").value = $("result").value + Math.exp(1);
    }
    mainDisplay = "0";
}

var pi = function(){
    if($("result").value == "0"){
        $("result").value = Math.PI.toFixed(8);
    }
    else{
        $("result").value = $("result").value + Math.PI.toFixed(8);
    }
}

var plusMinus = function(){
    if(lastNum != "0"){
        var ln = lastNum.length;
        mainDisplay = $("result").value;
        mainDisplay = mainDisplay.substr(0, mainDisplay.length-ln);

        if(lastNum.startsWith(" -")){
            lastNum = lastNum.replace(" -","");
        }
        else{
            lastNum = " -" + lastNum;
        }

        mainDisplay += lastNum;
        $("result").value = mainDisplay;
    }
}

var clear = function(){
    mainDisplay = "0";
    $("result").value = mainDisplay;
    lastNum = "0";
}

var backspc = function(){
    mainDisplay = $("result").value;
    if(mainDisplay.length == 1){
        mainDisplay = "0";
    }
    else{
        mainDisplay = mainDisplay.substr(0, mainDisplay.length-1);
    }
    $("result").value = mainDisplay;  
}

var equal = function(){
    mainDisplay = $("result").value;
    for (var i = 0; i < mainDisplay.length; i++) {
        var ch = mainDisplay.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch!= ")" && ch != "%" && ch != " ") {
                alert("invalid entry!");
                return;
            }
        }
    }
    $("result").value = eval(mainDisplay);
    mainDisplay = "0";
}

window.onload = function(){
    $("result").value = "0";
    $("btn0").onclick = function(){numbersHandler("0");}  
    $("btn1").onclick = function(){numbersHandler("1");}
    $("btn2").onclick = function(){numbersHandler("2");}
    $("btn3").onclick = function(){numbersHandler("3");}
    $("btn4").onclick = function(){numbersHandler("4");}  
    $("btn5").onclick = function(){numbersHandler("5");} 
    $("btn6").onclick = function(){numbersHandler("6");}  
    $("btn7").onclick = function(){numbersHandler("7");}
    $("btn8").onclick = function(){numbersHandler("8");}
    $("btn9").onclick = function(){numbersHandler("9");} 
    $("plus").onclick = function(){signHandler("+");} 
    $("minus").onclick =  function(){signHandler("-");} 
    $("multiply").onclick =  function(){signHandler("*");} 
    $("divide").onclick =  function(){signHandler("/");} 
    $("perct").onclick =  function(){signHandler("%");} 
    $("btnopenpr").onclick =  function(){signHandler("(");} 
    $("btnclosepr").onclick =  function(){signHandler(")");} 
    $("btndecimal").onclick =  function(){numbersHandler(".");} 
    $("plusminus").onclick =  plusMinus;
    $("sin").onclick = sin;
    $("cos").onclick = cos;
    $("tan").onclick = tan;
    $("log").onclick = log;
    $("sqrt").onclick = sqrt;
    $("expt").onclick = exp;
    $("equal").onclick = equal;
    $("clr").onclick = clear;
    $("pi").onclick = pi;
    $("backspace").onclick = backspc;
}