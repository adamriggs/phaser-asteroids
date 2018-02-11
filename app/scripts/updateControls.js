function updateControls() {

    if (cursors.up.isDown) {
        game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration);
    } else {
        sprite.body.acceleration.set(0);
    }

    if (cursors.left.isDown) {
        sprite.body.angularVelocity = -300;
    } else if (cursors.right.isDown) {
        sprite.body.angularVelocity = 300;
    } else {
        sprite.body.angularVelocity = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        fireBullet();
    }

};