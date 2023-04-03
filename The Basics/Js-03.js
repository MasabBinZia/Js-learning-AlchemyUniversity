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

// 