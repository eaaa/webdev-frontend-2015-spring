var app = app || {};

(function(){
	"use strict";

	function Enemy(){

		var enemy = {
			element: null,
			width: 50,
			height: 50
		};

		var createEnemy = function(x, y){
			var element = document.createElement("div");
			element.className = "enemy";
			element.style.left = x + "px";
			element.style.top = y + "px";
			document.body.appendChild(element);
			enemy.element = element;
		};

		var getCoordinates = function(){
			return{
				top: enemy.element.offsetTop,
				right: enemy.element.offsetLeft + enemy.width,
				bottom: enemy.element.offsetTop + enemy.height,
				left: enemy.element.offsetLeft
			};
		};

		var destroy = function(){
			document.body.removeChild(enemy.element);
		};

		return {
			createEnemy: createEnemy,
			getCoordinates: getCoordinates,
			destroy: destroy
		};

	}

	app.Enemy = Enemy;


}());