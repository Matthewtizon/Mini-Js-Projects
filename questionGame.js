const questions = [
  {
    category:"Pagkain",
    question:"Ano ang paborito kong pagkain?", 
    choices:["piatos", "biscuit", "tinapay"], 
    answer: "tinapay"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Science",
    question: "What planet is known as the green Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Jupiter"
  },
  {
    category: "Science",
    question: "What planet is known as the Blue Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Earth"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Sun"],
    answer: "Sun"
  }




];


const getRandomQuestion = (arr) => {
  const random = Math.floor(Math.random() * arr.length)
  const result = arr[random]
  return result;
}


const getRandomComputerChoice = (arr) => {
  const random = Math.floor(Math.random() * arr.length)
  const result = arr[random]
  return result;
}


const getResults = (question, comChoice) => {
  if (comChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
};





console.log(getResults(getRandomQuestion(questions), getRandomComputerChoice(questions)))

