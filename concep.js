// spreading

const num = [23, 87, 7, 2332];

// spreading

const num2 = [...num];

console.log(num, num2);

// array destructing

const num3 = [32, 87, 87, 766, 866];

const [x, y, z, a, b] = num3;

console.log(x, y, z, a, b);

const student = {
    name: 'Naeem',
    age: 25,
    id: 6136
}

const { name, age, id } = student;

console.log(name);


// rest operator : resting 

const number = [232, 87, 997, 762, 876, 23];

const [aa, bb, ...num5] = number;
console.log(aa, bb, num5);


