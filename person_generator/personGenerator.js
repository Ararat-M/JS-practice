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
        "count": 10,
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
            "id_10": "Андрей"
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

    middleNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Иванович",
            "id_2": "Васильевич",
            "id_3": "Петрович",
            "id_4": "Михайлович",
            "id_5": "Федорович",
            "id_6": "Николаевич",
            "id_7": "Семенович",
            "id_8": "Степанович",
            "id_9": "Павлович",
            "id_10": "Александрович"
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
        middleName = this.randomFirstName(this.middleNameJson)

        if (gender == this.GENDER_FEMALE) {
            middleName = middleName.slice(0, -2) + "на";
        }

        return middleName;
    },
    
    randomBirthday: function () {
        let minDate = new Date(1970,0,1)
        let maxDate = new Date(2010,0,0)

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

        this.person.birthday = this.randomBirthday();


        return this.person;
    }
}