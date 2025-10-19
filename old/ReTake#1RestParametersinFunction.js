// Re-Take #1 — Rest Parameters in Function

function multiplyAll(...numbers) {
    return numbers.reduce((acc, n) => acc * n)
     
}


console.log(multiplyAll(2, 3, 4))


// Re-Take #2 — Array Destructuring with Rest

const scores = [50, 60, 70, 80, 90];

const [first, ...rest] = scores;

const topScore = first;
const otherScores = rest
console.log(topScore);
console.log(rest)
