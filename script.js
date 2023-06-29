//Returns a Rock, Paper, or Scissor
function getComputerChoice(){
    var number = Math.floor(Math.random() * 3);
    let choice = "";

    if(number === 0){
        choice = "rock"
    }
    else if(number === 1){
        choice = "paper"
    }
    else {
        choice = "scissor"
    }
    return choice;
}


//function to play round
function playRound(playerSelection, computerSelection) {
    var outcome = "empty";
    var compare = new Array(playerSelection, computerSelection).toString();
    
    //Winning Arrays
    var win1 = new Array("rock","scissor").toString();
    var win2 = new Array("scissor","paper").toString();
    var win3 = new Array("paper","rock").toString();

    //Losing Arrays
    var lose1 = new Array("rock","paper").toString();
    var lose2 = new Array("scissor","rock").toString();
    var lose3 = new Array("paper","scissor").toString();

    //Tie Arrays
    var tie1 = new Array("rock","rock").toString();
    var tie2 = new Array("scissor","scissor").toString();
    var tie3 = new Array("paper","paper").toString();

    if(compare === win1 || compare === win2){
        let compareArray = compare.split(",")
        outcome = "You Win! " + compareArray[0] + " beats " + compareArray[1];
    }
    else if (compare === win3){
        let compareArray = compare.split(",")
        outcome = "You Win! " + compareArray[0] + " beats " + compareArray[1];
    }
    
    else if (compare == lose1 || compare === lose2){
        let compareArray = compare.split(",")
        outcome = "You Lose! " + compareArray[1] + " beats " + compareArray[0];
    }
    else if(compare === lose3){
        let compareArray = compare.split(",")
        outcome = "You Lose! " + compareArray[1] + " beats " + compareArray[0];
    }
    else {
        let compareArray = compare.split(",")
        outcome = "You Tied! " + compareArray[0] + " ties " + compareArray[1];
    }
    return outcome;
  }
   
  let playerPrompt = prompt("Choose Rock, Paper or Scissor");
  let playerSelection = playerPrompt.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection))
  console.log(game());

  function game(){
    return "this game function is running"
  }
  
