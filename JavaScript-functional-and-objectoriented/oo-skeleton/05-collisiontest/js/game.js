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
			keyDown: 40,
			enemyCount: 5,
			enemies: [],
			stageRight: window.innerWidth - 50,
			stageBottom: window.innerHeight - 50
		};

		var init = function(){
			// set up the game
			initKeyboardEvents();
			game.player = new app.Player();
			game.player.createPlayer();
			createEnemies();
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

		var createEnemies = function(){
			for(var i=0; i< game.enemyCount; i++){
				createEnemy();
			}
		};

		var createEnemy = function(){
			var x = randomNumber(0, game.stageRight),
				y = randomNumber(0, game.stageBottom);
			var enemy = new app.Enemy();
			enemy.createEnemy(x, y);
			game.enemies.push(enemy);
		};

		var randomNumber = function(min, max){
			return Math.round(Math.random()*(max-min) + min);
		};

		var collisionTest = function(){
			var collided = null;
		
			var playerCoordinates = game.player.getCoordinates();
			game.enemies.forEach(function(enemy, i, arr){
				var enemyCoordinates = enemy.getCoordinates();
				if (playerCoordinates.left < enemyCoordinates.right && 
					playerCoordinates.right > enemyCoordinates.left && 
					playerCoordinates.top < enemyCoordinates.bottom && 
					playerCoordinates.bottom > enemyCoordinates.top){
						collided = enemy;
				}
			});
			return collided;
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
			var enemyCollided = collisionTest();
			if(enemyCollided){
				game.enemies.splice(game.enemies.indexOf(enemyCollided), 1);
				enemyCollided.destroy();
			}
			game.animationId = requestAnimationFrame(render);
		};

		init();

	}

	new GameApp();

}());