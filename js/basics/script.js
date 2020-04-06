var database = [
    {
        username: "Jakob",
        password: "1234"
    },
    {
        username: "Dol",
        password: "5678"
    },
    {
        username: "Jean",
        password: "90"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "blah"
    },
    {
        username: "Mary",
        password: "bleh"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Nah, fam.");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);



// var todos = [
//     "clean",
//     "brush",
//     "study",
//     "yerk"
// ];

// for (var i = 0; i < todos.length; i++) {
//     alert(todos[i] + "!");
// }

// todos.forEach(function(td) {
//     console.log(td + "?");
// })

// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);