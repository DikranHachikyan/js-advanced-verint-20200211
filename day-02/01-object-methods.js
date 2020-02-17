const user = {
    firstName: 'Anna',
    lastName:'Anders',
};

const ents = Object.entries(user);
console.log(ents);
for ( const [key,value] of ents){
    console.log(`key:${key} value:${value}`);
}
// TypeError: user is not iterable
// console.log('-----');
// for ( const v of user){
//     console.log(v);
// }
// console.log('-------');

for( const v in user){
    console.log(user[v]);
}

const names = ['anna','maria','markus','jorg'];
const ents2 = Object.entries(names);
console.log(ents2);

// const password1 = Symbol.for('password');
// const password2 = Symbol.for('password');
//true
// console.log('password1 === password2:',password1 === password2);

const password1 = Symbol('password');
// const password2 = Symbol('password');
// false
// console.log('password1 === password2:',password1 === password2);

const user2 = {
    firstName: 'Anna',
    lastName:'Anders',
    [password1]:'123pass',
};

const anna = Object.entries(user2);
console.log(anna);
console.log(user2[password1]);

const arr = [['firstname','John'],['mail','john@no.com'],['age',30]];

const john = Object.fromEntries(arr);
console.log(john);

const values = Object.values(user2);
console.log(values);