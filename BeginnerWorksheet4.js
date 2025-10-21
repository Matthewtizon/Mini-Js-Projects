/*Beginner Worksheet #4 – Focus: Map + Reduce + Filter + Closures

Part 1: Active Recall

1 Explain why .map() does not modify the original array but .forEach() can be used to modify it indirectly. Give an example.
map just transform it and copy,  the forEach is it bacause of we can use methods like push inside? done have enough knowledge


2 Write a small closure that counts how many times a function is called. Test it.
*/
/*
function increment(){
    let count = 0;
    return function(){
        count += 1;
        return count
    }
}
const inc = increment();

console.log(inc())
console.log(inc())
console.log(inc())
console.log(inc())
console.log(inc())
*/
/*
3 What happens if you return a new array from .map() but forget to return inside .map() callback? Give an example.
not a clue, but  parameters used inside cannot be used outside?

4 How do you compute an average of numbers in an array? Write a sentence and small example.

first is sum the array number and divide to the length of numbers array

const nums = [1,2,3,4,5,6,7,8];

const avg = nums.reduce((acc, num) => acc + num, 0) / nums.length;
console.log(avg)



5 What’s the difference between passing a primitive vs a reference type to a function?
primitive is a single value, the reference have more than 1 value, 








Part 2: Coding Exercises


1 Closure Counter

Create a function createCounter() that:

Returns a function

Each call increments a private count

Logs the count

function createCounter(){
    let count = 0;
    return function(){
        count += 1;
        console.log(count);
    }
}


const counter = createCounter();
counter(); // 1
counter(); // 2



2 Filter + Map Challenge

You have:

const numbers = [1,2,3,4,5,6,7,8,9];


Filter only odd numbers

Multiply each by 3

Return the new array


const numbers = [1,2,3,4,5,6,7,8,9];

const result = numbers.filter(n => n % 1 === 0).map(n => n * 3);

console.log(result)




3 Student Average & Pass

Use:

const students = [
  { name: "A", scores: [80,90,85] },
  { name: "B", scores: [60,70,65] },
  { name: "C", scores: [95,100,90] }
];


Compute average per student using .reduce()

Return a new array of strings: "A passed with 85", etc.


const students = [
  { name: "A", scores: [80,90,85] },
  { name: "B", scores: [60,70,65] },
  { name: "C", scores: [95,100,90] }
];


const result = students.map(s => {
    const avg = s.scores.reduce((acc, score) => acc + score, 0) / s.scores.length;
    const passing = avg <= 75;
    return {...s, avg, passing};
})



result.forEach(s => console.log(`${s.name} ${s.passing ? "passed" : "failed"} with ${s.avg}`))




4. Find Top Student

Using the result from previous exercise, find the student with highest average

Log "C has the highest average: 95"
*/


const students = [
  { name: "A", scores: [80,90,85] },
  { name: "B", scores: [60,70,65] },
  { name: "C", scores: [95,100,90] }
];

const topstudent = students.map(s => ({
    name: s.name,
    avg: s.scores.reduce((a,b) => a + b, 0) / s.scores.length
})).reduce((max, s) => s.avg > max.avg ? s : max )

console.log(`${topstudent.name} has the highest average: ${topstudent.avg}`)


/*
so this is not from mine answer got help by previous answer in gpt
 what i want to know and apply to mine is the why is there ({}) in here 


this part in ({})
    name: s.name,
    avg: s.scores.reduce((a,b) => a + b, 0) / s.scores.length


    and it uses 2nd reduce and i cant even think of it from scratch

    and this line

    .reduce((max, s) => s.avg > max.avg ? s : max )


    i know parameters max and s but yung the .avg in s and max and using > how can it tell the max average?




for reflection ill change it too youll analyze it wether im good at it or bad
*/




