var canvas = document.getElementById("main_canvas");
var context = canvas.getContext("2d");
var game_manager = new GameManager(canvas, context);
var player = new Player(context);
var interval;

game_manager.set_player(player);
game_manager.add_enemy("images/flag_germany.bmp", 0, 40);
game_manager.add_enemy("images/flag_argentina.bmp", 80, 40);
game_manager.add_enemy("images/flag_argentina.bmp", 160, 40);
game_manager.add_enemy("images/flag_argentina.bmp", 240, 40);
game_manager.add_enemy("images/flag_argentina.bmp", 320, 40);
game_manager.add_enemy("images/flag_argentina.bmp", 400, 40);

game_manager.add_enemy("images/flag_portugal.bmp", 0 , 100);
game_manager.add_enemy("images/flag_portugal.bmp", 80 , 100);
game_manager.add_enemy("images/flag_argentina.bmp", 160, 100);
game_manager.add_enemy("images/flag_argentina.bmp", 240, 100);
game_manager.add_enemy("images/flag_argentina.bmp", 320, 100);
game_manager.add_enemy("images/flag_argentina.bmp", 400, 100);

game_manager.add_enemy("images/flag_portugal.bmp", 0 , 160);
game_manager.add_enemy("images/flag_portugal.bmp", 80 , 160);
game_manager.add_enemy("images/flag_argentina.bmp", 160, 160);
game_manager.add_enemy("images/flag_argentina.bmp", 240, 160);
game_manager.add_enemy("images/flag_argentina.bmp", 320, 160);
game_manager.add_enemy("images/flag_argentina.bmp", 400, 160);

game_manager.add_enemy("images/flag_portugal.bmp", 0 , 220);
game_manager.add_enemy("images/flag_portugal.bmp", 80 , 220);
game_manager.add_enemy("images/flag_argentina.bmp", 160, 220);
game_manager.add_enemy("images/flag_argentina.bmp", 240, 220);
game_manager.add_enemy("images/flag_argentina.bmp", 320, 220);
game_manager.add_enemy("images/flag_argentina.bmp", 400, 220);

function loop_game() {
  if (game_manager.started && !game_manager.paused && !game_manager.lost && !game_manager.won) {
    game_manager.draw();
  } else if (game_manager.lost) {
    console.log("You lost!");
    clearInterval(interval);
    game_manager.input_manager.write_message({text : 'You lost!' , context : context});
  } else if (game_manager.won) {
    console.log("You won!");
    clearInterval(interval);
    game_manager.input_manager.write_message({text : 'You won!' , context : context});
  }
}

function start_game() {
  interval = setInterval(loop_game, 40);
}

start_game();
