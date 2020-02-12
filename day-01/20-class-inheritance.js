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

function User(name,mail){
    // super(name)
    Person.call(this,name);
    this.mail = mail;
}

User.prototype = Object.create(Person.prototype);

const anna = new User('Anna','anna@no.com');

console.log(`${anna.getName()} ${anna.mail}`);

anna.show();