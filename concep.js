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
    id: 6136,
    address: {
        village: 'kandhulia',
        upzilla: 'ghatail'
    }
}

const { name, age, id } = student;
const { address: { village } } = student;

console.log(village);


// rest operator : resting 

const number = [232, 87, 997, 762, 876, 23];

const [aa, bb, ...num5] = number;
console.log(aa, bb, num5);


// arrow function

const add = (xx, yy) => xx + yy;
const hello = () => console.log("hello world");
const sum = x => x + 8;

const multi = (x, y, z) => {
    const mult = x * y * z;
    const avg = mult / 3;
    return avg;
}

// console.log(`sum is : ${sum(4)}`);
// console.log(`avg is : ${multi(4, 5, 2)}`);


// array method : forEach, map, find, filter, reduce

const number2 = [1, 2, 332, 4, 5, 6, 7];

// number2.forEach(item => console.log(item));

// const num6 = number2.map(item => item + 2);
// console.log(num6);
// number2.map(item => console.log(item));

const xss = number2.find(item => item === 332);
console.log(xss);

// filter()

const xxb = number2.filter(item => item % 2 === 0);

console.log(xxb);

// reduce()

console.log(number2);
const sum2 = number2.reduce((accum, current) => accum + current, 0);

// console.log(sum2);

// optional chaining in js : ?.

const petOwner = {
    name: 'cutta',
    address: {
        country: 'Oganda',
        food: 'meat',
        name: {
           Name: 'kutta2'
        },
        bark: {
            
        }
       
    }
}

// console.log(petOwner.address.name?.hisName);

// map looping :

const values = [2, 87, 87, 9723, 8772, 9];

values.map((item, indexNum, arr) => {
    console.log(`item : ${item}         index : ${indexNum}      array : ${arr}`);
})


// call back function 

function show(name, age) {
    console.log('function 1');
    console.log(`name : ${name} and age ${age}`);
}

function naeemFunc(name, age, callback) {
    console.log(`Function 2`);
    setTimeout(() => {
        callback(name, age);
    }, 2000);
}


// naeemFunc('naeem', 25, show);


// closure
console.log('closure : ');

const outerFunc = () => {
    let cnt = 0;
    const innerFunc = () => {
        cnt++;
        console.log(`count : ${cnt}`);
    }

    return innerFunc;
}


const xxx = outerFunc();
xxx();
xxx();
xxx();

function outSide() {
    let cnt = 0;

    return function inSide() {
        cnt++;
        console.log('Count : ', cnt);
    }

}

console.log('outside : ');

const yyy = outSide();

yyy();
yyy();
yyy();
yyy();



// class - constructor in class

console.log('\nClass : Practicing\n');

class Animal{
    name = 'Cow';
    color = 'red';
}

const cow = new Animal();

// console.log(`Name : ${cow.name}`);



// const employee1 = new Employee('rihad', 24);

// console.log(employee1.name);
// console.log(employee1.age);


// inheritance in class

class Employee {
    name;
    age;
     
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`employee name : ${this.name} and age : ${this.age}`);
    }
    
}


class Employee2 extends Employee{
    village;
    district;

    constructor(vill, dist, name, age) {
        super(name, age);

        this.village = vill;
        this.district = dist;
    }
    othersInfo() {
        console.log(`child info village : ${this.village} & district : ${this.district}`);
    }    
}

const emp = new Employee2('kandhulia', 'tangail', 'naeem', 23);
emp.othersInfo();
emp.info();

