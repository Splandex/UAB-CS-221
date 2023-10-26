let list = [
    "rock",
    "paper",
    "scissors"
]

while (true) {
    let input = prompt("Choose rock, paper, or scissors", "Rock").toLowerCase();
    let computerChoice = list[Math.floor(Math.random()*3)]

    if (list.includes(input) == false) {
        confirm("Please choose rock, paper, or scissors")
        continue
    }

    if (input == computerChoice){
        confirm("The computer chose " + computerChoice + ". Tie game")
    } else if ((input == "rock" && computerChoice == "scissors") 
    || (input == "paper" && computerChoice == "rock") 
    || (input == "scissors" && computerChoice == "paper")) 
    {
        confirm("The computer chose " + computerChoice + ". You win")
    } else {
        confirm("The computer chose " + computerChoice + ". You lose")
    }
}

 