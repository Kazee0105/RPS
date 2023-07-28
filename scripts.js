//Player clicks a button and executes 1 round.
//Each time a button is clicked, check to see the value of Player/Opponent.
//If either one is = 5 then announce winner.
//Else If either one is less than <5 buttons are still clickable.



//Test with Fire button Only.
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const playerResult = document.querySelector('#player');
const compResult = document.querySelector('#comp');
const results = document.querySelector('.matches');


let playerChoice = ''
let playerCount = 0;
let compCount = 0;


const compChoice = () => {
    let choice = ['fire','water','grass']; 
    return choice[Math.floor(Math.random()*choice.length)];
}

const checkResult = () => {
    if(playerCount === 5 || compCount === 5){
        fire.disabled = true;
        water.disabled = true;
        grass.disabled = true;
        return console.log('match decided');
    } 
}

fire.addEventListener('click', () => {
    playerChoice = 'fire';
    opponentChoice = compChoice();

        if(opponentChoice === 'grass') {
            playerCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Win : Fire beats Grass`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'water'){
            compCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Lose : Fire loses to Water`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'fire'){
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `Tie : Fire ties Fire`;
            results.appendChild(matchHistory);
        }
        //Updates the Player / Opponent Result on HTML        
        playerResult.innerHTML = playerCount;
        compResult.innerHTML = compCount;        

    checkResult()
})

water.addEventListener('click', () => {
    playerChoice = 'water';
    opponentChoice = compChoice();
    
        if(opponentChoice === 'fire') {
            playerCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Win : Water beats Fire`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'grass'){
            compCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Lose : Water loses to Grass`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'water'){
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `Tie : Water ties Water`;
            results.appendChild(matchHistory);
        }
    
        playerResult.innerHTML = playerCount;
        compResult.innerHTML = compCount;
    
    checkResult()
})

grass.addEventListener('click', () => {
    playerChoice = 'grass';
    opponentChoice = compChoice();
    
        if(opponentChoice === 'water') {
            playerCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Win : Grass beats Water`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'fire'){
            compCount++
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `You Lose : Grass loses to Fire`;
            results.appendChild(matchHistory);
        }else if(opponentChoice === 'grass'){
            const matchHistory = document.createElement('p')
            matchHistory.innerText = `Tie : Grass ties Grass`;
            results.appendChild(matchHistory);
        }
    
        playerResult.innerHTML = playerCount;
        compResult.innerHTML = compCount;
    
    checkResult()
})















