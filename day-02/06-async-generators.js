async function *getUsers(){
    const users = ['anna','markus','jorg','maria'];
    let i = 0;
    while( i < users.length){
        const timeout = Math.random() * 100;
        yield new Promise(resolve=>setTimeout(()=>resolve(users[i++]),timeout));
    }
}

console.log('---------- begin --------------');
const gen = getUsers();

(async ()=>{
    for await ( const user of gen){
        console.log(user);
    }
})();

console.log('---------- end --------------');