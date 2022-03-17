const game = ()=> {

let pScore=0;
let cScore=0;

//starting the game
const startGame = ()=> {
    const playBtn=document.querySelector('.intro button');
    const introScreen=document.querySelector('.intro');
    const match=document.querySelector('.match');


    playBtn.addEventListener('click',() =>{

        introScreen.classList.add('fadeout');
        match.classList.add('fadein');
    });
};

//playing match

const playMatch = ()=>{
    const options=document.querySelectorAll('.options button');
    const playerHand=document.querySelector('.player-hand');
    const computerHand=document.querySelector('.computer-hand');
    const hands=document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
        hand.addEventListener("animationend", function(){
            this.style.animation='';
        });
    });

    //computer options

    const computerOptions=['rock','paper','scissors'];   

    options.forEach(options =>{
        options.addEventListener('click',function(){
            const computerNumber=Math.floor(Math.random()*3);
            const computerChoice=computerOptions[computerNumber];

            setTimeout(() => {
                compareHands(this.textContent,computerChoice);

            //updating images
            playerHand.src = `./Image/${this.textContent}.png`;
            computerHand.src = `./Image/${computerChoice}.png`;
            }, 2000);

            playerHand.style.animation='shakePlayer 2s ease';
            computerHand.style.animation='shakeComputer 2s ease';

        });
    });
};

const updateScore=()=>{
    const playerScore=document.querySelector('.player-score p');
    const computerScore=document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
}

const compareHands=(playerChoice,computerChoice)=>{

    const winner=document.querySelector('.winner');
    if(playerChoice===computerChoice){
        winner.textContent='It is a tie !'
        return;
    }
    if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent='Player wins !';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent='Computer wins !';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent='Computer wins !';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent='Player wins !';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice==='scissors'){
        if(computerChoice==='rock'){
            winner.textContent='Computer wins !';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent='Player wins !';
            pScore++;
            updateScore();
            return;
        }
    }
}


//call for the inner function
startGame();
playMatch();
};

//starting the game function
game();