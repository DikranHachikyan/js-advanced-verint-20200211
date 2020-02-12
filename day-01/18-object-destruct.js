'use strict';

const user = {
    name:'anna',
    mail:'anna@no.com',
    age:23,
    country:'BG',
    city:'Plovdiv',
    code:'+0359'
};

// const person = {...user};
const {name,age,country,mail, city='Sofia'} = user;
console.log(`${name},${age},${country},${mail} city:${city}`);


// const {name:firstname,age:a,country:c,mail:m} = user;
// console.log(`${firstname},${a},${c},${m}`);
