// closure , encapsulation, private variable

function kitchen() {
    let roast = 0;

    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer);

const second = kitchen();
console.log(second);