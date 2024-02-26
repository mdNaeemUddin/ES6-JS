// json start - 

const user = {
    id: 1,
    name: "Naeem",
    job: 'chemical engineer'
}

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'rubina',
    address: {
        village: 'kocukkhet',
        city: 'Oganda',
        country: 'US'
    }
}

// parse , stringify in JSON

const shopNow = JSON.stringify(shop);
const shopObj = JSON.parse(shopNow);

console.log(shop);
console.log(shopNow);
console.log(shopObj);