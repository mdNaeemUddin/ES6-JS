
// arrow function, multiple parameter & function body


// function declare 

function add(a, b) {
    const res = a + b;

    return res;
}

const sum = add(32, 882);
console.log(`sum is : ${sum}`);



// function expression

const add3 = function (a, b) {
    return a + b;
}

// arrow function

const add4 = (a, b) =>  a + b;

const sum2 = add4(32, 32);
console.log(sum2);
