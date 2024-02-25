// arguments

// object and array are pass by reference
// primitive types are pass by value

function sum(a, b, c) {
    console.log(arguments[4]);
    console.log(typeof arguments);
    return a + b + c;
}

console.log(sum(2, 4, 5, 88, 23));

let a = 'some';
let b = a;
b = 'react';
console.log(b);