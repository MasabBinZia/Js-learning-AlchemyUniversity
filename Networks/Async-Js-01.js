//1: Run Callback
function runCallback(callbackFunction) {
    callbackFunction();
}

//2: Run Callback Async
function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}

//3: Dialog Callback
class Dialog {
    constructor() {
        
    }
    close() {
        this.callbackFunction();
    }
    onClose(callbackFunction) {
        this.callbackFunction = callbackFunction;
    }
}

// 4: Dialog Callbacks
class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}


// 5: For Each Callback
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

// 6: Map Callback
function map(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i], i);
    }
    return newArr;
}
