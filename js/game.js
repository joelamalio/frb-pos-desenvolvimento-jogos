var game_enabled = false;
var canvas = document.getElementById("main_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("focus", start_game, true);
var game_manager = new GameManager(canvas, context);
var player = new Player(context);
var enemy1 = new Enemy(context, "images/flag_germany.bmp", {x: 10, y: 10});
var enemy2 = new Enemy(context, "images/flag_argentina.bmp", {x: 110, y: 10});
var enemy3 = new Enemy(context, "images/flag_portugal.bmp", {x: 210, y: 10});

game_manager.set_player(player);
game_manager.add_enemy(enemy1);
game_manager.add_enemy(enemy2);
game_manager.add_enemy(enemy3);

function loop_game() {
  game_manager.draw();
}

function start_game() {
  setInterval(loop_game, 40);
}
