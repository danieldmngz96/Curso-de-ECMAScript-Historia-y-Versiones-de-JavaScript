async function* anotherFunction() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
    yield await Promise.resolve(5);
    yield await Promise.resolve(6);
    yield await Promise.resolve(7);
}

const other = anotherFunction();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');