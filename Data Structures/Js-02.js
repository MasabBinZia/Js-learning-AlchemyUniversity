// 1: Base Case
function factorial(n) {
    if(n === 1) return 1; 
}

// 2: Second Case
function factorial(n) {
    if(n === 1) return 1; 

    return n * factorial(1);
}

// 3: Recursion
function factorial(n) {
    if(n === 1) return 1; 

    return n * factorial(n - 1);
}

// 4: Walk
function walk(node) {
    if (!node.next) return node; 
}

// 5: Walk Recursive
function walk(node) {
    if (!node.next) return node; 

    return walk(node.next);
}
