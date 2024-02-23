// class in js

class Product{
    country = 'bangladesh';
    speak(talk) {
        console.log(`talking about ${talk}`);
    }

    // constructor 

    constructor(name) {
        this.name = name;
    }
}

const lenovo = new Product('rakib');

console.log(lenovo);
lenovo.speak('abdur rahim');

class Teacher {

    name2 = 'rubina akter';
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    lecture() {
        console.log(`name : ${this.name} and subject is : ${this.subject}`);
    }
}


const rashidSir = new Teacher('abdur karim', 'physics')

console.log(rashidSir);
rashidSir.lecture();

console.log(rashidSir.name2);

const demo = {
    1 : "Naeem",
    'id-num' : 6136
}



console.log(demo[1]);
console.log(demo["id-num"]);


/// optional chaining (?. in object)

const details = {
    id: 23,
    name: 'Naeem',
    height: 63,
    address: 'tangail',
    newAddress: {
        city: 'dhaka',
        district: 'tongi'
    }
}

console.log(details.newAddress.name?.firstName);


const min = num => Math.min(num);
console.log(min([1, 3, 2]));

const { a, b, c } = { x: 2, y1: 3, z: 9 };
console.log(c);

const nums2 = [1, 2, 3, 4, 5];
let output = nums2.filter(n => n % 2);
console.log(output);

const product = { name: 'laptop', price: 2332 };
const { price} = product;

console.log(`price is : ${price}`);