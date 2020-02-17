class User{
    constructor(username){
        this.username = username;
        this.contacts = [];
    }

    show(){
        console.log(`User:${this.username}`);
    }
}

class PowerUser extends User{
    constructor(username){
        super(username);
    }

    show(){
        console.log(`Power User:${this.username}`);
    }
}

const ContactMixin = {
    addContacts(...list){
        list.forEach((c)=>this.contacts.push(c));
    },
    showContacts(){
        console.log(`${this.username} : ${this.contacts}`);
    }
};

const MessageMixin = {
    print(){
        console.log(`hi ${this.username}`);
    }
};

Object.assign(User.prototype, ContactMixin);

(()=>{
    const user = new User('Anna');
    const pwu  = new PowerUser('Markus');

    user.addContacts('Maria','John');
    pwu.addContacts('Jorg');

    user.showContacts();
    pwu.showContacts();

    Object.defineProperties(user, Object.getOwnPropertyDescriptors(MessageMixin));

    user.print();
})();