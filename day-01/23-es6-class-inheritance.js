const {Person} = require('./person');

class User extends Person{

    constructor(firstName,lastName,email){
        super(firstName,lastName);
        this._email = email;
    }

    set email(email){
        this._email = email;
    }

    get email(){
        return this._email;
    }
}


const anna = new User('anna','anderson','anna@no.com');

anna.show();