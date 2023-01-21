const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Async'), 2000)
        : reject(new Error('Async'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Antes de ejecutarse!');
anotherFn();
console.log('Despues de ejecutarse!');