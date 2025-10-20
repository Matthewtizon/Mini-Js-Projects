// Session 2 – Early Intermediate

/* Part 1: Recall Questions

Answer these from memory — don’t run them in a console yet.
After answering, I’ll explain and adjust difficulty for next time. 


Q1 the difference of funtion scope and block scope is their availabilty, with function scope it cannot be used out side, but the block scope can be use outside and inside multiple function

the var respect block scope.



Q2 it will 1, and 2 because the declaration of count is in the createCounter while the incrementation is in the return function with console log, in calling the createCounter it stored first in the variable counterA so i called 2 times

Q3 using dot notation like for example if theres a student object you can call it student.name or .age

Q4 it will run the if block, because of the "0" is a true

Q5the spread operator can be combined arrays, can colect multiple arguments if used. the rest parameters is the place holders if used ... it can store many values



Part 2: Mini Coding Exercise

🧩 Task:
Create a function analyzeScores(students) that:

Filters students with score >= 75

Maps them to uppercase names

Uses a closure to count how many passed

Logs both the uppercase names and the total count
*/


/*const students = [
  { name: "Luna", score: 80 },
  { name: "Theo", score: 60 },
  { name: "Maya", score: 95 }
];


function analyzeScores(students){
    const withPassScore = students.map(name => name).filter(({score}) => score > 75)
        
            
    console.log(withPassScore);
    console.log(`Total Passed: ${withPassScore.length}`)
}

analyzeScores(students);
*/
// Output:
// ["LUNA", "MAYA"]
// Total Passed: 2


//in the part 2 i can console log only the name, the rate for difficulty recall questions are easy in Q5 i cant truly express my answer and in Q3 i dont know if im correct for part 2 it was Just Right i struggele a little in maps and filter, but in console logiign the name only i cant do that by using withPassScore.name


/* after this Light Review (5–10 min)

Go back over:

Your wrong or unsure answers

Practice Recall Without Notes

Close everything and try to answer out loud:
Do a tiny project just for yourself, using what you learned:

Reflect

Ask yourself:

Which part confused me today?

Which part felt smooth and natural?

If you want to strengthen your understanding before tomorrow’s adaptive session, you can watch one short video or read one short article
*/



// Write a function `sumArray(arr)` that returns the sum of all numbers in an array


function sumArray(...arr){
    const sum = arr.reduce((acc, number) => acc + number, 0)

    return sum;
}


console.log(sumArray(1,2,3,4,5))


//

const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 90 }
];


students.forEach(() => {
  const withAvg = students.filter(n => {
    n.score >= 75})

  console.log(withAvg)
})