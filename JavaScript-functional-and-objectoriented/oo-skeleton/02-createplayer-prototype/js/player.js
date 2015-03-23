var app = app || {};

(function(){
	"use strict";

	var Player = {
		
		player: {
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
		}
	};

	app.Player = Player;

}());