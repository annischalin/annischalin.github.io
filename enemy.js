var rand = Math.floor((Math.random() * 10) + 1);
var enemies = [];

var myGameArea = document.getElementById("myCanvas");

function Enemy(x, y, color, width, height) {
	'use strict';
    
	this.move = function () {
	    return x;
	};
	
	this.reset =  function () {
		return x;
	};
	
	this.create = function createEnemy() {
        enemies = +new Enemy(0, 0);
    };

	var ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
	
}

var enemies = [];
