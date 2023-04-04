// 1: OR Operator
function willEat(hasPizza, hasDonuts, hasCookies) {
    return hasPizza | hasDonuts | hasCookies
}

//2: Default Operator
function double(x) {
    return (x || 0)*2;
}

// 3: AND Operator
function canBreathe(isConnected, hasOxygen, aboveWater) {
    return (isConnected && hasOxygen) || aboveWater;
}

// 4: Guard Operator
function friendName(friend) {
    return  friend && friend.name;
}

// 5: NOT Operator
function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (bCrossing && !aCrossing);
}

// 1: Throw an Error
function throwError() {
    throw new Error("Bad, no good!");
}

// 2: Catch An Error
function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        
    }
}

//3: Return Error
function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        return ex;
    }
    return false;
}

//4: Start an Error
function startError() {
    let x = 3;
    x();
}

