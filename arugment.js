// arguments

function sum(a, b, c) {
    console.log(arguments[4]);
    console.log(typeof arguments);
    return a + b + c;
}

console.log(sum(2, 4, 5, 88, 23));