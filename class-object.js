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