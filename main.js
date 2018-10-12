'use strict';

var UXComponent = function () {
	this.state = UXComponent.State.DISABLED | UXComponent.State.HAS_ICON;

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

// Mapping
UXComponent.StateClassName = {
	'1': 'item-disabled',
	'2': 'item-focused',
	'4': 'item-hovered',
	'8': 'item-active',
	'16': 'item-hasicon'
};

UXComponent.prototype.getClassName = function () {
	Object.keys(UXComponent.State).forEach(function(stateName){
		var state = UXComponent.State[stateName];
		if (Boolean(this.state & UXComponent.State[stateName])) {
			this.element.classList.add(UXComponent.StateClassName[stateName]);
		}
	}, this);
};

var myButton = new UXComponent();
myButton.element.textContent = 'Кнопка';
document.body.appendChild(myButton.element);