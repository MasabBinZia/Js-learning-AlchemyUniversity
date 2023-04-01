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

// 1: Count Vowels
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) count++;
    }

    return count;
}

//1: Reverse
function reverse(string) {
    let newStr = "";

    for(let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

//1: Palindrome
function isPalindrome(string) {
    return string === reverse(string);
}

function reverse(string) {
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

// 1: Sum Together
function sumTogether(arr1, arr2) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        newArr.push(sum);
    }

    return newArr;
}

//1: Count the Elements
function countElements(elements) {
    let elementCount = {};
    for(let i = 0; i < elements.length; i++) {
        if(!elementCount[elements[i]]) {
            elementCount[elements[i]] = 1;
        } else {
            elementCount[elements[i]] += 1;
        }
    }

    return elementCount;
}
