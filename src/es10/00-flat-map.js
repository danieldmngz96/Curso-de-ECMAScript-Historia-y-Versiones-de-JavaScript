const array = [1,2,[3,4,3,4,[1,4,5]]]
const result = array.flat(3) 
console.log(result);

// ftatmap
const array2 = [1,2,3,];
console.log(array2.flatMap(v => [v  * 2]));