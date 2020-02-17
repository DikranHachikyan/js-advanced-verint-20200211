const anna = {
    firstName: 'Anna',
    lastName:'Anders',
    [Symbol('pass')]:'123',
    set personName(name){
        this.firstName = name;
    },
    get age(){
        return 30;
    },
    show: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    } 
};

// console.log(anna);
console.log(anna.age);

const props = Object.getOwnPropertyDescriptors(anna);
// console.log('props:',props);

// const user = Object.assign({},anna);
// const user = {...anna};

const user = Object.defineProperties({id:101, firstName:'Maria'}, Object.getOwnPropertyDescriptors(anna));
console.log('user:',user);

