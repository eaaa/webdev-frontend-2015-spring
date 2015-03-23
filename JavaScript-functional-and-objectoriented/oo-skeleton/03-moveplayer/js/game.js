var app = app || {};

(function(){
	"use strict";

	function GameApp(){

		var game = {
			// game properties and objects
			animationId: null,
			player: null,
			keys: {},
			keyLeft: 37,
			keyUp: 38,
			keyRight: 39,
			keyDown: 40
		};

		var init = function(){
			// set up the game
			initKeyboardEvents();
			game.player = new app.Player();
			game.player.createPlayer();
			render();
		};

		var initKeyboardEvents = function(){
			document.body.addEventListener("keydown", function(e){
				game.keys[e.keyCode] = true;
			});
			document.body.addEventListener("keyup", function(e){
				delete game.keys[e.keyCode];
			});
		};

		var render = function(){
			// the game loop
			if(game.keys[game.keyRight]){
				game.player.moveRight();
			}
			if(game.keys[game.keyLeft]){
				game.player.moveLeft();
			}		
			if(game.keys[game.keyUp]){
				game.player.moveUp();
			}		
			if(game.keys[game.keyDown]){
				game.player.moveDown();
			}
			game.animationId = requestAnimationFrame(render);
		};

		init();

	}

	new GameApp();

}());