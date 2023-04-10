// 1: Using This
function thisName() {
    return this.name;
}

// 2: Binding This
function thisName() {
    return this.name;
}

module.exports = thisName.bind({ name: 'Bob' });

// 3: Implicit Binding
const obj = {
    name: 'Bob',
    getName: function () {
        return this.name;
    }
}

//4: Unbound Function
const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) => {
        this.age = age;
    });
}
//   fetch age
const celebrities = {
    'Will Smith': 51,
    'Matt Damon': 49,
}

function fetchAge(name, cb) {
    cb(celebrities[name]);
}

//1: Taking Shape
function Shape(x, y) {
    this.position = { x, y }
}

// 2: Move Shape
function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
}

// 3: Circle Shape
const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, /* pass arguments to shape */);
    // store radius on this
}
function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;
}

// 4: Move Circle
const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;
}

//5: Rectangle
const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;
}


// 6: Rectangle Flip
const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function() {
    const width = this.width;
    this.width = this.height;
    this.height = width;
}

function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;
}

//1: Hero
class Hero {
    constructor() {
        this.health = 50;
    }
}


// 2: Take Damage
class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}


// 3: Warrior
const Hero = require('./Hero');

class Warrior extends Hero {
    
}

class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}

// 4: Super Warrior
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor() {
        super();
        this.rage = 0;
    }
}

class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}

// 5: Building Rage
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor() {
        super();
        this.rage = 0;
    }

    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}

class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}

// 6: Passing Health
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        super(health);
        this.rage = 0;
    }

    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}
class Hero {
    constructor(health) {
        this.health = health;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}