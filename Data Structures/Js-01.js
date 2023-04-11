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