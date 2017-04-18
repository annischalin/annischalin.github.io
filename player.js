var myGameArea = document.getElementById("myCanvas");
var img = document.getElementById("atomi");
function Player(x, y, color, width, height) {
    'use strict';
	this.move = function () {
	    return x;
	};
	this.changeSpeed = function () {
		return x;
	};
	this.reset =  function () {
		return x;
	};
	this.draw = function () {
	    var ctx = myGameArea.context;
        ctx.drawImage(img, width, height);
	};
}
var myPlayer = new Player(50, 50, "red", 50, 50);
