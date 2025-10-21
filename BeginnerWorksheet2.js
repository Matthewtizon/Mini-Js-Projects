/* Beginner Worksheet #2

Practice
🧩 Part 1: Active Recall (Answer from Memory)

Try to answer these without looking up anything first.
You’ll review them later with me.

Q1.
What’s the difference between primitive types and reference types in JavaScript?
Give one example of each.

primitive types are example of strings, numbers, booleans, null, undefined, symbol, big int it uses for single datas?, give me more knwolege about here

the reference types are arrays and object it is use to structure informations, give me more knwolege about here

just right 


Q2.What does hoisting mean, and which of these are hoisted?

var

let

const

function declarations
Explain briefly.

it is function declaration because it can form a function block to be repeatable to be called inside or outside that file,, give me more knwolege about here

just right


Q3. What is the difference between a function parameter and an argument?
Give a simple code example.

a parameter is a storing variable to that function, the argument is the data will be stored in the parameter to be used, just right


Q4. What does .filter() return compared to .forEach()?
And when would you use .map() instead?

filter will return selected only for example is grade above 75 will be filtered it will only get the 75 above, the forEach will loop all data on it, i will use map for getting the stored datas in object or array,, just right


Q5. What happens in this code?
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(numbers);
console.log(doubled);
Explain what each console.log will output and why.


the first log will be an array 1,2,3, the second log will be the numbers variable is used in map then use multiple to 2 and it will be outputed 2,4,6




Part 2: Coding Exercises

Each exercise builds on your weak spots.
Try writing them from scratch — no copy-paste.

Filter and Log Passed Students

You have:

Task:

Use .filter() to get students with a score ≥ 75

Then use .forEach() to log "Luna passed!" style messages.
*/
/*
const students = [
  { name: "Kai", score: 70 },
  { name: "Luna", score: 82 },
  { name: "Zane", score: 90 },
  { name: "Mika", score: 60 }
];

const withAvg = students.filter(s => s.score >= 75);

withAvg.forEach(({name, score}) =>{
    console.log(`${name} passed!`)
})
*/
/*
Square Even Numbers

👉 Task:
Create a function squareEvens(arr) that:

Filters only even numbers

Maps them to their squared value

Returns the new array

*/

function squareEvens(arr){
    return evenNums = arr.filter(num => num % 2 === 0)
                        .map(num => num * num)

}

console.log(squareEvens([1,2,3,4,5,6]))
// ➡️ [4, 16, 36]


/* 

Function Practice

👉 Task:
Create two functions:

Both should log messages using the given name.
Then call both functions before and after they are declared.
Observe what works and what throws an error — and why?
*/
greet("john")
//sayBye("John")


function greet(name) { console.log(name) }  
const sayBye = function(name) { console.log(name) }

greet("john")
sayBye("John")

/* the sayBye have error after the function

so i commented the saybye after the function it works

so this one const sayBye = function(name) { console.log(name) }
 will not work if called before

 so this one function greet(name) { console.log(name) }  can be called anywhere








 Part 3: Mini Project – Student Analyzer

🧩 Goal: Practice array transformation and logic.

Task:

Calculate each student’s average score.

Add a new key passed (true/false) if average ≥ 75.

Log an array of messages:
"Aria passed with 85 avg"
"Blake failed with 65 avg"
"Cleo passed with 95 avg"

Hints:

Use .map() to transform

Use .reduce() to find average

Use template literals for clean output
*/


const students = [
  { name: "Aria", scores: [80, 85, 90] },
  { name: "Blake", scores: [60, 70, 65] },
  { name: "Cleo", scores: [95, 90, 100] }
];

const student = students.map(student => student )
const avg = student.reduce((acc, score) => acc + score.scores, 0) / student.scores.length;
    
console.log(avg)

// just right, a little hard to use map + reduce 
// so didnt finist it


/*
Then tell me:

Which concept felt confusing?
using map + reduce and accessing objects, you  analyze other felt confusing
Which one felt natural and easy?
you analyze it felt natural and easy
*/