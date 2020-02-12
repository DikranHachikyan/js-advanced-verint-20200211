'use strict';

class Person {
    static rand_value = 100;

    //инициализация на данните на класа
    constructor(firstName,lastName){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = 30;
        console.log('constructor');
    }

    show(){
        console.log(`${this._firstName} ${this._lastName} age:${this._age}`);
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        if(!lastName) throw Error('Invalid last name!');
        this._lastName = lastName;
    }

    static foo(){
        return Math.random() * Person.rand_value;
    }
}

const anna = new Person('Anna','Smith');

anna.lastName = 'Anderson';

anna.show();

// anna.lastName = null;

console.log(`Random :${Person.foo()}`);