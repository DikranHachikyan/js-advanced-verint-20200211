'use strict';

const users = ['Anna','Markus','Jane','Maria', 'Florian'];

const [first, ...rest] = users;

console.log(`first:${first}`);
console.log(`is array:${Array.isArray(rest)}`);

const [head, ...tail] = rest;

console.log(`head:${head}`);
console.log(`is array:${Array.isArray(tail)}`);

const [a,b,c,d, e='nobody'] = users;

console.log(`${a} ${b} ${c} ${d} ${e}`);
