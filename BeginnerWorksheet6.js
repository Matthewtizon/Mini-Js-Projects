/* 

eginner Worksheet #6 — Guided: reduce() + Chaining + Closures

🧠 Part 1 — Active Recall (short answers)

Answer from memory, then check hints.

What does .reduce((acc, cur) => ..., init) do in plain language?
Hint: Think “accumulator” and what type acc becomes (number, object, array).
the reduce method adds all like its looping the accumulator will be the storage and the current is the value will be added in the accumulator

When chaining arr.filter(...).map(...).reduce(...), what does .map() receive as input? What does .reduce() receive as input?
Hint: Visualize the array after each step.

the map only receives only the filterd onces and the reduce received the mapped one then return

Give a one-line definition of a closure and one short example (no more than 4 lines).
Hint: Closure = function that “remembers” outer variables.

closures are needed for scoping where to put variables, if its in global i can be accesible anywhere, in function in cannot be used in global unless it will be returned 

💻 Part 2 — Guided Coding Exercises

For each exercise: first try it on your own. If you get stuck, follow the numbered hints. After you finish, compare your solution to the provided check.

1) Sum of Squares — returning a number

Task: Write sumOfSquares(numbers) that squares each number and returns the sum.

function sumOfSquares(numbers) {
  // your code
}

Hints (step-by-step):

Use .map(n => n * n) to create a squared array.

Use .reduce((acc, n) => acc + n, 0) to sum the squared array.

Return the result.

Check (what to expect):

sumOfSquares([1,2,3,4]); // 30

function sumOfSquares(numbers) {
    return numbers.map(n => n * n).reduce((acc, n) => acc + n, 0);
}

console.log(sumOfSquares([1,2,3,4])); // 30)


2) Price Calculator — returning an object

Task: From items, filter those with price > 100, apply 10% tax, and return an object:

{ total: 1234, itemsCount: 3 }


where total is the sum after tax and itemsCount is how many items were counted.

const items = [
  { name: "Book", price: 250 },
  { name: "Pen", price: 25 },
  { name: "Bag", price: 700 },
  { name: "Notebook", price: 120 }
];

function priceSummary(items) {
  // your code
}


Hints:

const filtered = items.filter(i => i.price > 100) — now you have the array you care about.

const taxed = filtered.map(i => i.price * 1.1) — this gives an array of prices after tax (numbers).

Use .reduce((acc, price) => acc + price, 0) to get total (a number).

Return an object: { total: Math.round(total), itemsCount: filtered.length } — rounding is optional.

Why return an object? .reduce() often returns a number, but you can compute intermediate values (counts, sums) and then build a final object to return more structured data.

const items = [
  { name: "Book", price: 250 },
  { name: "Pen", price: 25 },
  { name: "Bag", price: 700 },
  { name: "Notebook", price: 120 }
];

function priceSummary(items) {
  const filtered = items.filter(i => i.price > 100);
  const total = filtered.map(i => i.price * 1.1).reduce((acc, price) => acc + price, 0);
  //const total = taxed.reduce((acc, price) => acc + price, 0)
  //console.log(filtered)
  //console.log(total)
  return {total: Math.round(total), itemsCount: filtered.length};
}


console.log(priceSummary(items))







3) Employee Bonus Tracker — guided

Task: For employees, return an array of messages:

["Alex earned a 500 bonus", "Jamie earned a 1000 bonus", "Sam earned a 500 bonus"]


Hints:

Use .map() to transform each employee into a message string.

For each employee, compute const bonus = e.sales >= 100 ? 1000 : 500.

Return the string: ${e.name} earned a ${bonus} bonus.

Check idea: You don’t need to mutate the original array — .map() returns a new array of messages.

const employees = [
    {name: "john", sales: 120},
    {name: "matthew", sales: 80},
    {name: "malupa", sales: 120},
    {name: "mark", sales: 100},
]


const result = employees.map(e => {
    const string = `My name is ${e.name} and i have sales of ${e.sales}`;
    const bonus = e.sales >= 100 ? 1000 : 500;
    return `${e.name} earned a ${bonus} bonus.`;
}).


console.log(result)


4) Highest Scorer — step-by-step reduce to return an object

Task: From data, compute averages and use .reduce() to return the top student object (with name and avg).

const data = [
  { name: "Kai", scores: [75,85,95] },
  { name: "Lia", scores: [80,90,100] },
  { name: "Noah", scores: [70,60,80] }
];

function topStudent(data) {
    const highScore = data.map(d => ({
        name: d.name,
        avg: d.scores.reduce((acc, curr) => acc + curr, 0)/ d.scores.length
    })).reduce((max, d) => d.avg > max.avg ? d : max);
    return highScore;
}

console.log(topStudent(data));


5) Private Counter Manager — guided closure with multiple methods

Task: Implement createCounter() that returns { increment, reset } and keeps count private.

function createCounter() {
  // your code
}


Hints:

Inside createCounter, declare let count = 0;.

Define function increment() { count += 1; return count; }.

Define function reset() { count = 0; return count; }.

Return { increment, reset }.

Check:

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0

6) Product Summary Generator — combine everything (guided)

Task: For products, produce a summary string like:

"3 products sold, total revenue after discount: 1590"


Steps & Hints:

Filter sold products: const sold = products.filter(p => p.sold).

Apply 5% discount on price: const discounted = sold.map(p => p.price * 0.95).

Sum revenue: const total = discounted.reduce((sum, p) => sum + p, 0).

Build message: ${sold.length} products sold, total revenue after discount: ${Math.round(total)}.

Debug tip: Log intermediate arrays (sold, discounted) to confirm types (arrays of objects vs arrays of numbers).

🪞 Part 3 — Reflection & Self-check

After you finish each exercise, write short answers:

Which step did you struggle with and why?

For each .map() or .reduce() you used, what was the input type and output type at that step? (e.g., input: array of objects → .map() → output: array of numbers)

How would you explain the reduce used for finding the max to a beginner? (One or two sentences.)

*/