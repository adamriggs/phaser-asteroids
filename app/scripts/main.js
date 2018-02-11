var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


function preload() {
	game.load.image("ship", "images/assets/ship.png");
	game.load.image("marky", "images/assets/marky.png");
	game.load.image("bullet", "images/assets/bullets.png");
	game.load.image("space", "images/assets/space.jpg");
}

var sprite;
var marky;
var cursors;

var bullet;
var bullets;
var bulletTime = 0;

function create() {

	game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;

    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.tileSprite(0, 0, game.width, game.height, 'space');

	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(40, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);

    sprite = game.add.sprite(372, 268, 'ship');
    sprite.anchor.set(0.5);

    marky = game.add.sprite(0, 0, 'marky');

    game.physics.enable([sprite, marky], Phaser.Physics.ARCADE);

    sprite.body.drag.set(100);
    sprite.body.maxVelocity.set(200);
    console.log(sprite);
    console.log(sprite.texture.crop.width);
    console.log(sprite.texture.crop.height);

    marky.body.velocity.setTo(2, 60);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
}

function update() {

	updateControls();

    screenWrap(sprite);
    screenWrap(marky);

    bullets.forEachExists(screenWrap, this);
}

function fireBullet () {

    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(sprite.body.x + 28, sprite.body.y + 32);
            bullet.lifespan = 2000;
            bullet.rotation = sprite.rotation;
            game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }

}

function screenWrap (sprite) {

    if (sprite.x < 0) {
        sprite.x = game.width;
    } else if (sprite.x > game.width) {
        sprite.x = 0;
    }

    if (sprite.y < 0) {
        sprite.y = game.height - sprite.texture.crop.height;
    } else if (sprite.y > game.height) {
        sprite.y = 0 ;//sprite.texture.crop.height;
        console.log(sprite.texture.crop.height);
        //console.log(sprite.y = 0 - sprite.texture.crop.height);
    }

}

function render() {
	//game.debug.cameraInfo(game.camera, 32, 32);

	// game.debug.bodyInfo(sprite, 32, 32);
	// game.debug.body(sprite);
}