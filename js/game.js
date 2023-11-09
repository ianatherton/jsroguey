const gameArea = document.getElementById('game-area')
// Player class
class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.character = '&';
  }

  draw() {
    let gameScreen = '';
    
    // Add newlines for blank rows
    for (let i = 0; i < 20; i++) {
      gameScreen += '\n';
    }

    // Add player character
    gameScreen += this.character;

    // Draw game screen
    gameArea.innerHTML = gameScreen;

  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.draw(); 
  }

}

// Create player
const player = new Player();

// Draw initial screen
player.draw();

// Movement
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    player.move(0, -1);
  } else if (e.key === 'ArrowDown') {
    player.move(0, 1);
  } else if (e.key === 'ArrowLeft') {
    player.move(-1, 0);
  } else if (e.key === 'ArrowRight') {
    player.move(1, 0);
  }
});