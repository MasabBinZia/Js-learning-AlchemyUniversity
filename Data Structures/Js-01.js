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