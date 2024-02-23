// spread operator , array max , copy arrays

const max = Math.max(6, 23, 872, 73, 2);
const numbers = [2, 87, 23, 87, 237, 32];

const arrayMax = Math.max(...numbers);

console.log(...numbers);


console.log(`${max} and ${arrayMax}`);

// use spread operator to copy

const friends = [4, 5, 6, 8];
// const friends2 = friends;
const friends2 = [...friends, 789, 566];

friends2.push(55);

console.log(`${friends} and ${friends2}`);


