var app = app || {};

(function(){
	"use strict";

	function Player(){
		
		var player = {
			speed: 3,
			width: 100,
			height: 100,
			element: null
		};

		var createPlayer = function(){
			var element = document.createElement("div");
			element.className = "player";
			document.body.appendChild(element);
			player.element = element;
		};
		
		var getCoordinates = function(){
			return{
				top: player.element.offsetTop,
				right: player.element.offsetLeft + player.width,
				bottom: player.element.offsetTop + player.height,
				left: player.element.offsetLeft
			};
		};

		var moveRight = function(){
			player.element.style.left = player.element.offsetLeft + player.speed + "px";
		};

		var moveLeft = function(){
			player.element.style.left = player.element.offsetLeft - player.speed + "px";
		};

		var moveUp = function(){
			player.element.style.top = player.element.offsetTop - player.speed + "px";
		};

		var moveDown = function(){
			player.element.style.top = player.element.offsetTop + player.speed + "px";
		};

		return {
			createPlayer: createPlayer,
			moveRight: moveRight,
			moveLeft: moveLeft,
			moveUp: moveUp,
			moveDown: moveDown,
			getCoordinates: getCoordinates
		};

	}

	app.Player = Player;

}());