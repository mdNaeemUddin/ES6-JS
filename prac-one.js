// arrow function practice task : 01

const num = (a, b, c) => {
    const sum = a * b * c;
    return sum;
}

console.log(num(3, 5, 3));


// template string in js task : 02

const message = `I am a web developer.
I love the code.
I love to eat biryani.

`

console.log(message);


// a default parameter in arrow function : 03

const defaultPara = (a, b = 232) => {
    return a + b;
}

console.log(`add is : ${defaultPara(398)}`);


// an array in arrow function task : 04

const goodFriends = [];
const friendArray = (friends) => {
    for (let items of friends) {
        if (items.length % 2 === 0) {
            goodFriends.push(items);
        }
    }
    return goodFriends;
}

const friendArrays = ['rahad', 'al-amin', 'tanzil', 'milon', 'rubina', 'fatema'];

console.log(`new array is : ${friendArray(friendArrays)} `);


// write a squared formulae in arrow functions : 05

const squareFunc = (num) => {
    let sum = 0, cnt = 0;
    for (let item of num) {
        const sq = item * item;
        sum += sq;
        cnt++;
    }
    
    const avg = sum / cnt;
    return avg;
}

console.log(`avg is : ${squareFunc([1, 2, 3, 4, 5, 6, 7, 8])}`);


// combine two array, find max from new array : 06

const maxNum = (a, b) => {
    const newArray = [...a, ...b];
    const maxNum = Math.max(...newArray);
    return maxNum;
}

console.log(`new array is : ${maxNum([2, 3, 4], [99, 872, 888])}`);