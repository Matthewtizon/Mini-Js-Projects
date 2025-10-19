const userManager = {
    users: [
        { name: "John", age: 20 }
    ],

    addUser: function(name, age){
        this.users.push({ name, age });
        console.log(`${name} added successfully!`);
    },

    listUsers: function(){
        console.log("Listing users with incremented ages:");

        // Nested function to increment age
        const incrementAge = (name, age) => {
            return { name, age: age + 1 };
        };

        for (let i = 0; i < this.users.length; i++){
            const { name, age } = this.users[i];
            const updatedUser = incrementAge(name, age);
            console.log(`${updatedUser.name}: ${updatedUser.age}`);
        }
    },

    findAdultUsers: function(){
        const result = this.users.filter(user => user.age >= 18);
        console.log("Adult users:", result);
    }
};

// Adding users
userManager.addUser("Malupa", 18);
userManager.addUser("Matthew", 30);
userManager.addUser("Malupa", 15);

// List users with incremented age
userManager.listUsers();

// List adult users
userManager.findAdultUsers();
