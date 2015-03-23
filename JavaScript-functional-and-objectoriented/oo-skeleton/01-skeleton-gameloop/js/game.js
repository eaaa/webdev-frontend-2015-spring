(function(){
	"use strict";

	function GameApp(){

		var game = {
			// game properties and objects
			animationId: null
		};

		var init = function(){
			// set up the game
			render();
		};

		var render = function(){
			// the game loop
			console.log(game.animationId);
			game.animationId = requestAnimationFrame(render);
		};

		init();

	}

	new GameApp();

}());