const container = document.querySelector(".result");
const Score = document.querySelector("#score");
const winner = document.createElement("p");
const options = document.createElement("p");
const gamesPlayed = document.createElement("p");

container.appendChild(Score);
container.appendChild(winner);
container.appendChild(options);
container.appendChild(gamesPlayed);

let compScore = 0;
let userScore = 0;
let games = 0;


document.querySelector(".rock").addEventListener("click", function() {
    if (compScore < 5 && userScore < 5) {
        let compChoice = getComputerChoice();

        let result = playRound("rock", compChoice)
        winner.textContent = result;

        if (result.includes("win")) {
            userScore++;
        } else if (result.includes("lose")) {
            compScore++;
        }

        Score.textContent = "The score is " + userScore + " - " + compScore;
        gamesPlayed.textContent = games++ + " game(s) played";
    }
});
document.querySelector(".paper").addEventListener("click", function() {
    if (compScore < 5 && userScore < 5) {
        let compChoice = getComputerChoice();

        let result = playRound("paper", compChoice);
        winner.textContent = result;

        if (result.includes("win")) {
            userScore++;
        } else if (result.includes("lose")) {
            compScore++;
        }

        Score.textContent = "The score is " + userScore + " - " + compScore;
        gamesPlayed.textContent = games++ + " game(s) played";
    }
});
document.querySelector(".scissors").addEventListener("click", function() {
    if (compScore < 5 && userScore < 5) {
        let compChoice = getComputerChoice();

        let result = playRound("scissors", compChoice)
        winner.textContent = result;

        if (result.includes("win")) {
            userScore++;
        } else if (result.includes("lose")) {
            compScore++;
        }

        Score.textContent = "The score is " + userScore + " - " + compScore;
        gamesPlayed.textContent = games++ + " game(s) played";
    }
});


function getComputerChoice() {
    // generates a random number 1-3
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) return "rock";
    if (num == 2) return "paper";
    if (num == 3) return "scissors";
}

function playRound(userChoice, compChoice) {
    let string = "";

    //output what each opponent chose before saying who won
    console.log("You chose: " + userChoice + " | The computer chose: " + compChoice);

    // will print if won or lost 
    //then return true or false based on player winning or not
    if (userChoice == "rock"){
        if (compChoice == "scissors") {
            return "Rock beats scissors you win 😎";
        }
        if (compChoice == "paper") {
            return "Rock doesnt beat paper you lose 💀";
        }
    }
    if (userChoice == "paper"){
        if (compChoice == "rock") {
            return "Paper beats rock you win 😎";
        }
        if (compChoice == "scissors") {
            return "Paper doesnt beat scissors you lose 💀";
        }
    }
    if (userChoice == "scissors" || userChoice == "scissor"){
        if (compChoice == "paper") {
            return "Scissors beats paper you win 😎";
        }
        if (compChoice == "rock") {
            return "Scissors doesnt beat rock you lose 💀";
        }
    }

    if (userChoice == compChoice){
        return "You tied with the computer";
    }

    return string;
}
