var app = app || {};

(function(){
	"use strict";

	var GameApp = {

		game: {
			// game properties and objects
			animationId: null,
			player: null
		},
		init: function(){
			// set up the game
			this.game.player = Object.create(app.Player);
			this.game.player.createPlayer();
			GameApp.render();
		},
		render: function(){
			// the game loop
			GameApp.game.animationId = requestAnimationFrame(GameApp.render);
		}

	};

	GameApp.init();

}());