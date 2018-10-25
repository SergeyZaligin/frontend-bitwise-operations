'use strict';

var UXComponent = function () {
	this.state = UXComponent.State.DISABLED | UXComponent.State.HAS_ICON;

	this.element = document.createElement('button');
	this.element.addEventListener('click', () => {
		this.handleClick();
		this.getClassName();
		console.log(this.state);
	});
	
	
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

UXComponent.prototype.handleClick = function () {
	if (this.state != 8) {
		this.state = UXComponent.State.ACTIVE;
	} else {
		console.log(this.state);
	}
	
};

UXComponent.prototype.getClassName = function () {
	Object.keys(UXComponent.State).forEach(function(stateName) {
		var state = UXComponent.State[stateName];
		if (Boolean(this.state & UXComponent.State[stateName])) {
			this.element.classList.add(UXComponent.StateClassName[state]);
		}
	}, this);
};



	

var myButton = new UXComponent();
console.log(myButton);

myButton.element.textContent = 'Кнопка';
document.body.appendChild(myButton.element);

