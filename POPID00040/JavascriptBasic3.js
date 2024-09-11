function reverseString(str) {
   
    return str.split('').reverse().join('');
}


const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);



function squareArea(side) {
    return side * side;
}

const sideLength = 5;
const squareAreaResult = squareArea(sideLength);
console.log("Area of square:", squareAreaResult)

function circleArea(radius) {
    return Math.PI * radius * radius;
}


const radius = 3;
const circleAreaResult = circleArea(radius);
console.log("Area of circle:", circleAreaResult);
