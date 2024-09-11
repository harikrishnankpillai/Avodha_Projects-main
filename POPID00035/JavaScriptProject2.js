const car = {type:"Fiat", model:"500", color:"white"};

console.log("car color",car.color);
console.log(car);
let answer1 = "It's alright";
console.log(answer1)
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;
console.log(sentence);
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));
const str = '5';

console.log(str.padStart(2, '0'));


const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
