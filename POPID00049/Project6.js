const obj = { a: 1, b: 2, c: 3 };
console.log(obj);
const sum = Object.values(obj).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("sum1",sum);


const obj1 = { a: 1, b: 2, c: 3 };
console.log(obj1);
const sum1 = Object.entries(obj1).reduce((accumulator, [key, value]) => {
    return accumulator + value;
}, 0);

console.log("sum",sum1); 