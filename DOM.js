`use strict`

let wordArr = [];
let resArr = [];

//func that starts the game
const startGame = () => {
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
}

//gets player guess
const playerGuess = () => {
    let guess = document.getElementById('guess').value;

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
       let answer = document.createElement('P');
       answer.innerHTML = num;

       //adding class to p for later
       $(answer).addClass('hello');
       answer.style.visibility = 'hidden'; //hiding letter

       //putting all of the pieces of the board together
       let board = document.getElementById('board');
       board.appendChild(letter);
       letter.appendChild(answer)
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
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === guess){
            resArr[i] = guess;

            //below reveals correctly guessed letters on the board
            let temp = document.getElementsByClassName('hello').item(i);
            temp.style.visibility = 'visible'
        } 
    }       
}

//main function for game
const hangMan = () => {
    let guess = playerGuess();
    testGuess(guess, wordArr); 
    if(checkForWin(wordArr, resArr)){
        setTimeout(() => {
            let close = confirm("You Win!!!")
            if(close == true){
                reset();
            }
        }, 250);

        
        console.log('you winner')
    }
}
