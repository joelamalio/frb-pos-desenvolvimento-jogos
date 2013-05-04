var game_enabled = false;
var canvas = document.getElementById("main_canvas");
var context = canvas.getContext("2d");


canvas.addEventListener("keydown", event_player, true);
canvas.addEventListener("focus", start_game, true);
var game_manager = new GameManager(canvas, context);
var player = new Player(context);
var enemy1 = new Enemy(context);

game_manager.add_player(player);
game_manager.add_enemy(enemy1);

function loop_game() {
  game_manager.draw();
}

function start_game() {
  setInterval(loop_game, 40);
}

function event_player(e) {
  if (e.keyCode == player.keys.left) {
    player.update_position_x(-player.get_velocity());
  }

  if (e.keyCode == player.keys.right) {
    player.update_position_x(player.get_velocity());
  }

  if (e.keyCode == player.keys.space) {
    game_manager.use_weapon();
  }
}
