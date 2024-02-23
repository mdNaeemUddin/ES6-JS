

// more arrow function


const difference = (x, y) => x - y;
const multi = (first, second, third, fourth) => first * second * third * fourth;

const getAge = (person) => person.age;
const student = { name: 'shofiq', age: 45 }
const age = getAge(student);

console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([32, 83, 87, 873, 32]);

const getPi = () => Math.PI;
console.log(getPi);

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const res = sum + mult;
    return res;
}

console.log(doMath(3, 4, 2));


// regular function vs arrow functions 