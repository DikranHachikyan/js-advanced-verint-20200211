class UserInspector {
    visit(element){
        if( element instanceof User){
            this.visitUser(element);
        }
        else if(element instanceof UserPermissions){
            this.visitUserPermissions(element);
        }
        else{
            throw new Error('invalid instance');
        }
    }

    visitUser(user){
        console.log(`User:${user.username} is logged in`);
        user.show();
    }

    visitUserPermissions(userPerms){
        const validPerms = /(^r$)|(^rw$)/;
        if( validPerms.test(userPerms.mode)){
            console.log(`User Permissions:${userPerms.mode}`);
        }
        else{
            throw new Error(`invalid permissions:${userPerms.mode}`);
        }
    }
}


class User{
    constructor(username){
        this.username = username;
    }

    show(){
        console.log(`
${this.username} theme:${this.theme.name} perms:${this.permissions.mode} 
apps:${this.apps.list}`);
    }

    accept(visitor){
        this.permissions.accept(visitor);
        visitor.visit(this);
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

    accept(visitor){
        visitor.visit(this);
    }
}

class UserApps{
    constructor(...apps){
        this.list = apps;
    }
}

class UIBuilder{
    setUserName(username){
        this.username  = username;
        return this;
    }

    setUITheme(uiTheme){
        this.theme = uiTheme;
        return this;
    }

    setUserPermissions(userPerms){
        this.permissions = userPerms;
        return this;
    }

    setUserApps(userApps){
        this.apps = userApps;
        return this;
    }

    build(){
        const user = new User(this.username);
        user.theme = this.theme || new UITheme('Simple');
        user.permissions = this.permissions || new UserPermissions('r');
        user.apps = this.apps || new UserApps(...['Notes','Facebook']);
        return user;
    }
}

(()=>{
    const anna = new UIBuilder()
                            .setUserName('Anna')
                            .setUserPermissions(new UserPermissions('rw'))
                            .setUITheme(new UITheme('Monokai'))
                            .setUserApps(new UserApps(...['Notes','Gallery','Facebook','Contacts']))
                            .build();
    const markus = new UIBuilder()
                            .setUserName('Markus')
                            .setUserPermissions(new UserPermissions('rc'))
                            .setUITheme(new UITheme('Monokai Light'))
                            .setUserApps(new UserApps(...['Notes','Facebook','Contacts']))
                            .build();
    const jorg = new UIBuilder()
                            .setUserName('Jorg')
                            .setUserPermissions(new UserPermissions('r'))
                            .setUITheme(new UITheme('Monokai Dark'))
                            .setUserApps(new UserApps(...['Facebook','Contacts']))
                            .build();

    const inspector = new UserInspector();

    [anna,jorg,markus].forEach(user=>{
        try{
            user.accept(inspector);
        }
        catch(e){
            console.log(`error:${e}`);
        }
    });


})();