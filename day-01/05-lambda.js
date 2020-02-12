'use strict';

const getRandom = ()=>Math.random() * 100;

const getRandn = n=>Math.random() * n;

const sum = (a,b) => {
    return a+b;
};

console.log(`random num:${getRandom()}`);
console.log(`random num:${getRandn(1000)}`);
console.log(`sum:${sum(10,20)}`);

