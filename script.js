//universally defning
let userScore=0
let compScore=0
let userName
let userChoice
let roundResult

function start (){
    //get the name from the form
    let name = document.getElementById('userName').value;
    document.getElementById('responseText').innerText = 'Welcome and good luck, ' + name
        document.getElementById('nameInput').classList.add('d-none');

}


//getting your choice and the computer choice
function playGame(userSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[randomNumber = Math.floor(Math.random() * 3)];
    //the possible random choices:
    if (randomNumber === 0){
        compChoice = 'Rock'
        document.getElementById('compChoice').innerText = '🪨 Rock 🪨';
    }else if (randomNumber === 1){
        compChoice = 'Paper'
        document.getElementById('compChoice').innerText = '📄 Paper 📄';
    }else{
        compChoice = 'Scissors'
        document.getElementById('compChoice').innerText = '✂ Scissor ✂';
    }

    userChoice = userSelection
    compChoice = computerSelection
    
    //who wins cases
    if (userSelection === computerSelection){
        roundResult = "It is a tie!"
    }else if ((userSelection === 'rock' && computerSelection === 'scissors') || (userSelection === 'paper' && computerSelection === 'rock') || (userSelection === 'scissors' && computerSelection === 'paper')){
        userScore++;
        roundResult = "You win!!"

        updateDisplayInfo()
        isGameOver()
    }else {
        compScore++;
        roundResult = "You lose!"

        updateDisplayInfo()
        isGameOver()
    }
  }

  function isGameOver(){
    if (userScore === 3){
        console.log("You Win")
        document.getElementById('result').innerText = `The game is over. ${userName} won with a final score of ${userScore} to ${compScore}.`
    } else if (compScore === 3){
        console.log("Computer Wins")
        document.getElementById('result').innerText = `The game is over. The computer has won with a final score of ${compScore} to ${userScore}.`
    }
  }

  function updateDisplayInfo(){
    document.getElementById('userScore').innerText = userScore;
    document.getElementById('compScore').innerText = compScore;
    document.getElementById('result').innerText = `You: ${userChoice}, Computer: ${compChoice} ${roundResult}`;
  }

  //button to reload page
  function reload(){
    location.reload()
  }