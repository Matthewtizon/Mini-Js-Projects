/* FizzBuzz Remix
Write a loop from 1–20:

If divisible by 3 → print “JS”

If divisible by 5 → print “Rocks”

If divisible by both → print “JS Rocks”

Otherwise print the number 


for (let i = 1; i <= 20; i++){
    if (i%3 === 0 &&  i%5 === 0){
        console.log("JS Rocks")
    }else if (i%5 === 0){
        console.log("Rocks")
    }else if (i%3 === 0){
        console.log("JS")
    }else {
        console.log(i)
    }
}
    



While Loop Twist
Using a while loop, print all even numbers between 2 and 10.


let count = 2;


while(count <= 10){
    if(count%2 === 0){
        console.log(count)
    }

    count++;
}




Part 3: Arrays and Functions

5. Array Practice

const nums = [1, 2, 3, 4, 5];


👉 Write:

a map() that doubles each number

a filter() that keeps only even numbers

a reduce() that sums all numbers



const nums = [1,2,3,4,5];

const result = nums.map(n => n * 2).filter(n => n%2 === 0).reduce((acc, curr) => acc + curr, 0);

console.log(result)



6 Array + Function Combo

const scores = [65, 80, 90, 55, 70];


Write a function that:

takes an array of scores

filters scores >= 70

maps them to add +5 bonus

returns the average of those new scores


const scores = [65, 80, 90, 55, 70];


const filterScore = (scores) => {
    return scores.filter(s => s >= 70).map(s => s + 5).reduce((acc, curr) => acc + curr, 0) / scores.length;
}

console.log(filterScore(scores))





🧱 Part 4: Objects and Iteration

Object Basics

const user = {
  name: 'Alice',
  age: 25,
  skills: ['JS', 'HTML', 'CSS']
};



    console.log(Object.entries(user))

 
👉 Log all property names and values using Object.entries().




Nested Object Challenge

const team = {
  dev1: { name: 'John', tasks: 3 },
  dev2: { name: 'Jane', tasks: 5 },
  dev3: { name: 'Jack', tasks: 2 }
};




console.log(team.dev1.tasks);
const totalTask = (obj) => {
    return obj.tasks.reduce((acc, curr) => acc + curr, 0)
}


console.log(totalTask(team))


👉 Write a function that returns the total tasks done by all developers.


🔥 Part 5: Full Integration Mini-Project


9. Mini Challenge: Inventory Manager

You have this data:

const inventory = [
  { item: 'apple', quantity: 10, price: 5 },
  { item: 'banana', quantity: 5, price: 3 },
  { item: 'mango', quantity: 8, price: 7 }
];


Write a function that:

filters items with quantity > 5

maps to include a new property totalValue = quantity × price

returns the array sorted by totalValue descending



const inventory = [
  { item: 'apple', quantity: 10, price: 5 },
  { item: 'banana', quantity: 5, price: 3 },
  { item: 'mango', quantity: 8, price: 7 }
];

const filterQuality = (obj) => {
    return obj.filter(o => o.quantity > 5).map( o => {
        const totalValue = o.quantity * o.price;
        return totalValue;
    })
}


console.log(filterQuality(inventory))

how to returns the array sorted by totalValue descending?

10. Bonus Boss Level

const students = [
  { name: 'John', scores: [80, 90, 70] },
  { name: 'Jane', scores: [85, 95, 100] },
  { name: 'Jim', scores: [60, 75, 70] },
];


👉 Create a function topStudent(students) that:

uses map and reduce to calculate each student’s average

returns the name of the student with the highest average
*/

const students = [
  { name: 'John', scores: [80, 90, 70] },
  { name: 'Jane', scores: [85, 95, 100] },
  { name: 'Jim', scores: [60, 75, 70] },
];

const topStudent = (obj) => {
    return avg = obj.map(o => ({
        name: o.name,
        avg: o.scores.reduce((acc, curr) => acc + curr, 0) / o.scores.length
    })).reduce((max, o) => o.avg > max.avg ? o : max);
}


console.log(topStudent(students))