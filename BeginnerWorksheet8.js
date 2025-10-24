/*
🧠 Beginner Worksheet #8 — Functional Composition Mastery Drill

⏱ Estimated Time: 60–75 mins
🎯 Focus Areas:

Composing multiple array methods into functional “pipelines”

Reusing helper functions to keep code pure and modular

Thinking in transform → filter → aggregate flow

Practicing readability and performance trade-offs

🧩 Part 1 — Active Recall (from memory first)

Answer before coding:

What is function composition in JavaScript?
funstion can be used inside methods like map


Why is it important to write pure and reusable helper functions when chaining .map(), .filter(), .reduce()?
so it will be much cleaner and it will be a high order fuction


What does .map().filter().reduce() in one chain achieve?
cleaner line of code, and much mnore high order doing 


Why is order important when chaining those three methods?
for better result, reduce will be only last if haved map or filter, filter must be first then map


Write a short example of composing .map(), .filter(), .reduce() in a single chain (1–2 lines).

const orders = [
  { id: 1, customer: "Alice", total: 250 },
  { id: 2, customer: "Bob", total: 80 },
  { id: 3, customer: "Charlie", total: 120},
  { id: 4, customer: "Alice", total: 15 }
];

const result = orders.filter(o => o.total >= 100).map(o => o)

console.log(result)



💻 Part 2 — Coding Drills
1️⃣ Transform → Filter → Aggregate

You have:

const orders = [
  { id: 1, customer: "Alice", total: 250 },
  { id: 2, customer: "Bob", total: 80 },
  { id: 3, customer: "Charlie", total: 120 },
  { id: 4, customer: "Alice", total: 150 }
];


🧩 Task:

Transform: add a field discounted = total × 0.9

Filter: only include orders with discounted total ≥ 100

Reduce: compute total revenue from these filtered orders

✅ Output Example:

Discounted revenue: 387


const orders = [
  { id: 1, customer: "Alice", total: 250 },
  { id: 2, customer: "Bob", total: 80 },
  { id: 3, customer: "Charlie", total: 120 },
  { id: 4, customer: "Alice", total: 150 }
];

const discounted = orders.map(o => o.total * 0.9);
const result = discounted.filter(d => d >= 100).reduce((acc, curr) => acc + curr, 0);


console.log(`Discounted revenue: ${result}`)



2️⃣ Helper Function Composition

Create pure helper functions and compose them together.

function applyDiscount(order) { ... }
function isAbove100(order) { ... }
function sumRevenue(acc, curr) { ... }


Then:

const total = orders
  .map(applyDiscount)
  .filter(isAbove100)
  .reduce(sumRevenue, 0);


✅ Goal: no inline arrow functions inside .map()/.filter()/.reduce().
Keep your functions modular and testable.



const orders = [
  { id: 1, customer: "Alice", total: 250 },
  { id: 2, customer: "Bob", total: 80 },
  { id: 3, customer: "Charlie", total: 120 },
  { id: 4, customer: "Alice", total: 150 }
];

const applyDiscount = (order) => 
    order.total * 1.20;

const isAbove100 = (order) =>
    order.total > 100; 
const sumRevenue = (acc, curr) =>
    acc + curr;

const total = orders
  .filter(isAbove100)
  .map(applyDiscount)
  .reduce(sumRevenue, 0);

console.log(total)


3️⃣ Nested Data — Sales by Region
const regions = [
  {
    name: "North",
    sales: [120, 90, 200]
  },
  {
    name: "South",
    sales: [80, 70, 100]
  },
  {
    name: "East",
    sales: [300, 200, 250]
  }
];


🧩 Task:

Compute each region’s total sales using .map()

Filter only regions with total ≥ 400

Reduce to compute grand total of qualifying regions

✅ Output:

Regions over target: ["East"]
Grand total: 750


const regions = [
  {
    name: "North",
    sales: [120, 90, 200]
  },
  {
    name: "South",
    sales: [80, 70, 100]
  },
  {
    name: "East",
    sales: [300, 200, 250]
  }
];

const result = regions.map(r => ({
    name : r.name,
    total : r.sales.reduce((acc, curr) => acc + curr, 0)
})).reduce((max, r) => r.total > max.total ? r : max);

console.log(`Regios over target: ${result.name}`)
console.log(`Grand total: ${result.total}`)

but i didnt use a filter over here how to include filter?




4️⃣ Modular Reuse + Composition Challenge

Now refactor all of the above into one pipeline function:

function processData(data, transformFn, filterFn, aggregateFn) {
  return data
    .map(transformFn)
    .filter(filterFn)
    .reduce(aggregateFn);
}


✅ Use it with different datasets (orders, regions, students, etc.).
This trains function injection and reuse — a key functional programming pattern.

i cant undestand this give me first something to watch




5️⃣ Advanced Bonus — Weighted Scoring System

You have:

const students = [
  { name: "Alice", quizzes: [80, 90, 100], project: 90 },
  { name: "Bob", quizzes: [70, 65, 75], project: 60 },
  { name: "Charlie", quizzes: [95, 100, 90], project: 95 }
];


🧩 Task:

Compute quiz average (40% weight)

Add project (60% weight)

Filter students with final score ≥ 75

Reduce to compute the class average of only passing students

✅ Output example:

Passing Students: ["Alice", "Charlie"]
Class Average: 88


Use helper functions like:

const average = arr => arr.reduce((a, c) => a + c, 0) / arr.length;
const weightedScore = s => (average(s.quizzes) * 0.4) + (s.project * 0.6);

i think ill pass this one for now too overWhelming


🧗‍♂️ Optional Mastery Extension

Create your own dataset (e.g., employee performance, store transactions, or app activity logs)
and implement a three-phase pipeline:

.map() → .filter() → .reduce()
Then refactor into a reusable function like:

const pipeline = (data, ...fns) =>
  fns.reduce((acc, fn) => fn(acc), data);


i think ill pass this one for now too overWhelming


✅ Reflection: CHAT GPT Reflection & CHAT gpt check
*/
