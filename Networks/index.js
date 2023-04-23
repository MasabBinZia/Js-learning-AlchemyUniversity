const { faker } = require('@faker-js/faker');
const name = faker.name.findName();
const message = `Hello, ${name}!`;
console.log(message);