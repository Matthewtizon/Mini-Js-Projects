/*
Beginner Worksheet #7 — Functional Patterns & Flow Control

🕐 Estimated Time: 45–60 mins
Focus:

Conditional logic inside .map() and .reduce()

Nested data (arrays in objects)

Function reuse + modular design

Chaining array methods

Part 1 — Active Recall

Answer these from memory first:

What is the difference between .map() and .forEach() in terms of return value and functional chaining?
the map transform the values will be new copying and forEach looping it and its original, can return in map but not in for each, map can be functional chain but for each is not


When should you use .reduce() instead of .map() or .filter()?
reduce is for adding all of the values in a array or object, if using a for each with reduce it will be okay instead of map or filter,


What is a pure function? Why is it useful when chaining functions?
it is good to use for clean line codes, it can be reusable any time in chaining


How can you safely update nested data inside an array of objects without mutating the original array?
by using map to transform it


Write a one-line example of using conditional logic inside a .map() callback.

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];

const result = students.map(s => {
    const avg = s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length;
    const passing = avg >= 75;
    return {...s, avg, passing};
})

result.forEach(s => console.log(`${s.name} ${s.passing ? 'passed' : 'failed'}  got avg of ${s.avg}`))

is this good? conditional logic, map() callback


Part 2 — Coding Exercises
1️⃣ Conditional Transformation

You have an array of numbers:

const numbers = [5, 12, 8, 130, 44];

Multiply numbers > 10 by 2

Leave other numbers unchanged

Return the new array using .map()

const numbers = [5, 12, 8, 130, 44];

const multiplyed = numbers.map(n => n > 10 ? n * 2 : n)

console.log(multiplyed)


2️⃣ Nested Average Calculation

You have an array of students with scores:

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];


Compute the average score for each student

Return a new array of objects: { name, avg }


const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];

const result = students.map(s => {
    const name = s.name;
    const avg = s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length;
    return {name, avg};
})

result.forEach(r => console.log(`${r.name} got ${r.avg}`))


3️⃣ Pass/Fail Messages

Using the previous array with averages:

Return an array of strings:
"Alice passed with 90", "Bob failed with 65", etc.

Passing = average ≥ 75

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];

const result = students.map(s => {
    const avg = s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length;
    const passing = avg >= 75;
    return {...s, avg, passing};
})

result.forEach(s => console.log(`${s.name} ${s.passing ? 'passed' : 'failed'}  with ${s.avg}`))

4️⃣ Top Student (Reduce)

Using the array from exercise 2, find the student with the highest average

Return a single object: { name, avg }

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];

const result = students.map(s => ({
    name : s.name,
    avg : s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length
})).reduce((max, s) => s.avg > max.avg ? s : max);

console.log(`${result.name} got a highest avg of ${result.avg}`)


5️⃣ Modular Function Reuse

Write a function calculateAverage(scores) that takes an array of numbers and returns the average

Rewrite exercises 2–4 using this function

Your goal: no repeated code for computing averages


const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [60, 65, 70] },
  { name: "Charlie", scores: [95, 100, 90] }
];


function calculateAverage(scores){
    return scores.reduce((acc, curr) => acc +curr, 0) / scores.length;
}

const studentWithAvg = students.map(s => ({
    name: s.name,
    avg: calculateAverage(s.scores)
}))

studentWithAvg.forEach(s => console.log(`${s.name} got an avg ${s.avg}`))


6️⃣ Bonus Challenge: Conditional Accumulation

You have sales data:

const sales = [
  { name: "John", total: 150 },
  { name: "Jane", total: 90 },
  { name: "Mark", total: 200 },
];


Compute total bonus for the team:

Bonus = 1000 if total ≥ 100

Bonus = 500 if total < 100

Return the total bonus using .reduce()

const sales = [
  { name: "John", total: 150 },
  { name: "Jane", total: 90 },
  { name: "Mark", total: 200 },
];

const resultBonus = sales.map(s => {
    const name = s.name;
    const withBonus = s.total >= 100;
    return {name, withBonus};
})

resultBonus.forEach(rB => console.log(`${rB.name} got a bonus ${rB.withBonus ? 1000 : 500}`))




7️⃣ Optional Mastery Exercise

Combine all previous exercises in a single function:

Input: array of students or sales

Output: array of messages + top performer + aggregated totals

Must use: .map(), .filter(), .reduce(), and modular functions


const employees = [
  {name: "John", sales: 120, scores: [80,60,75]},
  {name: "Mark", sales: 100, scores: [70,60,75]},
  {name: "Malupa", sales: 120, scores: [80,60,75]},
  {name: "eme", sales: 80, scores: [60,60,60]}
]



function analyzeAvg(score){
  return score.reduce((acc, curr) => acc + curr, 0) / score.length;
}

function checkingBonus(sales){
  employees.bonus = 0;
    if (sales > 100){
      employees.bonus = 0;
      employees.bonus = 1000;
    } else {
      employees.bonus = 0;
      employees.bonus = 500;
    }
  return employees.bonus 
}

const resultWithBonusAndAvg = employees.map(e => ({
  name: e.name,
  sales: e.sales,
  bonus: e.bonus,
  avg: analyzeAvg(e.scores),
  withbonus: checkingBonus(e.sales)
})).filter(e => e.sales >= 100 && e.avg > 69)

resultWithBonusAndAvg.forEach(rBA => console.log(`${rBA.name} got a avg of ${rBA.avg.toFixed(1)} and bonus of ${rBA.withbonus} with ${rBA.sales}`))


console.log(employees)


✅ Reflection: CHAT GPT Reflection & CHAT gpt check



*/