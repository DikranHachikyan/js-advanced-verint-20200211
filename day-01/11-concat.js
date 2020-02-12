'use strict';

const arr = [11,12,45,67,8,9,10];
const two = [...arr];
const values = [5,4,3,2,1];

console.log(two);

arr.push(...values);
console.log(arr);

const concat = [...values, ...two];
console.log(concat);