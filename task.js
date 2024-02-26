// js tasks -

// convert odd to even numbers

const oddNum = [1, 3, 5, 7, 9, 11];
const evenNum = oddNum.map(item => item + 1);

console.log(oddNum);
console.log(evenNum);

// evenNum.forEach(item => console.log(item));

// filter an array elements which divide by 10 : 02

const numbers = [33, 50, 79, 78, 90, 101, 30];
const specialElements = numbers.filter(item => item % 10 === 0);

console.log(numbers);
console.log(specialElements);

// array of object instructor : 03

const instructor = [
    {name: 'rubina', age: 23, position: 'senior'},
    {name: 'naeem', age: 25, position: 'senior'},
    {name: 'uddin', age: 23, position: 'senior'},
    {name: 'akter', age: 23, position: 'junior'}
]

console.log(instructor);

const senior = instructor.filter(item => {
    if (item.position === 'senior') {
        return item.name;
    }
   
})

// console.log(senior);
let sum = 0;
for (let item of instructor) {
    sum = item.age + sum;
}

console.log(sum);

const total = instructor.reduce((sum, current) => sum + current.age, 0);

console.log('total is : ', total);