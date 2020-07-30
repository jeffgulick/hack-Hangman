`use strict`

let wordArr = ["h", "e", "l", "l", "o"];
let resArr = [];


const playerGuess = () => {
    let guess = document.getElementById('guess').value;
    document.getElementById('guess').value = ''
    buildBoard(wordArr);
    hangMan(guess);
    playerGuess();
    };

const buildBoard = (array) => {
   let board = array.map(element => '_');
    // document.getElementById('word').innerHTML = board;
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
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === guess){
            resArr[i] = guess;
            document.getElementById('word').innerHTML = resArr;
            
            // let newElement = document.createElement('H1');
            // newElement.innerHTML = resArr;
            // document.getElementById('answer').appendChild(newElement)
        }
    }       
}

const hangMan = (guess) => {
    testGuess(guess, wordArr); 
    checkForWin(guess)
    // if(checkForWin(wordArr, resArr)){
    //     console.log("Winner");
    //     printBoard();
    //     resetBoard(wordArr);
    // }else {
    //     playerGuess();
    // }
    playerGuess();
}
