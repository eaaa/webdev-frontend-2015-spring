(function(){
	"use strict";

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
		registerKeyboardEvents();
		createPlayer();
		render();
	};

	var registerKeyboardEvents = function(){
		document.body.addEventListener("keydown", function(e){
			game.keys[e.keyCode] = true;
		});
		document.body.addEventListener("keyup", function(e){
			delete game.keys[e.keyCode];
		});	
	};

	var createPlayer = function(){
		var element = document.createElement("div");
		element.className = "player";
		document.body.appendChild(element);
		game.player = element;
	};

	var render = function(){
		// the game loop
		if(game.keys[game.keyRight]){
			game.player.style.left = game.player.offsetLeft + 5 + "px";
		}
		if(game.keys[game.keyLeft]){
			game.player.style.left = game.player.offsetLeft - 5 + "px";
		}
		if(game.keys[game.keyUp]){
			game.player.style.top = game.player.offsetTop - 5 + "px";
		}
		if(game.keys[game.keyDown]){
			game.player.style.top = game.player.offsetTop + 5 + "px";
		}
		game.animationId = requestAnimationFrame(render);
	};

	init();

}());