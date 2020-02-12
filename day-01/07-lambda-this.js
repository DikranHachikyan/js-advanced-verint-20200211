'use strict';

const retThis = () => {
    return this;
};

const obj1 = {
    name: 'object 1',
    foo: retThis
};


console.log(obj1.foo() === obj1);

const obj2 = {
    name: 'object 2'
};

console.log( retThis.apply(obj2) === obj2);
console.log(retThis() === undefined);
console.log(retThis());
console.log(obj1.foo());


