'use strict';

function *generateNumbers(){
    let i = 0;
    while(true){
        yield ++i;
        console.log(`after yield`);
    }
}

const nums = generateNumbers(); 

console.log(`value:` , nums.next());
console.log(`value: ${nums.next().value}`);
console.log(`value: ${nums.next().value}`);
console.log(`value: ${nums.next().value}`);
console.log(`value: ${nums.next().value}`);

nums.return();
console.log(`value:` , nums.next());

const values = generateNumbers();
console.log(`values: ${values.next().value}`);
