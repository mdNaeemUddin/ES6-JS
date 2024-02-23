// more map in js

const numbers = [12, 82, 87, 872, 87];

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const fiveBonus = numbers.map(n => n + 5);
console.log(fiveBonus);

const halves = numbers.map(n => n / 2);
console.log(halves);

const friends = ['naeem uddin', 'rubina akter', 'rubina', 'akter', 'naeem', 'uddin'];

const length = friends.map(l => l.length);
console.log(`length is : ${length}`);

