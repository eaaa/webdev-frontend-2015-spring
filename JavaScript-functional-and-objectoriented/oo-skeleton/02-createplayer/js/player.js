var app = app || {};

(function(){
	"use strict";

	function Player(){
		
		var player = {
			speed: 5,
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

		return {
			createPlayer: createPlayer
		};

	}

	app.Player = Player;

}());