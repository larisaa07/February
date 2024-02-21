function start (){
    //get the name from the form
    let name = document.getElementById('userName').value;
    
    //what will happen if you enter nothing; then if you enter a name
    if (name === null){
        document.getElementById('userName').innerText = 'Enter your name!'
    }else{
        document.getElementById('welcomes').innerText = 'Welcome and good luck, ' + name
        document.getElementById('inputName').classList.add('d-done');
    }
}

//need to fix this so that the if then statement works and the text changes if it is null