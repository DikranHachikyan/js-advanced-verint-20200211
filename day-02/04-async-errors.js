const fetchMessage = ()=> new Promise((resolve,reject)=>{
    const rand = Math.ceil(Math.random() * 100);
    setTimeout(()=>{
        if( rand % 2 !== 0){
            resolve(`Hello JS:${rand}`);

        }
        reject(`rejected:${rand}`);
    }, 2000);
});

const show = async ()=>{
    const message = await fetchMessage();
    return `message : ${message}`;
};

// show()
// .then((m)=>console.log(m))
// .catch((e)=>console.log(`error:${e}`));

const show2 = async ()=>{
    try{
        const message = await fetchMessage();
        console.log(`message : ${message}`);
    }
    catch(e){
        console.log(`error:${e}`);
    }
    finally{
        console.log('finally');
    }
};

// console.log('---- before ----');
// show2();
// console.log('---- after ----');

const show3 = async ()=>{
    try{
        const message = await fetchMessage();
        console.log(`message : ${message}`);
    }
    catch{
        console.log(`error`);
    }
    finally{
        console.log('finally');
    }
};

console.log('---- before ----');
show3();
console.log('---- after ----');