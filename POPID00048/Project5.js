
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key, obj[key]);
}



Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});






