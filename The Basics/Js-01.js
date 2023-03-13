// 1.Intro to Js
const a = 3;

// 2.Multiple Variables
const q =4 ;
const b=q;

// 3.Booleans
const x=false;
const y =true ;

// 4.Strings
const a1 = "World";
const b1 = "Hello World";

// 5.Mutable Let
let a2 = 3;
a2 = 5;

// 6.Comments
     // all shoes are on sale this week!
const shoesCost = 49;

// 7.Floor
function getFloor(x) {
    let floor = Math.floor(x);
    return floor;
}

// 8.Else If
function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription){
        return true ;
    }else if (freeTrial){
      return true;
    }
    else{
        return false;
    }
}

//9.Top Double
   // determine the largest double of value 
   // that is less than the top 
function topDouble(value, top) {
    while(value < top) {
        value *= 2;
    }
    return value / 2;
}


