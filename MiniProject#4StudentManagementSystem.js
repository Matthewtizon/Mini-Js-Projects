// Mini Project #4 — Student Management System

// Goal:

// Build a Student Management System using objects, methods, loops, array methods, destructuring, and rest/spread operators.

/*Step 1. Object Setup
Create an object called studentManager.
Property students: array of student objects. Each student has:
name (string)
age (number)
grades (array of numbers) */

const studentManage = {
    students:[
        {name: 'john', age:20, grades:[90, 80]},
        {name: 'Mark', age:17, grades:[75, 90]}
    ],
    /* Add Students
Method: addStudent(name, age, ...grades)
Uses rest parameters to accept any number of grades.
Push a new student object to students array.
Use spread operator if needed to combine arrays.*/
    addStudent: function(name, age, ...grades){
        this.students.push({name, age, grades});
    },
    /* List All Students
Method: listStudents()
Use forEach to iterate students.
Destructure name, age, grades.
Log each student like: */
    listStudents: function(){

     function avg(grades){
            return grades.reduce((acc, grades) => acc + grades, 0) / grades.length;
        }

        this.students.forEach(({name, age, grades}) => {
            console.log(`${name} (${age} years old) -> Grades: ${avg(grades)}`);
            if (avg(grades) >= 75) {
                console.log("Passed");
            } else {
                console.log("Needs Improvement");
            }
        })
    },

    /* Find Adult Students
Method: findAdultStudents()
Filter students where age ≥ 18.
Return or log the filtered list. */

    findAdultStudents: function(){
        const result = this.students.filter(n => n.age > 18);
        
        console.log(result);
    },

    /* Update Grades
Nested method inside studentManager called addGrade(name, newGrade)
Finds a student by name.
Pushes newGrade into their grades array. */

    addGrade: function(seacrhName, newGrade){
        const haveName = this.students.find(student => student.name === seacrhName);

        if (haveName) {
            console.log(`I've find the name ${seacrhName}`);
            haveName.grades.push(newGrade);
            console.log(`${haveName.name} new grades: ${haveName.grades} `)
        } else {
            console.log(`I didnt find the name`);
        }
    },
    // Method to calculate average grade per student.
    averageGrade: function(){
        this.students.forEach(({name,grades}) => {
            const avg = grades.reduce((sum, grade) =>  sum + grade, 0) / grades.length;
            console.log(`${name} got Average Grade of ${avg}`)
        })  
    },

    // Method to list students with average grade ≥ 75 using .map() and .filter().

    listAvgGrade: function(){
        const studentsWithAvg = this.students
            .map(student => {
                const avg = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
                return {...student, avg};
            })
            .filter(student => student.avg >= 75);

        studentsWithAvg.forEach(student => {
            console.log(`${student.name} got an average of ${student.avg}`)
        })
        

    }
}




/*
studentManage.students.forEach((studnets) => {
    console.log(studnets)
})

studentManage.addStudent("Renz", 18, 20,60,70)


studentManage.students.forEach((studnets) => {
    console.log(studnets)
})
*/

//studentManage.listStudents();
//studentManage.addStudent("Renz", 18, 20,60,70)
//studentManage.addStudent("mark", 19, 20,60,70)
//studentManage.findAdultStudents()


//studentManage.addGrade('john', 12) // this has error cant figure it out

//studentManage.listStudents()

studentManage.averageGrade()

studentManage.listAvgGrade()