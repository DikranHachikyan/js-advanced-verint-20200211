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
    const uiBuilder = new UIBuilder()
                            .setUserName('Anna')
                            .setUserPermissions(new UserPermissions('rw'))
                            .setUITheme(new UITheme('Monokai'))
                            .setUserApps(new UserApps(...['Notes','Gallery','Facebook','Contacts']))
                            .build();
    uiBuilder.show();

})();