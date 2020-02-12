'use strict';

const createUser = (user,email,...skills) => {
    console.log(`User:${user}`);
    console.log(`email:${email}`);
    console.log(skills);
};

createUser('anna','anna@no.com');
createUser('markus','markus@no.com','c++','javascript','php','java');