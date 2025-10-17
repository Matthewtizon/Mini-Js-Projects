// ForEach Re-Take #2 — Inside an Object Method

const studentManager = {
    students:[
        {name:"John", grade:22},
        {name:"Malupa", grade:25},
        {name:"Mark", grade:18},
    ],
    listStudents: function(){
        this.students.forEach(({name, grade}) => {
            console.log(`Name: ${name} | Grade: ${grade}`)
            if (grade < 75) {
                console.log(`${name} needs improvement.`)
            } else {
                console.log(`${name} passed.`)
            }
        });
    }
}

studentManager.listStudents()