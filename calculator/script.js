let calcWindow = document.querySelector(".display-calc-input");
let operand = 1;
let operation = null;

document.querySelector(".btn_C").addEventListener("click", function(){
    calcWindow.value = 0;
    secondOperand = 1;
});

document.querySelector(".btn_1").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 1;
});

document.querySelector(".btn_2").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 2;
});

document.querySelector(".btn_3").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 3;
});

document.querySelector(".btn_4").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 4;
});

document.querySelector(".btn_5").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 5;
});

document.querySelector(".btn_6").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 6;
});

document.querySelector(".btn_7").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 7;
});

document.querySelector(".btn_8").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 8;
});

document.querySelector(".btn_9").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 9;
});

document.querySelector(".btn_0").addEventListener("click", function(){
    if(calcWindow.value == "0")
    {
        calcWindow.value = "";
    }
    calcWindow.value += 0;
});

document.querySelector(".btn_sign").addEventListener("click", function(){
    calcWindow.value *= -1;
});

document.querySelector(".btn_sum").addEventListener("click", function(){
    operation = "sum";
    operand = calcWindow.value;
    calcWindow.value = 0;
});

document.querySelector(".btn_diff").addEventListener("click", function(){
    operation = "diff";
    operand = calcWindow.value;
    calcWindow.value = 0;
});

document.querySelector(".btn_mult").addEventListener("click", function(){
    operation = "mult";
    operand = calcWindow.value;
    calcWindow.value = 0;
});

document.querySelector(".btn_division").addEventListener("click", function(){
    operation = "division";
    operand = calcWindow.value;
    calcWindow.value = 0;
});

document.querySelector(".btn_equals").addEventListener("click", function(){
    console.log(operand);
    console.log(calcWindow.value);
    console.log(operation);
    
    if (operation == "sum"){
        calcWindow.value = parseInt(calcWindow.value) + parseInt(operand);
    }
    if (operation == "diff"){
        calcWindow.value = parseInt(calcWindow.value) - parseInt(operand);
    }
    if (operation == "mult"){
        calcWindow.value = parseInt(calcWindow.value) * parseInt(operand);
    }
    if (operation == "division"){
        calcWindow.value = parseInt(calcWindow.value) / parseInt(operand);
    }
});

