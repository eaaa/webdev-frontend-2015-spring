(function(){
	"use strict";

	var GameApp = {

		game: {
			// game properties and objects
			animationId: null
		},
		init: function(){
			// set up the game
			GameApp.render();
		},
		render: function(){
			// the game loop
			console.log(GameApp.game.animationId);
			GameApp.game.animationId = requestAnimationFrame(GameApp.render);
		}
	};

	GameApp.init();

}());