'use strict';

function foo(a, b, ...c){
    console.log(arguments.length);
}

const show = (a,b,...c)=>{

}

console.log(foo.length);
console.log(show.length);

foo(1,2,10,20,30,40);