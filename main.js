'use strict';

var UXComponent = function () {
	this.element = document.createElement('button');
	this.getClassName();
}

UXComponent.State = {
	DISABLED: 1,
	FOCUSED: 2,
	HOVERED: 4,
	ACTIVE: 8,
	HAS_ICON: 16
};

UXComponent.prototype.getClassName = function () {
	
};

var myButton = new UXComponent();
myButton.element.textContent = 'Кнопка';
document.body.appendChild(myButton.element);