// arrays desctructuring 
let  fruits = ['Apple', 'Banana', 'Orange'];
let [a,b,c] = fruits;
console.log(a,b,c);

// object desctructuring
let user = {username: 'Daniel', age: 25};
let {username, age} = user;
console.log(username, age);

//spread operator
let person = {username: 'daniel', age: 25};
let country = "CO";

let data = {...person, country};

console.log(data);

//rest
function sum(num, ...values){
console.log(num, values);
console.log(num + values[0]);
return num + values[0];
}

sum(1,5,2);