//var asteroid = new Phaser.Sprite(game, 0, 0);

var asteroid;



asteroid.prototype.init = function() {
	asteroid = new Phaser.Sprite(game, 0, 0);

	asteroid.prototype.inUse = true;
	asteroid.prototype.state = 1;
	asteroid.prototype.xVelocity = 0;
	asteroid.prototype.yVelocity = 0;
 
	this.anchor = new PIXI.Point(0.5, 0.5);
	console.log('init');
}

asteroid.prototype.collision = function() {

}

asteroid.prototype.setState = function(state) {

	this.setImage(state);
	this.setSize(state);
	this.setVelocity(state);
}

asteroid.prototype.setImage = function(state) {
	if(state===1) {
		this.key = 'pauly';
	}

	if(state===2) {
		this.key = 'donny';
	}

	if(state===3) {
		this.key = 'marky';
	}
}

asteroid.prototype.setSize = function(state) {
	if(state===1) {

	}

	if(state===2) {

	}

	if(state===3) {

	}
}

asteroid.prototype.setVelocity = function(state) {
	if(state===1) {

	}

	if(state===2) {

	}

	if(state===3) {

	}
}

asteroid.prototype.show = function() {

}

asteroid.prototype.hide = function() {
	
}

