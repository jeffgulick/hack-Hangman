`use strict`

let wordArr = ['t', 'a', 'b', 'l', 'e'];
let resArr = [];
let wrongArr = [];

//func that randomly picks a word
const getWord = () => {
    let wordsArray = ['worm', 'puny', 'distinct', 'wash', 'prickly', 'belong', 'sturdy', 'rule', 'decisive', 'crowded'];
    return wordsArray[Math.floor(Math.random() * 10)];
}

//func that starts the game
const startGame = () => {
    let getAWord = getWord();
    wordArr = getAWord.split('');
    reset();
    addLetters(wordArr);
    resArr = [];
};
//resets board
const reset = () => {
    $( "li" ).remove();
    $("p").remove();
}
//gets player guess
const playerGuess = () => {
    let guess = document.getElementById('guess').value;
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
            //below reveals correctly guessed letters on the board
            let temp = document.getElementsByTagName("li").item(i);
            temp.style.color = 'black';
        } 
    }       
}

const hangMan = () => {
    let guess = playerGuess();
    testGuess(guess, wordArr); 
    // checkForWin(wordArr, resArr);
// this is for later
    if(checkForWin(wordArr, resArr)){
    
        setTimeout(() => {
            let close = confirm("You Win!!!")
            if(close == true){
                reset();
            }
        }, 500);

        
        console.log('you winner')
    }
}
