let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#resetbtn");
let MsgContainer = document.querySelector(".msgcontainer");
let newGame = document.querySelector("#newgame");
let Msg = document.querySelector("#msg");

let turnO = true; //playerO,palyerX
let count = 0; //track draw

const winPatttern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = ()=> {
    turnO = true;
    count = 0;
    enableBoxes(); 
    MsgContainer.classList.add("hide");
};  

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML ="O";
            turnO = false;
        }else{
            box.innerHTML="X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    Msg.innerText = `Game was a Draw.`;
    MsgContainer.classList.remove("hide");
    disableBoxes();
  };
  

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    Msg.innerText = `Winner is ${Winner}`;
    MsgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = ()=> {
    for(let pattern of winPatttern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1 !="" && position2!="" && position3!=""){
            if(position1 === position2 && position2 === position3){
                console.log("Winner", position1);
                showWinner(position1);
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click",resetGame);