'use strict';

function Person(name){
    this.name = name;
    let firstName = name;

    //public
    this.show = function(){
        console.log(`show name:${this.name}`);
    }
    //private
    function print(){
        console.log(`print name:${name}`);
    };
    print();
}

Person.prototype.getName = function (){
    // console.log(`private:${firstName}`);
    return this.name;
}

const anna = new Person('Anna');

console.log(anna.name);
console.log(anna.firstName);

anna.show();

console.log(`Person:${anna.getName()}`)
