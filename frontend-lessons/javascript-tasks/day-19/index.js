// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.


const product = {
    name: "Milo",
    price: 13,
    quantity: 15
}

let objectString = JSON.stringify(product);
console.log(objectString);

// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

const bookObject = '{"title":"Meditations","author":"Marcus Aurelius","publishedYear":160}';
const bookJSON = JSON.parse(bookObject);

console.log(bookJSON.author);


// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

const personObjArray = [
    {
        name: "Benedict",
        age: 18,
        city: "Quezon City"
    },
    {
        name: "Richard",
        age: 19,
        city: "Antipolo"
    },
    {
        name: "Ericka",
        age: 19,
        city: "Cabanatuan City"
    }
];

let personObjArray_string = JSON.stringify(personObjArray);
console.log(personObjArray_string);

let personObjArray_parsed = JSON.parse(personObjArray_string);
console.log(personObjArray_parsed);

for (let i=0;i<personObjArray_parsed.length;i++) {
    console.log(`Person-Object#${i + 1}: ${personObjArray_parsed[i].name}, ${personObjArray_parsed[i].city}`);
}