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
		keyDown: 40,
		enemyCount: 5,
		enemies: [],
		stageRight: window.innerWidth - 50,
		stageBottom: window.innerHeight - 50
	};

	var init = function(){
		// set up the game
		registerKeyboardEvents();
		createPlayer();
		createEnemies();
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

	var createEnemies = function(){
		for(var i=0; i<game.enemyCount; i++){
			var enemy = createEnemy();
			game.enemies.push(enemy);
		}
	};

	var createEnemy = function(){
		var element = document.createElement("div");
		element.className = "enemy";
		element.style.left = randomNumber(0, game.stageRight) + "px";
		element.style.top = randomNumber(0, game.stageBottom) + "px";
		document.body.appendChild(element);
		return element;
	};

	var randomNumber = function(min, max){
		return Math.round(Math.random()*(max-min) + min);
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