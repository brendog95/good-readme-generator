const fs = require("fs"); 
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = [
    //ask user for name of the app 
    {
      
        type: 'input',
        message: 'What is name of this application? (This will also be the main header of the README)',
        name: 'repoName',
     
    },
    //asks user for git hub user name 
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'gitHubName',
     
    },
    //asks the user for their email
    {
        type: 'input',
        message: 'What is your E-Mail address?',
        name: 'email',
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of what this application does',
        name: 'description',
     
    },
    // How do you install the app? 
    {
        type: 'input',
        message: 'How does the user install the application?',
        name: 'installApp',
     
    },
   // How do the users use your application? 
    {
        type: 'input',
        message: 'Provide instructions on how to use your application',
        name: 'appInstructions',
     
    },
    // How does the user of this application report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'Do you want users to be able to report issues or contribute? If so add instructions here',
        name: 'appIssuesAndCont',
     
    },
 // promts what license they would like to use and should be used for a Badge.  
    {
        type: 'input',
        message: 'What license they would you like to use? If you are not using a license type "none" ',
        name: 'license',
     
    },
 //Asks the user if anybody else contributed to this app. 
    {
        type: 'input',
        message: 'Were there any other contributors to this application? if none write "none" ',
        name: 'contributors',
     
    },

];

function init() {
inquirer.prompt(questions).then((response)=>{

// this makes the first line and header for the repo using the users resonse to RepoName
fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// this will create the 2nd line of readme discribing the application was developed by the users reponse to githubname 
fs.appendFileSync("README.md", ("This application was developed by GitHub user: " + response.gitHubName + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.appendFileSync("README.md", ("## Email Address" + '\n' + response.email + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})


// adds the discription of the project that the users entered 
fs.appendFileSync("README.md", ("## Description" + '\n' + response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
//creates a sub header for installation and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for App usage and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for licences and adds the licences the users entered 
fs.appendFileSync("README.md", ("## Licence" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

})
}

init();

