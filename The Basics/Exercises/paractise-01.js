// 10.isEven
function isEven(num) {
    return num % 2 === 0;
}

// 11. Smaller Number
function smallerNumber(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

// 12.Interpolate Name
const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

// 13.Check Number
function checkNumber(num) {

if(num>0){
   return "positive"
}if(num<0){
    return "negative"
}else{
    return "zero"
}
}

// 14.Total Sum
function maxSum(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum+= i;
    }
    return sum;
}

// 15.Starts With Casing
function startsWithX(string) {
    if(string[0] === "x") {
        return true;
    }
    return false;
}
