var app = app || {};

(function(){
	"use strict";

	var Player = {
		
		player:{
			speed: 5,
			width: 100,
			height: 100,
			element: null
		},
		createPlayer: function(){
			var element = document.createElement("div");
			element.className = "player";
			document.body.appendChild(element);
			this.player.element = element;
		},
		moveRight: function(){
			this.player.element.style.left = this.player.element.offsetLeft + this.player.speed + "px";
		},

		moveLeft: function(){
			this.player.element.style.left = this.player.element.offsetLeft - this.player.speed + "px";
		},
		moveUp: function(){
			this.player.element.style.top = this.player.element.offsetTop - this.player.speed + "px";
		},
		moveDown: function(){
			this.player.element.style.top = this.player.element.offsetTop + this.player.speed + "px";
		}
		
	};

	app.Player = Player;

}());