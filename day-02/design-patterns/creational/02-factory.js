class User{
    constructor(username){
        this.username = username;
    }

    show(){
        console.log(`
${this.username} theme:${this.theme.name} perms:${this.permissions.mode} 
apps:${this.apps.list}`);
    }
}

class UITheme {
    constructor(name){
        this.name = name;
    }
}

class UserPermissions{
    constructor(mode){
        this.mode = mode;
    }
}

class UserApps{
    constructor(...apps){
        this.list = apps;
    }
}

const UIFactory = {
    create({username='nobody',theme='Simple',permissions='r',apps=['Facebook']}={}){
        const user = new User(username);
        user.theme = new UITheme(theme);
        user.permissions = new UserPermissions(permissions);
        user.apps = new UserApps(apps);
        return user;
    }
};

(()=>{

const options = {
    username:'Anna',
    theme:'Monokai Dark',
    permissions:'rw',
    apps:['Facebook','Instagram','Gallery'],
}

const anna = UIFactory.create(options);
anna.show();

const markus = UIFactory.create({username:'Markus',apps:['Notepad','Code Blocks']});
markus.show();

const nob = UIFactory.create();
nob.show();
})();