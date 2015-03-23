var app = app || {};

(function(){
	"use strict";

	var GameApp = {

		game: {
			// game properties and objects
			animationId: null,
			player: null,
			keys: {},
			keyLeft: 37,
			keyUp: 38,
			keyRight: 39,
			keyDown: 40
		},
		init: function(){
			// set up the game
			GameApp.initKeyboardEvents();
			this.game.player = Object.create(app.Player);
			this.game.player.createPlayer();
			GameApp.render();
		},
		initKeyboardEvents: function(){
			document.body.addEventListener("keydown", function(e){
				GameApp.game.keys[e.keyCode] = true;
			});
			document.body.addEventListener("keyup", function(e){
				delete GameApp.game.keys[e.keyCode];
			});
		},
		render: function(){
			// the game loop
			if(GameApp.game.keys[GameApp.game.keyRight]){
				GameApp.game.player.moveRight();
			}
			if(GameApp.game.keys[GameApp.game.keyLeft]){
				GameApp.game.player.moveLeft();
			}		
			if(GameApp.game.keys[GameApp.game.keyUp]){
				GameApp.game.player.moveUp();
			}		
			if(GameApp.game.keys[GameApp.game.keyDown]){
				GameApp.game.player.moveDown();
			}
			GameApp.game.animationId = requestAnimationFrame(GameApp.render);
		}
	};

	GameApp.init();

}());