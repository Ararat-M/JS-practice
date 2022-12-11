const personGenerator = {
    surnameJson: `{
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семенов",
            "id_13": "Славин",
            "id_12": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    maleFirstNameJson: `{
        "count": 16,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Алексей",
            "id_11": "Андрей",
            "id_12": "Вадим",
            "id_13": "Олег",
            "id_14": "Сергей",
            "id_15": "Илья",
            "id_16": "Матвей"
        }
    }`,

    femaleFirstNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Алиса",
            "id_3": "Инна",
            "id_4": "Александра",
            "id_5": "Анастасия",
            "id_6": "Елена",
            "id_7": "Кира",
            "id_8": "Елизавета",
            "id_9": "Анна",
            "id_10": "Виктория"
        }
    }`,

    femaleProfessionJson: `{
        "count": 10,
        "list": {
            "id_1": "Секретарь",
            "id_2": "Повар",
            "id_3": "Программист",
            "id_4": "Менеджер",
            "id_5": "Тренер",
            "id_6": "Врач",
            "id_7": "Водитель",
            "id_8": "Продавец",
            "id_9": "Садовод",
            "id_10": "Режиссер"
        }
    }`,

    maleProfessionJson: `{
        "count": 15,
        "list": {
            "id_1": "Секретарь",
            "id_2": "Повар",
            "id_3": "Программист",
            "id_4": "Менеджер",
            "id_5": "Тренер",
            "id_6": "Врач",
            "id_7": "Водитель",
            "id_8": "Продавец",
            "id_9": "Садовод",
            "id_10": "Режиссер",
            "id_11": "Слесарь",
            "id_12": "Шахтер",
            "id_13": "Литейщик",
            "id_14": "Строитель",
            "id_15": "Сталевар"
        }
    }`,

    GENDER_MALE: "Мужчина",
    GENDER_FEMALE: "Женщина",

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function (json) {
        return this.randomValue(json);
    },

    randomSurname: function () {
        return this.randomValue(this.surnameJson);
    },

    randomMiddleName: function (gender) {
        let middleName = this.randomFirstName(this.maleFirstNameJson);
        let lastSymbol = middleName[middleName.length - 1];
        
        if (middleName == "Михаил") {
            middleName = "Михайл"
        }

        if (gender == this.GENDER_MALE) {

            if (lastSymbol == "й" || lastSymbol == "ь") {
                middleName = middleName.slice(0, -1) + "евич";
            }else if (lastSymbol == "а" || lastSymbol == "я") {
                middleName = middleName.slice(0, -1) + "ич";
            }else {
                middleName += "ович";
            }

        }

        if (gender == this.GENDER_FEMALE){

            if (lastSymbol == "й" || lastSymbol == "ь") {
                middleName = middleName.slice(0, -1) + "евна";
            }else if (lastSymbol == "а") {
                middleName = middleName.slice(0, -1) + "ична";
            }else if (lastSymbol == "я") {
                middleName = middleName.slice(0, -1) + "инична";
            }else {
                middleName += "овна";
            }

        }

        return middleName;
    },
    
    randomBirthday: function () {
        let minDate = new Date(1970,0,1)
        let maxDate = new Date(2001,0,0)

        let totalDays = Math.floor((maxDate - minDate)/8.64e+7); // промежуток времени между maxDate и minDate в днях
        let randomDay = this.randomIntNumber(totalDays, 0);
        let birthday = new Date(minDate.getFullYear(), 0, randomDay);

        // форматирование дат
        let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        };

        return birthday.toLocaleString("ru", options);
    },

    randomProfession: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.maleProfessionJson);
        } else {
            return this.randomValue(this.femaleProfessionJson);
        }
    },

    getPerson: function () {
        this.person = {};

        (this.randomIntNumber() == 1) ? this.person.gender = this.GENDER_MALE : this.person.gender = this.GENDER_FEMALE;

        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName(this.maleFirstNameJson);
        } else {
            this.person.firstName = this.randomFirstName(this.femaleFirstNameJson);
        }
        
        if (this.person.gender == this.GENDER_MALE) {
            this.person.surname = this.randomSurname();
        } else {
            this.person.surname = this.randomSurname() + "a";
        }
        
        this.person.middleName = this.randomMiddleName(this.person.gender)

        this.person.profession = this.randomProfession(this.person.gender);

        this.person.birthday = this.randomBirthday();

        return this.person;
    }
}