function start (){
    //get the name from the form
    let name = document.getElementById('userName').value;
        
    if (name === null){
        document.getElementById('responseText').innerText = 'Please enter a name!!'
    }else{
        document.getElementById('responseText').innerText = 'Welcome and good luck, ' + name
        document.getElementById('nameInput').classList.add('d-none');
    }
}

//getting the computer choice
function playGame(compChoice) {
    let randomNumber = Math.floor(Math.random() * 3);
    //the possible random choices:
    if (randomNumber === 0){
        compChoice = 'Rock'
    }else if (randomNumber === 1){
        compChoice = 'Paper'
    }else (randomNumber === 2){
        compChoice = 'Scissors'
    }
  }

  //who wins cases

   