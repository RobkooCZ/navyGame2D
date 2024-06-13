// src/game.js

// Phaser game configuration
const config = {
    type: Phaser.AUTO,
    width: 60,
    height: 60,
    scene: {
        preload: preload,
        create: create
    }
};

// Create Phaser game instance
const game = new Phaser.Game(config);

// Preload function: load assets
function preload() {
    this.load.image('cube', 'assets/images/cube.png'); // Load cube image
}

// Create function: display cube sprite
function create() {
    const cube = this.add.sprite(400, 300, 'cube'); // Add cube sprite at (400, 300)
}
