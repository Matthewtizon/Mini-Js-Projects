// First Session – Beginner Level

/* Part 1: Recall Questions

Q1 var is for global use and can be re assign, let is just like var but newer it can be use inside code blocks, const is for fixed value to set

Q2 in "5" + 3 it has string 5 and number 3 with plus operation it wll go concatinate because of having double quote, in "5" - 3 same but using minus instead of concatinating it it will subtract the result is 2, in 5 == "5" it checks of both value is equal it does mnot check data type it will be true, in 5 === "5" it checks value and data type strictly it will be false
*/
//Q3 dont know the closure but i can construct a function

function getName(name){
    console.log(name, "hello")
}

getName("john")

//Q4  by pushing to a new array? not sure

//Q5 to access object will use dot notation and bracket notation, but need to practice it more, and for destructuring will save the object varible in {name, age} this is example 

// this recall question are easy, but in 3 and 4 question i felt hard



/* Part 2: Mini Coding Exercise
Task: You have an array of student objects. Log only the names of students who scored ≥ 75 using .filter() and .map().
*/

const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 90 }
];

// Your code here

const avgScore = students.map(student => student)
                        .filter(student => student.score >= 75);

console.log(avgScore)


//this mini coding exercise is just right






/* retake of Q3 Q4

Q3 closure is keeping a variable or codes isolated like in function you cant use that variable if its in the fuction, but not outside, but if its outside i can be use in multiple function, another example is outer function cant get the varible in the inner function, but return inner function in the outer function it can be useed

Q4 will use spread operatior it is used in arrays ... to combine 2 or more arrays or get multiple data in a function uisng ...numbers


*/