'use strict';

const value = 1;

// value = 2;

const array = [1,2,30];
const user = {
    name:'Anna',
    mail:'anna@no.com'
};

console.log(`array ${array}`);
console.log(`user `,user);

array.push(100);
array.shift();

delete user.mail;
user.age = 34;

console.log(`user `,user);
console.log(`array ${array}`);

// array = [1000,2000];
// user = {};

