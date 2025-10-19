// Step 3: Review & Re-Takes

/* Loops: while, do-while, for-in, for-of
Q1 — while loop
Write a while loop that prints numbers 1 to 5.
Hint: initialize a counter variable outside, increment inside the loop. */

let counter = 1;
while (counter <= 5){
    console.log(counter)
    counter++
}


/* do-while loop
Write a do-while loop that prints numbers 5 to 1.
Hint: the loop executes at least once, condition at the end. */
counter = 5

do {
    console.log(counter)
    counter--
} while(counter > 0)



// Q3 — for-in loop

const cars = { brand: "Toyota", year: 2020, color: "Red" };

for (let car in cars){
    console.log(`${car}: ${cars[car]}`);
    
}


// Q4 — for-of loop

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
    console.log(fruit)
}

// Switch Statements

function dayName(number){
    switch (number) {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("the number you've pick is not between 1-7")
            break;
    }
}

dayName(8)


// Destructuring & Rest/Spread Q6

const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;
const [...middle] = rest.slice(0, -1)
const last = numbers[numbers.length - 1]
console.log(last)

// Q7 Destructure this object

const person = { name: "Anna", age: 25, city: "Paris", country: "France" };

const {name, age} = person;

const selfInformation = {name, age};

const {city, country} = person;

const location = {city, country};

console.log(selfInformation);
console.log(location)


// Array Methods Combined Q8


const nums = [1,2,3,4,5,6];

const result = nums
    .map(num => num * num)
    .filter(num => num > 10)

console.log(result)