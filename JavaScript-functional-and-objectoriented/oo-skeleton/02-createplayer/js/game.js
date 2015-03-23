var app = app || {};

(function(){
	"use strict";

	function GameApp(){

		var game = {
			// game properties and objects
			animationId: null,
			player: null
		};

		var init = function(){
			// set up the game
			game.player = new app.Player();
			game.player.createPlayer();
			render();
		};

		var render = function(){
			// the game loop
			game.animationId = requestAnimationFrame(render);
		};

		init();

	}

	new GameApp();

}());