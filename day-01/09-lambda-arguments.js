'use strict';

function User(name){
    this.name = name;
}

const anna = new User('Anna');
console.log(anna);

const Person = (name)=>{
    this.name=name;
};

//TypeError: Person is not a constructor
// const maria = new Person('Maria');
// console.log(maria);

function foo(){
    return arguments;
}

console.log(foo(10,'Hello','JS',1000));

const arrow = ()=>arguments;
console.log(arrow(10,'Hello','JS',1000));

function show(a,b,c){

}

const lmb = (a,b,c)=>{

};

console.log(show.length);
console.log(lmb.length);
console.log(typeof show);
console.log(typeof lmb);

