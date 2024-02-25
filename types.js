// data types -
// int , string, bool, object, array, string


//primitive types value 

const a = 5;
const b = 'a string value';
const c = true;


//non-primitive types value

const age = [23, 32, 98];
const student = {
    id: 32,
    name: 'Naeem',
    age: 23
}

// console.log(typeof a, typeof b, typeof c, typeof age, typeof student);

/**
    1. variable that isn't initialized will give undefined

    2. function with no return 

    3. Parameter that isn't passed will be undefined

    4. If return has nothing on the right side will return undefined

    5. property that doesn't exist on an object will give you undefined 

    6. Accessing array elements outside of the index array range

    7. deleting an element inside an array

    8. set a value directly to undefined

    9. 

 */

let first;
console.log(first);

// function no return - undefined

function second(a, b) {
    const total = a + b;

}

const res = second(3, 5);
console.log(res);


