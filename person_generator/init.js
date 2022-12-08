window.onload = function () {
    const person = personGenerator.getPerson();

    document.querySelector("#firstName").innerText = person.firstName;
    document.querySelector("#surname").innerText = person.surname;
    document.querySelector("#middleName").innerText = person.middleName;
    document.querySelector("#gender").innerText = person.gender;
    document.querySelector("#birthday").innerText = person.birthday;
    
}