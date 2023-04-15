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