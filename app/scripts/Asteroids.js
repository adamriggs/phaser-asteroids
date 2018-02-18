var Asteroids = {

	initialAsteroidCount = 16,
	liveAsteroids: [],
	deadAsteroids: [],

	preload: function() {
		game.load.image('marky', 'images/assets/marky.png');
	    game.load.image('donny', 'images/assets/donny.png');
	    game.load.image('pauly', 'images/assets/pauly.png');
	},

	create: function() {
		for(var i = 0; i < initialAsteroidCount; i++) {
			//create asteroids here
		}
	},

	update: function() {

	},

	render: function() {
		
	},


	
}