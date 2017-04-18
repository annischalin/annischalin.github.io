function getRandomInteger(min, max) {
	'use strict';
    return Math.floor((Math.random() * max) + min);
}

var button = document.getElementById("button");
var random = getRandomInteger(1, 10);

button.onclick = function guessTheNumber() {
	'use strict';
    var guess = document.getElementById("number").value;
    if (guess === random) {
        window.alert("Your guess is correct!");
        random = getRandomInteger(1, 10);
    } else if (guess > 10 || guess < 0 || guess % 1 !== 0) {
        window.alert("Enter a whole number between 0 and 10");
    } else {
        window.alert("Your guess was wrong!");
        random = getRandomInteger(1, 10);
    }
}


