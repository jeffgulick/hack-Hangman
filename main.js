//Project Objective - Reveal a letter from a word if user inputs that letter and it exists in the word. If it doesn't let the user know.
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let wordArr = ["h", "e", "l", "l", "o"];
let resArr = [];
let guess = "";

const resetBoard = (arr) => {
    for(let i = 0; i < arr.length; i++){
        resArr[i] = "_";
    }
}

const playerGuess = () => {
    printBoard();
    rl.question('Guess A Letter: ', (g) => {
    //g = g.toLowerCase();
    hangMan(g);
    playerGuess();
    //return g;
    });
}

const testGuess = (g, arr) => {
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === g){
            resArr[i] = g;
        }
    }       
}

const printBoard = () => {
    console.log(resArr);
}

const checkForWin = (a, b) => {
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
            return false;
        }
    }
    return true;
}

const hangMan = (guess) => {
    testGuess(guess, wordArr); 
    if(checkForWin(wordArr, resArr)){
        console.log("Winner");
        printBoard();
        resetBoard(wordArr);
    }else {
        playerGuess();
    }
}

resetBoard(wordArr);
playerGuess();