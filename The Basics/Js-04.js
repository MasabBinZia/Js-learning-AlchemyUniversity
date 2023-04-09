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

