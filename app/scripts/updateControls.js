function updateControls() {

    if (cursors.up.isDown) {
        game.physics.arcade.accelerationFromRotation(ship.rotation, 200, ship.body.acceleration);
    } else {
        ship.body.acceleration.set(0);
    }

    if (cursors.left.isDown) {
        ship.body.angularVelocity = -300;
    } else if (cursors.right.isDown) {
        ship.body.angularVelocity = 300;
    } else {
        ship.body.angularVelocity = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        fireBullet();
    }

};