// object keys, values, entries, delete, seal, freeze

const student = {
    name: 'Md. Naeem Uddin',
    age: 25,
    phone: '01904-775064',
    // address: {
    //     village: 'Kandhulia',
    //     thana: 'Ghatail',
    //     district: 'Tangail',
    //     divison: 'Dhaka'
    // }
}

// keys in object 
const keys = Object.keys(student);
console.log(keys);


// values in object 
const values = Object.values(student);
console.log(values);


// entries in object

const entries = Object.entries(student);
console.log(entries);

// remove element from object

delete student.name;

console.log(student);

student.another = "Naeem Mia";
student.friendName = 'Rubina';

// remove a element from object using spread

const {another, ...studentCollege } = student;
console.log(studentCollege);


// freeze a object

// Object.freeze(student);
student.country = 'bangladesh';

console.log(student);

Object.seal(student);
student.country = 'Palestine';
console.log(student);