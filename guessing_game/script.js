let gameRun = false;
let questionNumber = 1;
let minValue = null;
let maxValue = null;
let meanNumber = null;
let answerField = document.querySelector("#answerField");
let modalLabel_3 = document.querySelector("#modalLabel_3");

// Кнопка "Далее" модального окна
document.querySelector("#modalBtnContinue").addEventListener("click", function () {
    minValue = parseInt(document.querySelector("#minValueInput").value);
    (minValue < -999 || isNaN(minValue)) ? minValue = -999 : minValue = minValue
})

// Кнопка "Играть!" модального окна
document.querySelector("#modalBtnPlay").addEventListener("click", function () {
    gameRun = true;
    document.querySelector("#questionNumber").innerText = questionNumber = 1;
    
    maxValue = parseInt(document.querySelector("#maxValueInput").value);
    (maxValue > 999 || isNaN(maxValue)) ? maxValue = 999 : maxValue = maxValue

    if (maxValue < minValue) {
        modalLabel_3.innerText = "Ваше минимально число больше максимального";
        answerField.innerText = `Угадайка!`;
        gameRun = false;
    } else {
        if ((maxValue - minValue) <= 1) {
            modalLabel_3.innerText = "Диапазон чисел слишком маленький";
            answerField.innerText = `Угадайка!`;
            gameRun = false;
        } else {
            modalLabel_3.innerText = `Загадайте число от ${minValue} до ${maxValue}`;
            meanNumber = Math.floor((maxValue - minValue)/2 + minValue);
            answerShow(meanNumber);
        }
    }
})

// Функция вывода ответа пользователю
function answerShow(answer) {
    let answerPhrase = Math.round(Math.random() * 2);
    let answerStr = answerToText(answer);
    
    switch (answerPhrase) {
        case 0:
            if (answerStr.length <= 20) {
                answerField.innerText = `Вы загадали число ${answerStr}?`;
            } else {
                answerField.innerText = `Вы загадали число ${answer}?`;
            }
            break;

        case 1:
            if (answerStr.length <= 20) {
                answerField.innerText = `Я думаю... это число ${answerStr}?`;
            } else {
                answerField.innerText = `Я думаю... это число ${answer}?`;
            }
            break;

        case 2:
            if (answerStr.length <= 20) {
                answerField.innerText = `Да это легко! Ты загадал ${answerStr}?`;
            } else {
                answerField.innerText = `Да это легко! Ты загадал ${answer}?`;
            }
            break;
    }
}

// Кнопка "Больше"
document.querySelector("#btnMore").addEventListener("click", function () {
    if (gameRun) {
        minValue = meanNumber;
        meanNumber = Math.floor((maxValue - minValue)/2 + minValue);
        
        if (meanNumber == minValue) {
            gameRun = false
            answerField.innerText = "Вы загадали неверное число"
        }else {
            answerShow(meanNumber);
            document.querySelector("#questionNumber").innerText = ++questionNumber;
        }
    }
})

// Кнопка "Меньше"
document.querySelector("#btnLess").addEventListener("click", function () {
    if (gameRun) {
        maxValue = meanNumber;
        meanNumber = Math.floor((maxValue - minValue)/2 + minValue);

        if (meanNumber == minValue) {
            gameRun = false
            answerField.innerText = "Вы загадали неверное число"
        } else {
            answerShow(meanNumber);
            document.querySelector("#questionNumber").innerText = ++questionNumber;
        }
    }
})

// Кнопка "Верно"
document.querySelector("#btnEquals").addEventListener("click", function () {
    if (gameRun) {
        let successPhrase = Math.round(Math.random() * 2);
        switch (successPhrase) {
            case 0:
                answerField.innerText = "Я угадал! Спасибо за игру";
                break;
                
            case 1:
                answerField.innerText = "Я всегда угадываю\n\u{1F610}";
                break;
    
            case 2:
                answerField.innerText = "Это было легко \n\u{1F642}";
                break;
        }
        gameRun = false;
    }
})

// Словари для функции answerToText(number)
let numbersFirstRank = new Map();
numbersFirstRank.set("1", "один").
    set("2", "два").
    set("3", "три").
    set("4", "четыре").
    set("5", "пять").
    set("6", "шесть").
    set("7", "семь").
    set("8", "восемь").
    set("9", "девять").
    set("10", "десять").
    set("11", "одиннадцать").
    set("12", "двенадцать").
    set("13", "тринадцать").
    set("14", "четырнадцать").
    set("15", "пятнадцать").
    set("16", "шестнадцать").
    set("17", "семнадцать").
    set("18", "восемнадцать").
    set("19", "девятнадцать");

let numbersSecondRank = new Map();
numbersSecondRank.set("2", "двадцать").
    set("3", "тридцать").
    set("4", "сорок").
    set("5", "пятьдесят").
    set("6", "шестьдесят").
    set("7", "семьдесят").
    set("8", "восемьдесят").
    set("9", "девяносто");

let numbersThirdRank = new Map();
numbersThirdRank.set("1", "сто").
    set("2", "двести").
    set("3", "триста").
    set("4", "четыреста").
    set("5", "пятьсот").
    set("6", "шестьсот").
    set("7", "семьсот").
    set("8", "восемьсот").
    set("9", "девятьсот");

// Текстовое представление числа на русском языке 
function answerToText(number) {
    let negative = false;
    if (number < 0) {
        negative = true;
        number = Math.abs(number);
    } else if (number == 0) {
        return "ноль"
    }
    
    let rank = 0;
    if (number >= 100 && number <= 999) {
        rank = 3;
    } else if (number >= 20 && number <= 99) {
        rank = 2;
    } else if (number > 0 && number <= 19) {
        rank = 1;
    }

    let completeNumber = "";
    let numberStr = number.toString();
    switch (rank) {
        case 1:
            for (let[key, value] of numbersFirstRank) {
                if (number == key) {
                    completeNumber += value;
                }
            }
            break;

        case 2:
            for (let[key, value] of numbersSecondRank) {
                if (numberStr[0] == key) {
                    completeNumber += value + " ";
                }
            }
            for (let[key, value] of numbersFirstRank) {
                if (numberStr[1] == key) {
                    completeNumber += value;
                }
            }
            break;

        case 3:
            for (let[key, value] of numbersThirdRank) {
                if (numberStr[0] == key) {
                    completeNumber += value + " ";
                }
            }
            for (let[key, value] of numbersSecondRank) {
                if (numberStr[1] == key) {
                    completeNumber += value + " ";
                }
            }
            for (let[key, value] of numbersFirstRank) {
                if (numberStr[2] == key) {
                    completeNumber += value;
                }
            }
            break;

        default:
            break;
    }
    
    if (negative) {
        return "минус " + completeNumber;
    } else {
        return completeNumber;
    }
}