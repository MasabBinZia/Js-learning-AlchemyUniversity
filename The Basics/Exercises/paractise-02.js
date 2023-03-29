// 1: Shortest String
function shortestString(str1, str2) {
    if (str1.length < str2.length) {
        return str1;
    } else {
        return str2;
    }
}

//1: Half Value
function halfValue(numbers) {
    const newArr = [];
    
    for(let i = 0; i < numbers.length; i++) {
        newArr[i] = Math.round(numbers[i] / 2);
    }

    return newArr;
}

// 1: Count C
function countC(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === "c") {
            count++;
        }
    }

    return count;
}