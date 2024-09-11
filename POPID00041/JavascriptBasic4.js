let arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]
console.log(arr);

let arr1 = [1, 2, 3, 4];

arr1.pop(); // [1, 2, 3]
arr1.shift(); // [2, 3, 4]
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];

console.log(arr2.indexOf(3)); // 2
console.log(arr2.find(item => item > 3)); // 



let arr3 = [3, 1, 2];
console.log(arr3);
arr3.sort(); // [1, 2, 3]
console.log("sort",arr3);


let arr4 = [1, 2, 3, 4, 5];
console.log(arr4);
let filteredArray = arr4.filter(item => item % 2 === 0); // [2, 4]
console.log("filter",arr4);


let arr5 = [1, 2, 3];
console.log(arr5);
let mappedArray = arr5.map(item => item * 2); // [2, 4, 6]
console.log("map",arr5);


const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("sum",sum);