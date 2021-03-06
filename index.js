const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];

const addManager = () => {
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name");
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'id',
            message: "Enter the Team Manager's id.",
            validate: id => {
                if(isNaN(id)) {
                    console.log ("Please enter a valid id.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:"Enter the Team Manager's email",
            validate: email => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log ("Please enter a valid email")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name:'officeNumber',
            message:"Enter the Team Manager's office number.",
            validate: officeNumber => {
                if(isNaN(officeNumber)) {
                    console.log ("Please enter a valid office number.")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then((managerEntry) => {
        const { name, id, email, officeNumber } = managerEntry;
        const manager = new Manager (name, id, email, officeNumber);
            
        
            teamMembers.push(manager);
            console.log(manager);
    
    })
};

const getEmployee = () => {
    return inquirer
        .prompt ([
        {
            type: "list",
            name:"role",
            message: "Choose your employee's role.",
            choices: ['Engineer', 'Intern']
         },

         {
            type:'input',
            name:'name',
            message: "What is the name of the employee?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log ("Please enter a valid name.")
                    return false;
                }
            }
         },
         {
             type: 'input',
             name: 'id',
             message: "Enter the employee's id number.",
             validate: id => {
                 if (isNaN(id)) {
                     console.log("Please enter a valide id number.")
                     return false;
                 } else {
                     return true;
                 }
             }
         },
         {
             type:'input',
             name:'email',
             message:'Enter the email of the employee',
             validate: email => {
                 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                     return true;
                 } else {
                     console.log("Please enter a valid email");
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'github',
             message: "Enter the engineer's GitHub username.",
             when: (input) => input.role === "Engineer",
             validate: github => {
                 if(github) {
                     return true;
                 }else {
                     console.log("Please enter the Enigeneer's username")
                 }
             }
         },
         {
             type: 'input',
             name:'school',
             message:"Enter the name of the intern's school",
             when: (input) => input.role === 'Intern',
             valdiate: school => {
                 if(school) {
                     return true;
                 } else {
                     console.log("Please enter a valid school name.")
                 }
             }

         },
         {
             type: 'confirm',
             name:'addAnotherEmployee',
             message: "Would you like to add another team member?",
             default: false

         }

    ])

    .then ((employeeDetails) => {
        let { name, id, email, role, github, school, addAnotherEmployee} = employeeDetails;
        
        switch (role) { 
            case"Engineer":
            const engineer = new Engineer(name, id, email, github);
            teamMembers.push(engineer);
            break;
            case"Intern":
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;
        }
        if (addAnotherEmployee) {
            return getEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
    .catch((err) => console.log(err));     

};


addManager()
.then(getEmployee)
.then(teamProfile => {
  fs.writeFileSync("./dist/index.html", generateHTML(teamProfile));
  console.log("Your team profile has been successfully generated!");
})
.catch((err) => {
    console.log(err)
});
