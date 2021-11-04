const itemsList = [
    {
        name: "",
        details: "", 
        active:"",
        landlord: {
            name:"",
            email:""
        },
        contact: {email1:"",email2:"",phone1:"",phone2:""},
        images: [],
        category: "",
        subCategory: "" , 
        location: {locationX: 1,locationY:1,location:""},
        price: {
            year: [{amount: 1, price: 200},{amount:2, price: 300}],
            month: [{amount: 1, price: 20},{amount: 2, price: 30}],
            day: [],
            hour:[{amount: 1,price: 2}],
            minute: []
        }
    },
    {
        name: "",
        details: "", 
        active:"",
        landlord: {
            name:"",
            email:""
        },
        contact: {email1:"",email2:"",phone1:"",phone2:""},
        images: [],
        category: "",
        subCategory: "" , 
        location: {locationX: 1,locationY:1,location:""},
        price: {
            year: [{amount: 1, price: 200},{amount:2, price: 300}],
            month: [{amount: 1, price: 20},{amount: 2, price: 30}],
            day: [],
            hour:[{amount: 1,price: 2}],
            minute: []
        }
    }
];
const validateCategory = () => {
    return true;
}

const validateSubCategory = () => { 
    return true;
}

const validateLocation = () => {
    return true;
}

const validateDistance = () => {
    return true;
}

const getDistance = () => {
    return 100;
}

const priceForTime = () => {

}

const comparePrices = (price1, price2) => {
    return 1;
}

const validateTime = (time) => {
    const timesList = ["year","month","day","hour","minute"];
    return timesList.includes(time);
}
//price list - רשימת המחירים לפריט הנוכחי
//price  - המחיר שהלקוח מוכן לשלם
//פורמט - LIST
/* 
price: {
    year: [{amount: 1, price: 200},{amount:2, price: 300}],
    month: [{amount: 1, price: 20},{amount: 2, price: 30}],
    day: [],
    hour:[{amount: 1,price: 2}],
    minute: []
} */
//פורמט - PRICE 
/* 
price : {
    amount: 1,
    time: "year",
    price: 200
}
*/
//פונקציה המקבלת פריט ובודקת כמה יעלה. 
//item:
/* 
price: {
            year: [{amount: 1, price: 200},{amount:2, price: 300},{amount:4, price: 600}],
            month: [{amount: 1, price: 20},{amount: 2, price: 30}],
            day: [],
            hour:[{amount: 1,price: 2}],
            minute: []
        }
*/
//userPrice: 
/*
price : {
    amount: 3,
    time: "year",
    price: 200
}
*/
//הפונקציה עובדת רק אם הזמן קיים. 

const getPrice = (item, userPrice)=> {
    if(item && userPrice && validateTime(item.price[userPrice.time])) {
        //מיון מחירים לפי כמות הזמן. 
        
        let userTime = userPrice.time;
        
        let userAmountLeft = userPrice.amount;
        let userPriceLeft = userPrice.price;
        let totalPrice = 0;
        item.price[userPrice.time].sort((a,b)=> b.amount - a.amount);
        // if(item.price[userPrice.time].length == 0 || item.price[userPrice.time][item.price[userPrice.time].length -1])
        //מחיר לפריט לזמן המבוקש
        item.price[userPrice.time].forEach(timeline => {
            
            if(userAmountLeft > 0 && timeline.amount <= userAmountLeft){
                let useTimeline = parseInt(userAmountLeft/timeline.amount);

                totalPrice += useTimeline * timeline.price;
                userAmountLeft -= (useTimeline * timeline.amount);
                userPriceLeft -= useTimeline * timeline.price;
                console.log(totalPrice,userAmountLeft,userPriceLeft)
                if(totalPrice > userPrice.price) return -1;
            }
        });
        return totalPrice > userPrice.price? -1 : totalPrice;
    }
    console.error('undefined parameter sent to getPrice(item, userPrice)');
    return -1;
}

    //TODO check how to implement not 100% match

//פונקציה לסינון הנתונים לפי ההגדרות שנשלחו. מחזירה את הערכים המתאימים ב100%
const getFilteredItemsByExactValuesTotalMatch = (category, subCategory, userLocation, distance, price) => {

    let filteredList = itemsList;
    
    if(validateCategory(category)){
        filteredList = filteredList.filter(item => item.category === category);
    }
    if(validateSubCategory(subCategory)){
        filteredList = filteredList.filter(item => item.subCategory === subCategory);
    }
    if(validateLocation(location) && validateDistance(distance)){
        filteredList = filteredList.filter(item => 
            getDistance(userLocation.locationX, userLocation.locationY, item.location.locationX, item.location.locationY) <= distance);
    }
    if(validatePriceList(price)){
        // פונקציה המחזירה האם קיים מחיר זול יותר ברשימת המחירים, עד לזמן המבוקש. אפ כן מחזיר מס' חיובי, אם אין מחזירה שלילי ואם קיים מחיר זהה- מחזירה 0 
        filteredList = filteredList.filter(item => compareAllPrices(item.price, price) >= 0);
    }

    return filteredList;
}