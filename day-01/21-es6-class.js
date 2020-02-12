'use strict';

class Person {

    //инициализация на данните на класа
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = 30;
        console.log('constructor');
    }

    show(){
        console.log(`${this.firstName} ${this.lastName} age:${this._age}`);
    }

    getLastName(){
        return this.lastName;
    }

    setLastName(lastName){
        if(!lastName) throw Error('Invalid last name!');
        this.lastName = lastName;
    }

}

const anna = new Person('Anna','Smith');

anna.show();

console.log(`${anna.firstName} ${anna.lastName} age:${anna._age}`);

anna.setLastName('Anderson');

console.log(`${anna.firstName} ${anna.getLastName()} age:${anna._age}`);

anna.setLastName(null);