'use strict';

const anna = {
    name: 'Anna',
    email:'anna@no.com'
};

const user = {
    ...anna,
    age:34,
    city:'sofia',
    ...{
        country:'BG',
        code: '+359'
    },
    country:'UK',
};

console.log(user);