function getCompChoice() {
    let choiceArr = ['Paper', 'Rock', 'Scissor'];
    let randomChoice = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[randomChoice];;
  }
  /* console.log(getCompChoice()) */
  
  function playRound(p1, p2) {
    let p1choice = p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase();
    let msg = "";
    let results = 0;
    let vsArr = [p1, p2];
    let vsStr = vsArr.toString().toLowerCase();
    
    switch (vsStr) {
      case ("rock,scissor"):
      case ("scissor,paper"):
      case ("paper,rock"):
        msg = "You Win! " + p1choice + " beats " + p2;
        break;
      case ("rock,paper"):
      case ("scissor,rock"):
      case ("paper,scissor"):
        msg = "You Lose! " + p2 + " beats " + p1choice;
        break;
       case ("rock,rock"):
       case ("scissor,scissor"):
       case ("paper,paper"):
           msg = "Tie! " + p1choice + " beats " + p2;
    }
    console.log(msg)
    
    if(msg.includes("Win")){
        results = 2;
    }
    else if(msg.includes("Lose")){
        results = -2;
    }
    else {
        results = 0;
    }
    
    return results;
  }
  /* plays 1 round and returns a message */
  
  function game() {
      let round1 = playRound(prompt(),getCompChoice());
    let round2 = playRound(prompt(),getCompChoice());
    let round3 = playRound(prompt(),getCompChoice());
    let round4 = playRound(prompt(),getCompChoice());
    let round5 = playRound(prompt(),getCompChoice());
    
    let final = ""
    let sum = round1 + round2 + round3 + round4 + round5
    
    if(sum < 0){
        final = "You Lost"
    }
    else if (sum >= 2){
     final = "You Win"
    }
    else{
        final = "Tied"
    }
    return final;
  }
  
  console.log(game())
  