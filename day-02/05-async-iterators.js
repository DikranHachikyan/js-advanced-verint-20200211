const users = [
    new Promise((resolve)=>setTimeout(()=>resolve('Anna'),400)),
    new Promise((resolve,reject)=>setTimeout(()=>reject('Markus'),1300)),
    new Promise((resolve)=>setTimeout(()=>resolve('Jorg'),200)),
    new Promise((resolve)=>setTimeout(()=>resolve('Maria'),300)),
];

console.log('---------- begin --------------');
const printUsers = async ()=>{
    for await (const name of users){
        // try{
            console.log(  name);
            // console.log( await name);
        // }
        // catch{}
    }
};

printUsers();
console.log('---------- end --------------');