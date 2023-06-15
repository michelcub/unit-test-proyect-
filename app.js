const sum = (a,b) => a+b ;

console.log(sum(2,4));



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const convertEuroToUSD = (monto) => monto * 1.2;
const convertEuroToJPY = (monto) => monto * 127.9;
const convertEuroToGBP = (monto) => monto * 0.8;







module.exports = {sum, convertEuroToGBP, convertEuroToJPY, convertEuroToUSD};