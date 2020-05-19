const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is resolved msg');
        reject('Something went wrong');
    },5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return 'some data';
}).then((data) => {
    console.log('Does this run!', data);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');