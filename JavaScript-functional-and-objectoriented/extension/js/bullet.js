var app = app || {};

(function(){
	"use strict";

	function Bullet(){

		var bullet = {
			element: null,
			width: 10,
			height: 10,
			speed: 5,
			stageRight: null,
			destroyMe: false
		};

		var createBullet = function(x, y, stageRight){
			var element = document.createElement("div");
			element.className = "bullet";
			element.style.left = x + "px";
			element.style.top = y + "px";
			document.body.appendChild(element);
			bullet.element = element;
			bullet.stageRight = stageRight;
		};

		var getCoordinates = function(){
			return{
				top: bullet.element.offsetTop,
				right: bullet.element.offsetLeft + bullet.width,
				bottom: bullet.element.offsetTop + bullet.height,
				left: bullet.element.offsetLeft
			};
		};

		var destroy = function(){
			document.body.removeChild(bullet.element);
		};

		var readyForDestroy = function(){
			return bullet.destroyMe;
		};

		var moveRight = function(){
			bullet.element.style.left = bullet.element.offsetLeft + bullet.speed + "px";
			if(bullet.element.offsetLeft > bullet.stageRight){
				bullet.destroyMe = true;
			}
		};

		return {
			createBullet: createBullet,
			getCoordinates: getCoordinates,
			moveRight: moveRight,
			destroy: destroy,
			readyForDestroy: readyForDestroy
		};

	}

	app.Bullet = Bullet;


}());