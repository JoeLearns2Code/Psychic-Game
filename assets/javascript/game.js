//Principle variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = 0;



function codeAddress() {
    alert('Welcome to the Psychic Guessing Game');
    document.getElementById("winsdisp").textContent = wins;
    document.getElementById("lossesdisp").textContent = losses;
    document.getElementById("guessesLeftdisp").textContent = guessesLeft;
    document.getElementById("guessesSoFardisp").textContent = guessesSoFar;
}

window.onload = codeAddress;




//Function starts on key press:

document.onkeyup = function (event) {

    //variable for computer's letter:

    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter)


    //variable for key pressed by player

    var userGuess = event.key;



    //if-else conditions for success or failure

    if (userGuess === randomLetter) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = 0;



    } else {
        guessesLeft--
        guessesSoFar++

    }

    if (guessesLeft === 0) {
        losses++
        guessesLeft = 9
    }


    //display wins/losses/guesses left/guesses so far


    document.getElementById("winsdisp").textContent = wins;
    document.getElementById("lossesdisp").textContent = losses;
    document.getElementById("guessesLeftdisp").textContent = guessesLeft;
    document.getElementById("guessesSoFardisp").textContent = guessesSoFar;




};









