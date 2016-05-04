var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.nicknames = ko.observableArray(['John', 'Doe', 'Joe', 'Larry']);
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('John Doe');
	this.level = ko.computed(function() {
		if (this.clickCount()< 10) return 'Level 1';
		else if (this.clickCount() < 20) return 'Level 2';
		else if (this.clickCount() < 30) return 'Level 3';
		else if (this.clickCount() < 40) return 'Level 4';
		else if (this.clickCount() >= 40) return 'Level 5';
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		console.log(this.clickCount());
	};
}

ko.applyBindings(new ViewModel());