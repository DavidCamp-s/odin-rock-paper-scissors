// keep track of each players # of wins
let userWins = 0;
let compWins = 0;
console.log("---------------- Rock Paper Scissors ----------------")
console.log("Games are best of 5 rounds");

while (userWins < 5 && compWins < 5) {
    let compChoice = getComputerChoice(); 
    let userChoice = getUserChoice().toLowerCase(); // get and turn user choice to lowercase 

    // check for a tie
    if (compChoice == userChoice) {
        console.log("You and the computer tied");
    }

    // if no tie then play game regularly
    else if (playRound(userChoice,compChoice)) {
        userWins++;
    }
    else {
        compWins++;
    }

    // print the score
    console.log("The score is " + userWins + "-" + compWins);
}

// print who won the game 
// print who is winning
if(userWins > compWins) {
    console.log("You won");
}
else {
    console.log("You lost");
}
console.log("-----------------------------------------------------");


function getComputerChoice() {
    // generates a random number 1-3
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) return "rock";
    if (num == 2) return "paper";
    if (num == 3) return "scissors";
}

function getUserChoice() {
    return prompt("Enter your choice");
}

function playRound(userChoice, compChoice) {
    //output what each opponent chose before saying who won
    console.log("You chose: " + userChoice + " | The computer chose: " + compChoice);

    // will print if won or lost 
    //then return true or false based on player winning or not
    if (userChoice == "rock"){
        if (compChoice == "scissors") {
            console.log("Rock beats scissors you win");
            return true;
        }
        if (compChoice == "paper") {
            console.log("Rock doesnt beat paper you lose");
            return false;
        }
    }
    if (userChoice == "paper"){
        if (compChoice == "rock") {
            console.log("Paper beats rock you win");
            return true;
        }
        if (compChoice == "scissors") {
            console.log("Paper doesnt beat scissors you lose");
            return false;
        }
    }
    if (userChoice == "scissors" || userChoice == "scissor"){
        if (compChoice == "paper") {
            console.log("Scissors beats paper you win");
            return true;
        }
        if (compChoice == "rock") {
            console.log("Scissors doesnt beat rock you lose")
            return false;
        }
    }
}