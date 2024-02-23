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