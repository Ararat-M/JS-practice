let minValue = parseInt(prompt("Укажите минимальное число от -999"));
(minValue < -999 || isNaN(minValue)) ? minValue = -999 : minValue = minValue
console.log(minValue)
let maxValue = parseInt(prompt("Укажите максимальное число до 999"));
(maxValue > 999 || isNaN(maxValue)) ? maxValue = 999 : maxValue = maxValue
console.log(maxValue)

let meanNumber = Math.floor((maxValue - minValue)/2 + minValue);
let questionNumber = 1;
let gameRun = true;

let answerField = document.querySelector("#answerField");
answerField.innerText = `Вы загадали число ${meanNumber}?`;

document.querySelector("#btnMore").addEventListener("click", function(){
    if(gameRun){
        minValue = meanNumber;
        meanNumber = Math.floor((maxValue - minValue)/2 + minValue)
        answerField.innerText = `Вы загадали число ${meanNumber}?`;
        console.log(minValue, maxValue, meanNumber)
        document.querySelector("#questionNumber").innerText = ++questionNumber;
    }
})

document.querySelector("#btnLess").addEventListener("click", function(){
    if(gameRun){
        maxValue = meanNumber;
        meanNumber = Math.floor((maxValue - minValue)/2 + minValue)
        answerField.innerText = `Вы загадали число ${meanNumber}?`;
        console.log(minValue, maxValue, meanNumber)
        document.querySelector("#questionNumber").innerText = ++questionNumber;
    }
})

document.querySelector("#btnEquals").addEventListener("click", function(){
    answerField.innerText = `Я угадал! Спасибо за игру`;
    gameRun = false;
})

document.querySelector("#btnRetry").addEventListener("click", function(){
    minValue = parseInt(prompt("Укажите минимальное число от -999"));
    (minValue < -999 || isNaN(minValue)) ? minValue = -999 : minValue = minValue

    maxValue = parseInt(prompt("Укажите максимальное число до 999"));
    (maxValue > 999 || isNaN(maxValue)) ? maxValue = 999 : maxValue = maxValue

    meanNumber = Math.floor((maxValue - minValue)/2 + minValue);
    document.querySelector("#questionNumber").innerText = questionNumber = 1;
    gameRun = true;

    answerField.innerText = `Вы загадали число ${meanNumber}?`;
})
