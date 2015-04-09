var app = app || {};

(function(){
	"use strict";
	
	function GameApp(){
		var game = {
			enemyCount: 5,
			enemies: [],
			bullets: [],
			bulletsToDestroy: [],
			player: null,
			animationId: null,
			keys: {},
			keyLeft: 37,
			keyUp: 38,
			keyRight: 39,
			keyDown: 40,
			keySpace: 32,
			stageRight: window.innerWidth - 50,
			stageBottom: window.innerHeight - 50
		};

		var initGame = function(){
			initKeyboardEvents();
			game.player = new app.Player();
			game.player.createPlayer();
			createEnemies();
			render();
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

		var initKeyboardEvents = function(){
			document.body.addEventListener("keydown", function(e){
				game.keys[e.keyCode] = true;
			});
			document.body.addEventListener("keyup", function(e){
				delete game.keys[e.keyCode];
			});
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

		var createBullet = function(){
			var playerCoordinates = game.player.getCoordinates();
			var x = playerCoordinates.right,
				y = playerCoordinates.bottom;
			var bullet = new app.Bullet();
			bullet.createBullet(x, y, game.stageRight);
			game.bullets.push(bullet);
		};

		var destroyBullets = function(){
			game.bulletsToDestroy.forEach(function(bullet, i, arr){
				bullet.destroy();
				game.bullets.splice(game.bullets.indexOf(bullet), 1);
				
			});
			game.bulletsToDestroy = [];
		};

		var render = function(){
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
			if(game.keys[game.keySpace]){
				createBullet();
			}
			var enemyCollided = collisionTest();
			if(enemyCollided){
				game.enemies.splice(game.enemies.indexOf(enemyCollided), 1);
				enemyCollided.destroy();
			}
			game.bullets.forEach(function(bullet, i, arr){
				bullet.moveRight();
				if(bullet.readyForDestroy()){
					game.bulletsToDestroy.push(bullet);
				}
			});
			destroyBullets();
			game.animationId = requestAnimationFrame(render);
		};

		initGame();
	}

	new GameApp();

}());