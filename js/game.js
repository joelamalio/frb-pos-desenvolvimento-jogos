var canvas = document.getElementById("main_canvas");
var context = canvas.getContext("2d");
var game_manager = new GameManager(canvas, context);
var player = new Player(context);
var enemy1 = new Enemy(context, "images/flag_germany.bmp", {x: 10, y: 10});
var enemy2 = new Enemy(context, "images/flag_argentina.bmp", {x: 110, y: 10});
var enemy3 = new Enemy(context, "images/flag_portugal.bmp", {x: 210, y: 10});
var interval;

game_manager.set_player(player);
game_manager.add_enemy(enemy1);
game_manager.add_enemy(enemy2);
game_manager.add_enemy(enemy3);

function loop_game() {
  if (game_manager.started && !game_manager.paused && !game_manager.lost && !game_manager.won) {
    game_manager.draw();
  } else if (game_manager.lost) {
    console.log("You lost!");
    clearInterval(interval);
  } else if (game_manager.won) {
    console.log("You won!");
    clearInterval(interval);
  }
}

function start_game() {
  interval = setInterval(loop_game, 40);
}

start_game();
