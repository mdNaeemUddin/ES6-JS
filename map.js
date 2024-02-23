// map in js

const numbers = [4, 5, 6, 87, 8];


// array items double task

// const doubled = [];

// for (const item of numbers) {
//     const double = item * 2;
//     doubled.push(double);
// }

// console.log(doubled);



function doubleIt(numbers) {
    return numbers * 2;
}

// const outNum = n => n * 2;

const res = numbers.map(doubleIt);
// console.log(res);

const outPut = numbers.map(n => n * 2);
console.log(outPut);