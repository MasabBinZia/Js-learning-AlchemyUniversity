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

// 1: Push & Pop

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

// 2: Overflow & Underflow
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

//3: IsEmpty & Peek
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

// 4: Operations Manager
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {

    }

    redo() {

    }
}


// 5: Undo & Redo
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const operation = this.operations.pop();
        this.undos.push(operation);
    }

    redo() {
        const operation = this.undos.pop();
        this.operations.push(operation);
    }
}

module.exports = OperationManager;
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;

// 6: Redo All
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const operation = this.operations.pop();
        this.undos.push(operation);
    }

    redo() {
        const operation = this.undos.pop();
        this.operations.push(operation);
    }

    redoAll() {
        while(!this.undos.isEmpty()) {
            this.redo();
        }
    }
}

module.exports = OperationManager;
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) {
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;

// 1: Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 2: Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 3: Add First
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 4: Add Last
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node;
            return;
        }
        
        let ref = this.head;
        while (ref.next) ref = ref.next;
        ref.next = node;
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 5: Index Of
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node;
            return;
        }
        
        let ptr = this.head;
        while(ptr.next) ptr = ptr.next;
        ptr.next = node;
    }

    indexOf(node) {
        let idx = 0;
        let ptr = this.head;

        do {
            if(ptr === node) {
                return idx;
            }
            ptr = ptr.next;
            idx++;
        }
        while(ptr)
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 6: Remove At
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node;
            return;
        }
        
        let ptr = this.head;
        while(ptr.next) ptr = ptr.next;
        ptr.next = node;
    }

    indexOf(node) {
        let idx = 0;
        let ptr = this.head;

        do {
            if(ptr === node) {
                return idx;
            }
            ptr = ptr.next;
            idx++;
        }
        while(ptr)
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let idx = 0;
        let node = this.head;

        while(idx < (index - 1)) {
            node = node.next;
            idx++;
        }

        node.next = node.next.next;
    }
}
