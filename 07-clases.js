//Ejemplo de declarar clase 
class User {

}
//Ejemplo de instanciar una clase
//const newUser = new User();


class User {
    //metodos
    saludosMundo() {
        return 'hello 🌎'
    }
};

const danieldmngz = new User();
console.log(danieldmngz.saludosMundo());
const arturito4thaGen = new User();
console.log(arturito4thaGen.saludosMundo());

//constructor
class UserTwo {
    //Constructor
    constructor() {
        console.log('New User Two')
    }
    saludosMundo() {
        return 'Saludos desde 🛸'
    }
};

const Alfredo = new UserTwo();
const Eliseo = new UserTwo();

//THIS ¿?
class UserAnonymous {
    //Constructor
    constructor(name) {

    }
    //metodos
    check() {
        return '01101101 01100101 01101110 01110011 01100001 01101010 01100101 00100000 01100011 01101001 01100110 01110010 01100001 01100100 01101111 00100000 01110000 01101111 01110010 01100110 01100001 01110110 01101111 01110010 00100000 01101000 01100001 01100010 01101100 01100001 01110010 00100000 01100011 01101111 01101110 00100000 01100101 01101100 00100000 01100100 01110101 01100101 11000011 10110001 01101111 00100000 01100100 01100101 01101100 00100000 01110010 01100101 01110000 01101111 01110011 01101001 01110100 01101111 01110010 01101001 01101111 00101110 00101110 00101110'
    }
    saludosMundo() {
        return `${this.saludosMundo} ${this.name}`;
    }
};

const Anastasia = new UserAnonymous('Anastasia');
console.log('Anastasia dice:', this.saludosMundo);