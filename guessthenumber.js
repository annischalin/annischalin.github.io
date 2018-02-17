
var random = Math.floor(Math.random()*10) + 1;

function guessTheNumber() {
    var guess = Number(document.getElementById("number").value);
    
    if (guess === random) {
        alert("You guessed it!");
    } else if ( guess < 0 || guess%1 !== 0 || guess > 10)  {
        alert("The number has to be a whole number between 0 and 10.")
    } else {
        alert("Wrong, try again!");
    }
}

