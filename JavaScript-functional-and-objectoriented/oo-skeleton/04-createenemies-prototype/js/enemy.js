var app = app || {};

(function(){
	"use strict";

	var Enemy = {

		enemy: {
			element: null,
			width: 50,
			height: 50
		},
		constructor: function(x, y){
			var element = document.createElement("div");
			element.className = "enemy";
			element.style.left = x + "px";
			element.style.top = y + "px";
			document.body.appendChild(element);
			this.enemy.element = element;
		}
	};

	app.Enemy = Enemy;

}());