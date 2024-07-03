//import the readline module
const readline = require('readline');
//create an interface to read data from standard input (stdin)
// and standard output (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askName(){
    rl.question("What is your name?", function(name){
        console.log(`Hello,${name}!`);
        askFavoriteLanguage();
    });
}
function askFavoriteLanguage(){
    rl.question("What is your favorite programming language?",
        function(language){
            console.log(`${language} is a great choice!`);
            rl.close();
        });
}
//start questions
console.log("Welcome to simple Command Line Interface using readline!");
askName();