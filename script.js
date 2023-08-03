let choice = getComputerChoice();
console.log(choice);

function getComputerChoice() {
    // generates a random number 1-3
    let choice = Math.floor(Math.random() * 3) + 1;
    
    return choice;
}