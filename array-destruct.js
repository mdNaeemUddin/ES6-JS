const num = [32, 87, 9882, 23, 87];

let one, two, three;

[one, two, three] = num;

console.log(`one : ${one}, two : ${two}, three : ${three}`);


const actor = {
    name: 'tom-cruise',
    age: 40,
    phone: '+28397-2322',
    money: '4 billons'
}

// const phone = actor.phone;

const { name, age, phone: numbers, money} = actor;

console.log(`actor name is : ${name}, age : ${age}, phone : ${numbers}, money : ${money}`);