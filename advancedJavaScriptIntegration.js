/*⚡ 1. Employee Bonus Tracker

You have this data:

const employees = [
  { name: "Alice", sales: 1200, dept: "Electronics" },
  { name: "Bob", sales: 800, dept: "Groceries" },
  { name: "Charlie", sales: 950, dept: "Electronics" },
  { name: "Diana", sales: 600, dept: "Clothing" },
];


Write a function that:

filters employees with sales >= 900

adds a new property bonus:

if sales ≥ 1200 → 15% bonus

if 900–1199 → 10% bonus

returns an array sorted by bonus (descending)

Example Output:

[
  { name: 'Alice', sales: 1200, dept: 'Electronics', bonus: 180 },
  { name: 'Charlie', sales: 950, dept: 'Electronics', bonus: 95 }
] 

const employees = [
  { name: "Alice", sales: 1200, dept: "Electronics" },
  { name: "Bob", sales: 800, dept: "Groceries" },
  { name: "Charlie", sales: 950, dept: "Electronics" },
  { name: "Diana", sales: 600, dept: "Clothing" },
];

const empBonus = (obj) => {
    return obj.filter(o => o.sales > 900).map(o => ({
        name: o.name,
        sales: o.sales,
        dept: o.dept,
        bonus: o.sales >= 1200 ? o.sales * 0.15 : o.sales >= 900 && o.sales <= 1199 ? o.sales * 0.10 : "No bonus"
    })).sort((a,b) => b.bonus - a.bonus);
}


console.log(empBonus(employees))







🔁 2. Nested Department Summary

You have:

const departments = {
  Electronics: { employees: 12, revenue: 48000 },
  Groceries: { employees: 8, revenue: 26000 },
  Clothing: { employees: 5, revenue: 12000 }
};


Write a function deptReport(departments) that:

uses Object.entries()

returns an array of department summaries like:

[
  "Electronics: 12 employees, ₱48000 revenue",
  "Groceries: 8 employees, ₱26000 revenue",
  "Clothing: 5 employees, ₱12000 revenue"
]



const departments = {
  Electronics: { employees: 12, revenue: 48000 },
  Groceries: { employees: 8, revenue: 26000 },
  Clothing: { employees: 5, revenue: 12000 }
};

for (const [key, value] of Object.entries(departments)){
    console.log(`${key}: employees : ${value.employees}, revenue: ${value.revenue}`)
}





🧩 3. Customer Purchase Analyzer
const customers = [
  { name: 'John', purchases: [100, 50, 300] },
  { name: 'Jane', purchases: [400, 150] },
  { name: 'Jake', purchases: [20, 30, 40, 50] }
];


Create a function topSpender(customers) that:

uses map() and reduce() to compute total spend per customer

returns the customer object with the highest total spend

Expected Output:

{ name: 'Jane', total: 550 }


const customers = [
  { name: 'John', purchases: [100, 50, 300] },
  { name: 'Jane', purchases: [400, 150] },
  { name: 'Jake', purchases: [20, 30, 40, 50] }
];

const topSpender = (customers) => {
    return customers.map(c => ({
        name: c.name,
        avg: c.purchases.reduce((acc, curr) => acc + curr, 0) / c.purchases.length
    })).reduce((max, c) => c.avg > max.avg ? c : max);
}


console.log(topSpender(customers))







⚙️ 4. Combined Challenge: Smart Inventory Dashboard
const inventory = [
  { item: 'apple', stock: 50, price: 3 },
  { item: 'banana', stock: 5, price: 2 },
  { item: 'orange', stock: 20, price: 4 },
  { item: 'mango', stock: 15, price: 5 }
];


Write a function inventoryReport(inventory) that:

Filters out items where stock < 10

Adds:

totalValue = stock * price

status = "Low" if stock < 20 else "OK"

Returns the array sorted by totalValue descending

Finally, logs each item as:

apple → ₱150 (Status: OK)
mango → ₱75 (Status: OK)
orange → ₱80 (Status: Low)


const inventory = [
  { item: 'apple', stock: 50, price: 3 },
  { item: 'banana', stock: 5, price: 2 },
  { item: 'orange', stock: 20, price: 4 },
  { item: 'mango', stock: 15, price: 5 }
];

const inventoryReport = (inventory) => {
    const filtered10 = inventory.filter(i => i.stock < 10);
    return filtered10.map(i => ({
        iteml: i.item,
        stock: i.stock,
        price: i.price,
        totalValue: i.stock * i.price,
        status: i.stock < 20 ? "Low" : "OK"
    })).sort((a,b) => b.totalValue - a.totalValue)
}


console.log(inventoryReport(inventory))



💎 5. The Ultimate Combo

You have:

const students = [
  { name: "Ana", scores: [85, 90, 78], activities: 5 },
  { name: "Ben", scores: [70, 88, 92], activities: 3 },
  { name: "Cara", scores: [95, 97, 96], activities: 4 }
];


Create a function studentRank(students) that:

computes each student’s average score

adds a property rankScore = average + (activities * 2)

returns the top student object (highest rankScore)

Hint: combine map() + reduce() + sort() or nested ternary logic.


const students = [
  { name: "Ana", scores: [85, 90, 78], activities: 5 },
  { name: "Ben", scores: [70, 88, 92], activities: 3 },
  { name: "Cara", scores: [95, 97, 96], activities: 4 }
];

const studentRank = (students) => {
    return students.map(s => ({
        name: s.name,
        avg: Math.floor(s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length),
        rankScore: Math.floor(s.scores.reduce((acc, curr) => acc + curr, 0) / s.scores.length + (s.activities * 2))
    })).sort((a, b) => b.avg - a.avg)
}


console.log(studentRank(students))

*/