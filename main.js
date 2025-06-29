const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: 600,
  scene: {
    preload,
    create,
    update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
};

const game = new Phaser.Game(config);

let player;
let stars;
let cursors;
let score = 0;
let scoreText;


function preload() {
  this.load.image('sky', 'assets/mcpe-background.jpeg');
  this.load.image('ground', 'assets/1322553.jpeg');
  this.load.image('dude', 'assets/1745908713794.png');
}

function create() {
  this.add.image(config.width/2, 200, 'sky').setScale(.5, .5);
  const platforms = this.physics.add.staticGroup();
  platforms.create(config.width/2, config.height - 20, 'ground').setScale(.2, .1).refreshBody();
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setDisplaySize(50, 50);
  player.setBounce(0.3);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);
}

function update() {
  if (MoveX === 'left') {
    player.setVelocityX(-160);
  } else if (MoveX === 'right') {
    player.setVelocityX(160);
  } else {
    player.setVelocityX(0);
  }
  
  if (MoveY === 'up' && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}
