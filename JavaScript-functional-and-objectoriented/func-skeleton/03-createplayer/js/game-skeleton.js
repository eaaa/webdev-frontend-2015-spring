(function(){
	"use strict";

	var game = {
		// game properties and objects
		animationId: null,
		player: null
	};

	var init = function(){
		// set up the game
		createPlayer();
		render();
	};

	var createPlayer = function(){
		var element = document.createElement("div");
		element.className = "player";
		document.body.appendChild(element);
		game.player = element;
	};

	var render = function(){
		// the game loop
		game.animationId = requestAnimationFrame(render);
	};

	init();

}());