var canvas = document.getElementById("main_canvas");

canvas.addEventListener("keydown", move_player, true);
var game_manager = new GameManager(canvas);
var player = new Player();

game_manager.add_player(player);


setInterval(game_loop, 1000.0 / 60);

function game_loop() {
	//game_manager.update();
  game_manager.draw();
}

function move_player(e) {
  if (e.keyCode == player.keys.left) {
    player.move(-player.velocity);
  }

  if (e.keyCode == player.keys.right) {
    player.move(player.velocity);
  }

  if (e.keyCode == player.keys.space) {
    console.log("shot fired");
  }
}
