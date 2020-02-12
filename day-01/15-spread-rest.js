'use strict';

const onlyRest = (teacher, ...students)=>{
    return [ teacher, students.sort()];
}

const restAndSpread = (teacher, ...students)=>{
    return [ teacher, ...students.sort()];
}

console.log(onlyRest('Anna','Maria','Markus','Jane'));
console.log(restAndSpread('Anna','Maria','Markus','Jane'));