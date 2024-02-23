// filter(), find(), reduce(), forEach() in js

// forEach() as like map but forEach() not return values


// forEach()

const numbers = [1, 2, 3, 4, 5];
const res = numbers.forEach(n => console.log(n));

// filter()

const players = [62, 61, 345,56, 87, 65, 75, 29, 4, 32, 44, 23];
const goodPlayer = players.filter(p => p > 50);


// find()
const findFineProduct = players.find(p => p > 60);
// console.log(`fine numbers : ${findFineProduct}`);

// console.log(goodPlayer);


// reduce()

const total = numbers.reduce((p, c) => p + c, 0);
// console.log(total);

const products = [
    { id: 1, name: 'dell', price: 40000 },
    { id: 2, name: 'hp', price: 45000 },
    { id: 3, name: 'hp', price: 45000 },
    { id: 4, name: 'hp', price: 45000 },
    { id: 5, name: 'hp', price: 45000 },
    { id: 6, name: 'hp', price: 45000 },
    { id: 7, name: 'mac', price: 80000}
]

// map()

const prices = products.map(p => p.price);
console.log(prices);

const names = products.map(p => p.name);
console.log(names);

// filter()
const expensive = products.filter(ex => ex.price > 50000);
console.log(expensive);

products.forEach(p => console.log(p.id));

// find()
const affordable = products.find(a => a.price < 50000);
console.log(affordable);

// reduce()
const total2 = products.reduce((acum, current) => (acum + current.price), 0)
console.log(total2);

