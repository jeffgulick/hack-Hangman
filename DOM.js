`use strict`


let wordArr = [];
let resArr = [];
let wrongGuess = 0;


//func that starts the game
const startGame = () => {
    $("#guess").prop( "disabled", false );
    $("#button-addon1").prop( "disabled", false );

    let getAWord = getWord();
    wordArr = getAWord.split('');
    reset();
    addLetters(wordArr);
    resArr = [];
};

//func that randomly picks a word
const getWord = () => {
    let wordsArray = ['worm', 'puny', 'distinct', 'wash', 'prickly', 'belong', 'sturdy', 'rule', 'decisive', 'crowded'];
    return wordsArray[Math.floor(Math.random() * 10)];
    }

//resets board
const reset = () => {
    $( "li" ).remove();
    $("p").remove();
    wrongGuess = 0;
    //removes hangman image
    $myDiv = $('#gallow');
    $myDiv.css('background-image', 'none');
}

const resetGame = () => {
    $( "li" ).remove();
    $("p").remove();
    wrongGuess = 0;
    //removes hangman image
    $myDiv = $('#gallow');
    $myDiv.css('background-image', 'none');
    $("#guess").prop( "disabled", true );
    $("#button-addon1").prop( "disabled", true );
}

//gets player guess
const playerGuess = () => {
    let guess = document.getElementById('guess').value;
    guess = guess.toLowerCase();
    //below checks for any input that is not a letter and returns a message. also prints out the guesses to the dom
    let check = /^[A-Za-z]+$/;

    if(guess.match(check)){
        let used = document.getElementById('usedLetters');
        let newElement = document.createElement('P');
        newElement.innerHTML = guess;
        used.appendChild(newElement);    
    } else{
        alert('Please enter valid input: A-Z')
    }


    return guess;
}

//adds board to dom and hides the word to guess
const addLetters = (array) => {

    //creating li elements with letters in them
   array.map(num => {
       let letter = document.createElement('li');
       letter.classList.add('li')
       let answer = document.createElement('P');
       answer.innerHTML = num;

       //adding class to p for later
       answer.classList.add('hello')
       answer.style.visibility = 'hidden'; //hiding letter

       //putting all of the pieces of the board together
       let board = document.getElementById('board');
       board.appendChild(letter);
       letter.appendChild(answer);
       letter.classList.add('animate__animated', 'animate__bounceInLeft');
    });
}

//checks logic for win
const checkForWin = (a, b) => {
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
            return false;
        }
    }
    return true;
}

//testing for correct guess. revealing letters on board
const testGuess = (guess, arr) => {
    document.getElementById('guess').value = "";
    let goodGuess = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] === guess){
            resArr[i] = guess;
            goodGuess++;
            //below reveals correctly guessed letters on the board
            let temp = document.getElementsByClassName('hello').item(i);
            temp.style.visibility = 'visible'
        } 
    } 
    //building gallows and hangman
    if(goodGuess == 0){
        wrongGuess++;
        let image = document.getElementById('gallow');
        image.style.backgroundImage = `url(./assets/images/${wrongGuess}.jpg)`;
    } 
    if(wrongGuess >= 7){
        let animate = document.getElementById('gallow');
        animate.classList.add('animate__animated', 'animate__heartBeat');
        animate.style.setProperty('--animate-duration', '1.5s');
        setTimeout(() => {
            let word = wordArr.join('');
            alert(`You lost, the correct word was ${word}`);
            animate.classList.remove('animate__animated', 'animate__heartBeat')
            reset();
            startGame();

        }, 1500);
    }
}

//main function for game
const hangMan = () => {
    let guess = playerGuess();
    testGuess(guess, wordArr); 
    if(checkForWin(wordArr, resArr)){
        let tempWin = document.getElementById('board');
        // tempWin.classList.add('animate__animated', 'animate__shakeY');
        // tempWin.style.setProperty('--animate-duration', '1s');

        setTimeout(() => {

            let close = confirm("You Win!!!");
            // animate.classList.remove('animate__animated', 'animate__shakeY')
            if(close == true){
                reset();
                startGame();
            }

        }, 1050);

        
        console.log('you winner')
    }
}
