'use strict';

const contacts = {
    people: ['Anna','Markus','Maria'],
    addContact: function (){
        const args = Array.prototype.slice.call(arguments);
        args.forEach( c => this.people.push(c));
        console.log(args);
    }
}


contacts.addContact('John','Peter');

console.log(contacts.people);

