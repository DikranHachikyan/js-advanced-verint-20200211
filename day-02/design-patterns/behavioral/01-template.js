class AbstractUser {
    constructor(){
        if( this.constructor === AbstractUser){
            throw new Error('AbstractUser is abstract class');
        }
    }

    execute(){
        this.register();
        this.confirm();
        this.login();
        this.loadUI();
    }
}

class User extends AbstractUser{
    constructor(username){
        super();
        this.username = username;
    }

    register(){
        this.registration = '---- step 1 ---';
    }
    
    confirm(){
        this.confirmation = '---- step 2 ---';
    }
    
    login(){
        this.loggedin = '---- step 3 ---';
    }

    loadUI(){
        console.log(`
User ${this.username} 
reg: ${this.registration}
confirmation:${this.confirmation}
login:${this.loggedin}
`);
    }
}

class PowerUser extends AbstractUser{
    constructor(username){
        super();
        this.username = username;
    }

    register(){
        this.registration = '---- step 1 ---';
    }
    
    confirm(){
        this.confirmation = '---- step 2 ---';
    }
    
    login(){
        this.loggedin = '---- step 3 ---';
    }

    loadUI(){
        console.log(`
Power User ${this.username} 
reg: ${this.registration}
confirmation:${this.confirmation}
login:${this.loggedin}
`);
    }
}

(()=>{
    const anna = new User('Anna');
    anna.execute();
    const markus = new PowerUser('Markus');
    markus.execute();
})();