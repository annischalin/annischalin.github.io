function getRandomInteger() {
	return Math.floor(Math.random()*10) + 1
}

function compareNumbers(first, second) {
	if (first === second) {
		return true
	}
	else {
		return false
	}
}

var random = getRandomInteger();

function guessTheNumber() {
	console.log(random);
    var guess = Number(document.getElementById("number").value);
     if ( guess < 0 || guess%1 !== 0 || guess > 10)  {
        alert("The number has to be a whole number between 0 and 10.")
    } else if (compareNumbers (guess, random)===false) {
        alert("Wrong, try again!");
    }
	else if(compareNumbers (guess, random)===true) {
		alert("You guessed it!");
		random = getRandomInteger();
	}
}

