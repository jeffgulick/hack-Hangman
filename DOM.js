`use strict`

let wordArr = ['t', 'a', 'b', 'l', 'e'];
let resArr = [];

//func that starts the game
const startGame = () => {
    // getWord();
    reset();
   board = addLetters(wordArr);
    };
//resets board
const reset = () => {
    $( "li" ).remove();
}
//gets player guess
const playerGuess = () => {
    let guess = document.getElementById('guess').value;
    return guess;
}
//adds board to dom
const addLetters = (array) => {
    //creating li elements with letters in them
   array.map(num => {
       let letter = document.createElement('li');
       letter.innerHTML = num;
       letter.style.color = 'white'; //hiding the letters
       let board = document.getElementById('board');
       board.appendChild(letter);
    });
}
//this works. still need to add to dom
const checkForWin = (a, b) => {
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
            return false;
        }
    }
    return true;
}
//testing for win. revealing letters on board
const testGuess = (guess, arr) => {
    document.getElementById('guess').value = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === guess){
            resArr[i] = guess;
            //below reveals correctly guessed letters
            let temp = document.getElementsByTagName("li").item(i);
            temp.style.color = 'black'
        }
    }       
}

const hangMan = () => {
    let guess = playerGuess();
    testGuess(guess, wordArr); 
    checkForWin(wordArr, resArr);

    // if(checkForWin){
    //     console.log('you winner')
    //     reset();
    // }
}
