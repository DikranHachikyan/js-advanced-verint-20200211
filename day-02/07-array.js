const array = [10,20,30,'one',NaN,40];

if( array.indexOf(30) !== -1 ){
    console.log('30 found');
}

if( array.indexOf(NaN) !== -1 ){
    console.log('NaN found');
}

const index = array.findIndex(Number.isNaN);
console.log(`NaN index ${index}`);

if( array.includes(NaN)){
    console.log('NaN found');   
}

const array2 = [10,[20,30],40,[50,60]];
console.log('array2:', array2.flat());


const array3 = [10,[20,30,[11,[12]]],40,[50,60]];
console.log('array3:', array3.flat(2));

const array4 = [10,[20,[30,,,,[11,[12,,,]]]],40,[50,60]];
console.log('array4:', array4.flat(Infinity));