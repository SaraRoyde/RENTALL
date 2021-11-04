const item = {
    name: "",
    details: "",
    active: "",
    landlord: {
        name: "",
        email: ""
    },
    contact: {
        email1: "",
        email2: "",
        phone1: "",
        phone2: ""
    },
    images: [],
    category: "",
    subCategory: "",
    location: {
        locationX: 1,
        locationY: 1,
        location: ""
    },
    price: {
        year: [],
        month: [{
            amount: 3,
            price: 20
        }, {
            amount: 4,
            price: 30
        }],
        week: [],
        day: [],
        hour: [{
            amount: 1,
            price: 2
        }],
        minute: []
    }
};

const sysDatesList = ["year", "month", "week", "day", "hour", "minute"];

const user = {
    amount: 3,
    time: "week",
    price: 100
};

//-------

const validatePrice = (price) => {
    return price && typeof (price) === 'number' && price >= 0;
}

const validateItem = (item) => {
    return item && item.price;
}

const validateUserChoice = (userChoice) => {
    return userChoice && userChoice.amount && userChoice.time && sysDatesList.includes(userChoice.time) && validatePrice(userChoice.price);
}

const convertTime = (userChoice, convertTo) => {

    const convertedChice = userChoice;

    if (convertTo === userChoice.time) return userChoice;
    if (convertTo === "year") return userChoice;

    switch (userChoice.time) {
        case "year":
            convertedChice.amount *= 12;
            convertedChice.time = "month";
            if (convertTo === "month") break;

        case "month":
            convertedChice.amount *= 4;
            convertedChice.time = "week";
            if (convertTo === "week") break;

        case "week":
            convertedChice.amount *= 7;
            convertedChice.time = "day";
            if (convertTo === "day") break;

        case "day":
            convertedChice.amount *= 24;
            convertedChice.time = "hour";
            if (convertTo === "hour") break;

        case "hour":
            convertedChice.amount *= 60;
            convertedChice.time = "minute";
            break;
    }
    return convertedChice;
}

const getPricePerUserChoiceTime = (item, userChoice) => {

    if (validateItem(item) && validateUserChoice(userChoice)) {

        // let nearItemTime = nearTime(item, userChoice.time);
        // let powerOfDiff =1;
        // if(nearItemTime!=userChoice.time)
        //     powerOfDiff = convertTimeFromItemDetailsToUserChoice(nearItemTime, userChoice.time);
        // return item.price * powerOfDiff;



        //משתנה שמכיל את כל השעות שעוד לא טופלו
        const notDealedTimes = userChoice;
        let totalPrice = 0;

        //לולאה העוברת על כל הזמנים, ובכל אחת מהם מנסה להחזיר את כמות הזמן 
        for (let i = sysDatesList.indexOf(userChoice.time); i < sysDatesList.length; i++) {
            //מיון המחירים מהגדול לקטן, כך ברור שהערך שנבחר הוא הגבוה ביותר האפשרי
            const timeType = sysDatesList[i];

            item.price[timeType].sort((a, b) => b.amount - a.amount);

            const timeConverted = convertTime(notDealedTimes, timeType);
            notDealedTimes.amount = timeConverted.amount;
            notDealedTimes.time = timeConverted.time;

            item.price[timeType].forEach(timeline => {
                if (timeline.amount <= notDealedTimes.amount) {
                    let useTimeline = parseInt(notDealedTimes.amount / timeline.amount);
                    totalPrice += useTimeline * timeline.price;
                    notDealedTimes.amount -= useTimeline * timeline.amount;
                    notDealedTimes.price -= useTimeline * timeline.price;
                }
            });
        }
        if (notDealedTimes.amount > 0) {
            console.error('no option to get item for given timeline');
            return -1;
        }
        return totalPrice;
    } else {
        console.error('one or more of values sent to function getPrice(item, userChoice) is incorrect');
    }
    return -1;
}

//alert(getPricePerUserChoiceTime(item, user));

//console.log(convertTime(user,"hour"));