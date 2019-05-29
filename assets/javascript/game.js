//Principle variables

var letters = ["a","b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = 0;

var userGuess;




//Generate a random letter from the array


var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log = randomLetter;


//Function to choose the random letter and compare with user input

function randomLetterSelect() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)]; 
    console.log(randomLetter);

}

//for user to input a guess and calculate either wins or losses

document.onkeypress = function (event) {
    var userGuess = event.key;
}

//if-else conditions for success or failure

if (userGuess === randomLetter) {
    wins++;
    guessesLeft = 9;
    guessesSoFar = 0;

}

else {
    losses++
    guessesLeft--
    guessesSoFar--
}










//Output values to HTML file
document.getElementById("winsdisp").innerHTML = wins;
document.getElementById("lossesdisp").innerHTML = losses;
document.getElementById("guessesLeftdisp").innerHTML = guessesLeft;
document.getElementById("guessesSoFardisp").innerHTML = guessesSoFar;


}