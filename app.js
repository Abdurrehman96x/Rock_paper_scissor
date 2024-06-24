let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const generateComChoice=()=>{
    const option =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const draw=()=>{
    console.log("draw game");
    msg.innerText="Game was draw play again";
    msg.style.backgroundColor="rgb(15, 15, 38)";
}
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice = generateComChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin =compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin =compChoice==="scissor"? false:true;
        }else{
            userWin =compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});