// 1: Either Not Both
function eitherNotBoth(num) {
    if ((num % 3 === 0 && num % 5 !== 0) || (num % 5 === 0 && num % 3 !== 0)) {
        return true;
    } else {
        return false;
    }
}

// 1: Fizz Buzz
function fizzBuzz(numbers) {
    let str = "";
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 3 === 0) {
            str += "fizz";
        }  
        if (number % 5 === 0) {
            str += "buzz";
        } 
    }
    return str;
}