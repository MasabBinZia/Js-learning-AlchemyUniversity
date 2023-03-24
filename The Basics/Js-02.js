// 1: Starts With X
function startsWithX(string) {
    if(string[0].toLowerCase() === "x") {
        return true;
    }
    return false;
}

//2: Ends With X
function endsWithX(string) {
    if(string[string.length - 1].toLowerCase() === "x") {
        return true;
    }
    return false;
}

// 3: Is All X
function isAllX(string) {
    for(let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}

// 4: Find First X
function findFirstX(string) {
    return string.indexOf('x');
}

// 5: Split at X
function splitAtX(string) {
    const index = string.indexOf('x');
    const a = string.slice(0,index);
    const b = string.slice(index+1);
    return (a.length > b.length) ? a : b;
}

// 6:Create Array
const array = [1,2,3];

//7:Has One
function hasOne(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 1) {
            return true;
        }
    }
    return false;
}

//8:Sum Even
function sumEven(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

//9: Unique
function unique(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    }
    return newArray;
}

// 10. Add One
function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i]++;
    }
}

// 11. Remove Occurences
function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}

// 12.Pizza Order
const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};

//13.How Many Pizzas
function numberOfPizzas(order) {
    return order['pizzas'];
}


