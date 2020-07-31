`use strict`

let wordArr = ['t', 'a', 'b', 'l', 'e'];
let resArr = [];


const startGame = () => {
    // getWord();
   board = addLetters(wordArr);
    };

const reset = () => {
    $( "li" ).remove();
}

const playerGuess = () => {
    let guess = document.getElementById('guess').value;
    return guess;
}

const addLetters = (array) => {
   array.map(num => {
       let letter = document.createElement('li');
       letter.innerHTML = num;
       letter.style.color = 'white'
       let board = document.getElementById('board');
       board.appendChild(letter);
    });
}

const checkForWin = (a, b) => {
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
            return false;
        }
    }
    return true;
}

const testGuess = (guess, arr) => {
    document.getElementById('guess').value = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === guess){
            resArr[i] = guess;
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
