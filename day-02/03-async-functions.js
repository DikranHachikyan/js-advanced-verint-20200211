const fetchMessage = ()=> new Promise((resolve)=>{
    setTimeout(()=>resolve('Hello JS'), 2000);
});

const show = async ()=>{
    // const message =  fetchMessage();
    const message = await fetchMessage();
    console.log(`message:`,message);
};

console.log('---- before ----');
show();
console.log('---- after ----');

const show2 = async ()=>{
    const message = await fetchMessage();
    return `message:${message}`;
};

show2().then((m)=>console.log(m));

const fetchUser = ()=> new Promise( (resolve)=>{
    setTimeout(()=>resolve({id:1, name:'anna'}),2000);
});
const fetchAds = ()=> new Promise( (resolve)=>{
    setTimeout(()=>resolve({id:101, text:'JS Programming'}),2000);
});

const getData = async ()=>{
    const [user,ads, msg] = await Promise.all([fetchUser(),
                                          fetchAds(),
                                          fetchMessage()]);

        return [user,ads,msg];
};

getData()
.then((data)=>data.map(el=>console.log(el)))
.catch(err=>console.log(err))
.finally(()=>console.log('finally'));
