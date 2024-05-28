let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#Your-Score");
const computerScore = document.querySelector("#Comp-Score")

const genCompChoice = () =>{
    const pickchoice = ["rock", "paper", "scissors"]
    const Index = Math.floor(Math.random() * 3);
    return pickchoice[Index];
};
const drawGame = () => {
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        yourScore.innerText = userScore;
        msg.innerText = `You Win!!. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++
        computerScore.innerText = compScore;
        msg.innerText = `You Loose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //drawgame
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "rock"? true:false;
        }else if(userChoice == "rock"){
            //scissors,paper
            userWin = compChoice === "scissors"? true:false;
        }else{
            //rock,paper
            userWin = compChoice ==="paper"? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});