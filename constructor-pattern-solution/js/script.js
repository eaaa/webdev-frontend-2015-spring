var myPlayer = null,
	myEnemies = [];

(function(){
	"use strict";

	function Actor(){
		this.x = 0;
		this.y = 0;
		this.element = document.createElement("div");
		document.body.appendChild(this.element);
	}

	Actor.prototype.move = function(x, y){
		this.x += x;
		this.y += y;
		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";
	};

	function Player(){
		Actor.call(this);
		this.element.className = "player";
	}

	Player.prototype = Object.create(Actor.prototype);
	Player.prototype.constructor = Player;

	function Enemy(x, y){
		Actor.call(this);
		this.x = x;
		this.y = y;
		this.move(0, 0);
		this.element.className = "enemy";
	}

	Enemy.prototype = Object.create(Actor.prototype);
	Enemy.prototype.constructor = Enemy;

	for(var i=0; i<5; i++){
		myEnemies.push(new Enemy(300, i*110));
	}

	myPlayer = new Player();

})();

