/* 
Beginner Worksheet #3 — Arrays, Functions & Data Flow
🕐 Estimated Time: 30–40 mins

Goal: strengthen your understanding of how data moves in arrays and functions.

🧠 Part 1: Active Recall (From Memory)

Answer these without running code first.

Q1.

Explain the difference between these:

const a = [1, 2, 3];
const b = a;
const c = [...a];


What happens if you change a[0] = 99?
the value 1 will changed to 99
Which one (b or c) will also change? Why?
if the a[0] = 99 is in the 2nd line it will both change, if in 3rd line only the c, id in 4th line non will be changesd
so the b is a copy of a , the c is a new array using spread operator

Q2.

What does .reduce() do in an array?
Write a simple sentence in your own words.
 it add all number in the array

Q3.

If a function returns another function inside it, what is that called?
Give a quick example.

is it nested function? GIve me more of this i dont have enough knowledge,  more hands on practice on this its just easy to answer active recalls than applying hands on
 
function increment(){
    let counter = 0;
    return function inc(){
        counter++
    }
}
const inc = increment()
console.log(inc.inc())



Q4.

In this code, what will console.log print, and why?

let score = 50;

function boost(score) {
  score += 10;
  return score;
}

console.log(boost(score));
console.log(score);


the first console.log is 60 because of in the function it will add 10 to the score ,the second log will be only 50 because its a global scope and its not calling the function, more hands on practice on this its just easy to answer active recalls than applying hands on

Q5.

What’s the difference between:

.map()

.filter()

.reduce()

When would you use each one in a real-world situation?

map is for checking all in the object or array

filter is use for checking checking conditions to be getting

reduce is to add all of it 

give me more examples of this, lack of knowledge







Part 2: Coding Exercises
1️⃣ Sum of Squares

Create a function sumOfSquares(numbers) that:

Uses .map() to square each number

Uses .reduce() to sum them up

Returns the total

Example Output:

sumOfSquares([1, 2, 3, 4]) ➡️ 30
*/
/*
function sumOfSquares(arr){
    return arr.map(s => s * s).reduce((acc, sum) => acc + sum.s, 0)
    
}


console.log(sumOfSquares([1, 2, 3, 4])) //30
*/
//cant solve this, little to hard to combine map + reduce in function



/* Student Pass Checker (v2)

You have this array:

const students = [
  { name: "Luna", scores: [80, 90, 70] },
  { name: "Theo", scores: [60, 65, 70] },
  { name: "Maya", scores: [90, 95, 85] }
];


👉 Task:

Compute each student’s average score using .reduce().

Return a new array of messages like:

"Luna passed with 80 avg"
"Theo failed with 65 avg"
"Maya passed with 90 avg"


(passing = avg ≥ 75) */
/*
const students = [
  { name: "Luna", scores: [80, 90, 70] },
  { name: "Theo", scores: [60, 65, 70] },
  { name: "Maya", scores: [90, 95, 85] }
];


const result = students.map(s => {
    const avg = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
    const passing = avg >= 75;
    return {...s, avg, passing}
})


result.forEach((s) => {
    const passfailed = (s.passing ? "passed" : "failed" ) 
    console.log(`${s.name} ${passfailed} with ${s.avg}`)
})
*/
/* i cant get a hang of this, i've check ai code to do this in part 
const avg = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
    const passing = avg >= 75;
    return {...s, avg, passing}
 and the results using the s in the forEach
*/


/* 
Find Highest Score

Using .reduce(), find the student with the highest average score from the same array above.
Log:

*/

const students = [
  { name: "Luna", scores: [80, 90, 70] },
  { name: "Theo", scores: [60, 65, 70] },
  { name: "Maya", scores: [90, 95, 85] }
];




const result = students.map(s => {
    const avg = s.scores.reduce((acc, score) => acc + score) / s.scores.length;
    const highavg = Math.max(avg);
    return {...s, avg, highavg};
})
console.log(result.highavg)
result.forEach(s => {
    if (s.highavg === s.avg) {
        console.log(s.name)
    }
})

// this is all i can do

/*

you will analayze Which concept felt confusing and i feel easy
then youll comeup to my nexr work sheets
*/