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

//need to fix this so that the if then statement works and the text changes if it is null; also make sure the text box disappears when the enter button is clicked

//getting the computer choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors'
    }
  }