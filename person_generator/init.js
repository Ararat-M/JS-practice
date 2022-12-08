window.onload = function () {
    const person = personGenerator.getPerson();

    document.querySelector("#firstName").innerText = person.firstName;
    document.querySelector("#surname").innerText = person.surname;
    document.querySelector("#middleName").innerText = person.middleName;
    document.querySelector("#gender").innerText = person.gender;
    document.querySelector("#profession").innerText = person.profession;
    document.querySelector("#birthday").innerText = person.birthday;
    if (person.gender == personGenerator.GENDER_MALE) {
        document.querySelector(".person-card-top").style.backgroundImage = "url(./img/male-icon.svg)"
    } else {
        document.querySelector(".person-card-top").style.backgroundImage = "url(./img/female-icon.svg)" 
    }
    
}

document.querySelector("#btnGenerate").addEventListener("click", function () {
    onload();
})

document.querySelector("#btnClear").addEventListener("click", function () {
    document.querySelector("#firstName").innerText = "";
    document.querySelector("#surname").innerText = "";
    document.querySelector("#middleName").innerText = "";
    document.querySelector("#gender").innerText = "";
    document.querySelector("#profession").innerText = "";
    document.querySelector("#birthday").innerText = "";
    document.querySelector(".person-card-top").style.backgroundImage = "url()" 
})

