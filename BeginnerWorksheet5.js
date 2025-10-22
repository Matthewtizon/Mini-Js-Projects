/* 
Beginner Worksheet #5 — Focus: Combining Logic + Data Transformation

Goal: Learn how to chain methods and structure data cleanly using JavaScript fundamentals.
Estimated Time: 40–50 mins

🧠 Part 1 — Active Recall (Concept Understanding)

Q1.
What happens when you chain .filter().map().reduce() on an array?

Describe in your own words how data flows between them (step by step).
first it will filter , then it will transform using map, then add the array using reduce

Q2.
What’s the main difference between using a closure and using a global variable for counting or tracking?
Give a short example for both and explain which is better and why.

using closure can be isolated when using, in closure you can use same variable names, than global variable

Q3.
What’s the difference between returning an object directly inside .map() like:

array.map(x => ({ num: x }));


vs writing:

array.map(x => { num: x });


Why does the second one return undefined?
the second one return undefined because it is in function block and needs a return value to it, if have ({}) it will be a object and can be returned

Q4.
Explain why .reduce() needs an initial value sometimes, and what happens if you forget it.
Give an example.
it wont work if you dont put initial or 0 

i dont know what happen if no initial

Q5.
What will be printed here and why?

let count = 0;

function createTracker() {
  return function() {
    count++;
    return count;
  }
}

const track1 = createTracker();
const track2 = createTracker();

console.log(track1());  this will log 1
console.log(track2());  this will log 1
console.log(track1());  this will log 2






💻 Part 2 — Coding Exercises
🧮 1️⃣ Price Calculator

You have an array of items:

const items = [
  { name: "Book", price: 250 },
  { name: "Pen", price: 25 },
  { name: "Bag", price: 700 },
  { name: "Notebook", price: 120 }
];


✅ Tasks:

Filter only items with price > 100

Add 10% tax to each using .map()

Compute the total using .reduce()

Return: "Total after tax: 1234"


const items = [
  { name: "Book", price: 250 },
  { name: "Pen", price: 25 },
  { name: "Bag", price: 700 },
  { name: "Notebook", price: 120 }
];


const result = items.filter(i => i.price > 100).map(i => ({
    name : i.name,
    discount : i.price - ((i.price * 10) * 0.10)
})).reduce((acc, i) => acc + i.discount, 0)



console.log(`Total after tax: ${result.discount}`)


i cant answer this, this is all i can its undefined




🧍‍♀️ 2️⃣ Employee Bonus Tracker
const employees = [
  { name: "Alex", sales: 80 },
  { name: "Jamie", sales: 120 },
  { name: "Sam", sales: 60 },
];


✅ Tasks:

Add a bonus property:

If sales ≥ 100 → 1000 bonus

Else → 500 bonus

Return an array of messages like:
"Alex earned a 500 bonus"
"Jamie earned a 1000 bonus"

const employees = [
  { name: "Alex", sales: 80 },
  { name: "Jamie", sales: 120 },
  { name: "Sam", sales: 60 },
];

employees.forEach(e => {
    e.bonus = 0;
})
console.log(employees)

const result = employees.map(e => {
    const largeBonus = e.sales > 100;
    return {...e, largeBonus};
})


result.forEach(e => {
    console.log(`${e.name} earned a ${e.largeBonus ? 1000 : 500} bonus`)
})


🌟 3️⃣ Highest Scorer (Nested Logic)
const data = [
  { name: "Kai", scores: [75, 85, 95] },
  { name: "Lia", scores: [80, 90, 100] },
  { name: "Noah", scores: [70, 60, 80] }
];


✅ Tasks:

Compute each student’s average.

Use .reduce() to find the top student.

Log: "Lia has the highest average: 90"


const data = [
  { name: "Kai", scores: [75, 85, 95] },
  { name: "Lia", scores: [80, 90, 100] },
  { name: "Noah", scores: [70, 60, 80] }
];


const result = data.map(d => ({
  name: d.name,
  avg: d.scores.reduce((acc, score) => acc + score, 0) / d.scores.length
})).reduce((max, d) => d.avg > max.avg ? d : max)

console.log(`${result.name} has the highest average: ${result.avg}`)



🔒 4️⃣ Private Counter Manager (Closure Challenge)

Write a closure that allows you to:

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0


✅ Rules:

Must store count privately (not global)

Must return an object with .increment() and .reset() functions.


function createCounter(){
  let count = 0;
  function increment(){
    count += 1;
    return count;
  }
  function reset(){
    count = 0;
    return count;
  }


}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0

need more to learn and practice this


🧠 5️⃣ Combine Everything — “Product Summary Generator”

You’re given:

const products = [
  { name: "Phone", price: 1200, sold: true },
  { name: "Laptop", price: 2500, sold: false },
  { name: "Headphones", price: 300, sold: true },
  { name: "Mouse", price: 150, sold: true }
];


✅ Tasks:

Filter only sold products

Use .map() to apply a 5% discount

Use .reduce() to get total revenue after discount

Log a summary like:
"3 products sold, total revenue after discount: 1590"


cant answer this too becaue i cant fix the number 1 price calculator 



you analyze my reflection
*/

