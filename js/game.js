var canvas = document.getElementById("main_canvas");
var game_manager = new GameManager(canvas);
var player = new Player();

game_manager.addEntity(player);

setInterval(game_loop, 1000.0 / 60);

function game_loop() {
	game_manager.update();
	game_manager.draw();
}
