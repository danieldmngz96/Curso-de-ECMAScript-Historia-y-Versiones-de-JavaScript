function* iter(array){
    for(let value of array){
        yield value;
    }
}

const it = iter(['Oscar','Daniel','Paula','Añfredp','Mateo','Andres','Pedro','Edwin','Elvis']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);