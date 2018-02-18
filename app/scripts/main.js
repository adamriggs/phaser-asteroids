var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


function preload() {
	game.load.image('ship', 'images/assets/ship.png');
	game.load.image('marky', 'images/assets/marky.png');
    game.load.image('donny', 'images/assets/donny.png');
    game.load.image('pauly', 'images/assets/pauly.png');
	game.load.image('bullet', 'images/assets/bullets.png');
	game.load.image('space', 'images/assets/space.jpg');
}

var ship;
var marky;
var donny;
var pauly;
var cursors;

var bullet;
var bullets;
var bulletTime = 0;

function create() {

	//game.world.setBounds(-1000, -1000, 2000, 2000);

	game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;

    game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.tileSprite(0, 0, game.width, game.height, 'space');

	bullets = game.add.group();
    bullets.enableBody = true;

    // I think this does nothing but it needs further investigation
    //bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(40, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);

    ship = game.add.sprite(372, 268, 'ship');
    ship.anchor.set(0.5);

    // I think this does nothing but it needs further investigation
    //ship.physicsBodyType = Phaser.Physics.ARCADE;

    marky = game.add.sprite(0, 0, 'marky');
    marky.enableBody = true;

    donny = game.add.sprite(0, 0, 'donny');
    donny.enableBody = true;

    pauly = game.add.sprite(0, 0, 'pauly');
    pauly.enableBody = true;

    game.physics.enable([ship, marky, donny, pauly], Phaser.Physics.ARCADE);
    game.physics.enable(bullets, Phaser.Physics.ARCADE);

    ship.body.drag.set(100);
    ship.body.maxVelocity.set(200);

    marky.body.velocity.setTo(Math.random() * 2, (Math.random() * 10) + 60);
    donny.body.velocity.setTo(Math.random() * 2, (Math.random() * 10) + 60);
    pauly.body.velocity.setTo(Math.random() * 2, (Math.random() * 10) + 60);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
}

function update() {

	updateControls();

    screenWrap(ship);
    screenWrap(marky);
    screenWrap(donny);
    screenWrap(pauly);
    bullets.forEachExists(screenWrap, this);

    game.physics.arcade.overlap([marky, donny, pauly], bullets, overlapHandler, processHandler, this);
}

function overlapHandler() {
    console.log('overlap');
}

function processHandler(event) {
    console.log(event);
    console.log('process');
    return false;
}

function fireBullet () {

    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(ship.body.x + 28, ship.body.y + 32);
            bullet.lifespan = 2000;
            bullet.rotation = ship.rotation;
            game.physics.arcade.velocityFromRotation(ship.rotation, 400, bullet.body.velocity);
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
        sprite.y = 0;
    }

}

function render() {
	//game.debug.cameraInfo(game.camera, 32, 32);

	// game.debug.bodyInfo(ship, 32, 32);
	// game.debug.body(ship);
}