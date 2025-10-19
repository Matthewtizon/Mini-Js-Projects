const users = [
  { name: "Luna", age: 17 },
  { name: "Kai", age: 22 },
  { name: "Mia", age: 19 }
];


users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
    if (user.age >= "18") {
      console.log(`${user.name} is an adult.`)
    } else {
      console.log(`${user.name} is not an adult.`)
    }
})








