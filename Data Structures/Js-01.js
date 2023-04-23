// 1: Numbers Ascending
function sortUp(array) {
    array.sort((a,b) => a-b);
}

// 2: Numbers Descending
function sortDown(array) {
    array.sort((a,b) => {
        return b - a;
    });
}

// 3: Strings Ascending
function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b);
    });
}

// 4: Strings Descending
function sortStringsDown(array) {
    array.sort((a,b) => {
        return b.localeCompare(a);
    });
}


// 5: Sort Students
function sortStudents(students) {
    students.sort((a,b) => {
        if (a.graduated && !b.graduated) {
            return -1;
        } 
        if (b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    });
}

// 6: Sort By Month
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(array) {
    array.sort((a,b) => {
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });
}

// 1: Plus One
function plusOne(arr) {
    return arr.map(x => x+1);
}

// 2: Square Root
function squareRoot(arr) {
    return arr.map(Math.sqrt);
}

//3: Squared
function squared(n) {
    return n * n;
}


// 4: Squared Map
const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(squared);
}

//5: Add Score
function addScore(players) {
    return players.map((x) => {
        x.score += 10;
        return x;
    });
}

//6: Add Score Index
function addScore(arr) {
    return arr.map((x, i) => {
        if(i <= 2) {
            x.score += 10;
        }
        return x;
    });
}

// 1: Less Than 5
function lessThanFive(array) {
    return array.filter((el) => {
        return el < 5;
    });
}


// 2: Only True
function onlyTrue(array) {
    return array.filter((el) => {
        return el;
    });
}

// 3: Short Strings
function shortStrings(array) {
    return array.filter((string) => {
        return string.length <= 3;
    });
}

// 4: Top Students
function topStudents(array) {
    return array.filter((student) => {
        return student.grade >= 90;
    });
}

// 5: First Three
function firstThree(array) {
    return array.filter((str, i) => {
        return i < 3;
    });
}

// 6: Unique
function unique(array) {
    return array.filter((str, i) => {
        return array.indexOf(str) === i;
    });
}

//1: Sum
// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
}

// 2: Largest
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue;
    });
}

// 3: Largest Positive
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue;
    }, 1);
}


// 4: Remove Duplicates
// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

// 5: Group
// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        accumulator[currentValue.type] = accumulator[currentValue.type] || []
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    }, {});
}


// 6: Is Unique
// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator) return false;
        return numbers.indexOf(currentValue) === index;
    }, true);
}