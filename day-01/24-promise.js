
const categories = [
    {id:1,name:'Mobile Phones',slug:'mobile-phones'},
    {id:2,name:'Digital Cameras',slug:'digital-cameras'},
];

const phones = ['Samsung','Apple','Nokia'];
const cameras = ['Nikon','Cannon','Sony'];

const sendRequest = (url)=>{
    console.log(`request from ${url}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if( url.match(/categories$/)){
                resolve(categories);
            }
            else if(url.match(/mobile-phones$/)){
                resolve({phones});
                // reject('error while reading phones table');
            }
            else if(url.match(/digital-cameras$/)){
                resolve({cameras});
            }
            reject(new Error(`invalid url:${url}`));

        },1000);//set timeout
    });//promise
};


console.log('before req');

sendRequest('/categories')
.then((data)=>{
    const proms = data.map((category)=>sendRequest(`/${category.slug}`));
    return Promise.all(proms);
})
.then(data=>console.log(data))
.catch((err=>console.log(`catch:${err}`)))
.finally(()=>console.log('finally'));

console.log('after req');
