var canvas = document.getElementById("main_canvas");
var context = canvas.getContext("2d");
var game_manager = new GameManager(canvas, context);
var player = new Player(context);
var interval;

game_manager.set_player(player);
game_manager.add_enemy("images/flag/afs.bmp", 0, 40);
game_manager.add_enemy("images/flag/ang.bmp", 80, 40);
game_manager.add_enemy("images/flag/argentina.bmp", 160, 40);
game_manager.add_enemy("images/flag/bel.bmp", 240, 40);
game_manager.add_enemy("images/flag/bul.bmp", 320, 40);
game_manager.add_enemy("images/flag/cam.bmp", 400, 40);

game_manager.add_enemy("images/flag/can.bmp", 0 , 100);
game_manager.add_enemy("images/flag/chl.bmp", 80 , 100);
game_manager.add_enemy("images/flag/cub.bmp", 160, 100);
game_manager.add_enemy("images/flag/din.bmp", 240, 100);
game_manager.add_enemy("images/flag/esp.bmp", 320, 100);
game_manager.add_enemy("images/flag/eua.bmp", 400, 100);

game_manager.add_enemy("images/flag/germany.bmp", 0 , 160);
game_manager.add_enemy("images/flag/gre.bmp", 80 , 160);
game_manager.add_enemy("images/flag/jap.bmp", 160, 160);
game_manager.add_enemy("images/flag/mex.bmp", 240, 160);
game_manager.add_enemy("images/flag/nig.bmp", 320, 160);
game_manager.add_enemy("images/flag/nor.bmp", 400, 160);

game_manager.add_enemy("images/flag/par.bmp", 0 , 220);
game_manager.add_enemy("images/flag/portugal.bmp", 80 , 220);
game_manager.add_enemy("images/flag/rus.bmp", 160, 220);
game_manager.add_enemy("images/flag/sen.bmp", 240, 220);
game_manager.add_enemy("images/flag/tur.bmp", 320, 220);
game_manager.add_enemy("images/flag/uru.bmp", 400, 220);

game_manager.add_enemy("images/flag/switzerland.bmp", 0, 280);
game_manager.add_enemy("images/flag/south_korea.bmp", 80, 280);
game_manager.add_enemy("images/flag/ivory_coast.bmp", 160, 280);
game_manager.add_enemy("images/flag/algeria.bmp", 240, 280);
game_manager.add_enemy("images/flag/france.bmp", 320, 280);
game_manager.add_enemy("images/flag/italy.bmp", 400, 280);

function loop_game() {
  if (game_manager.started && !game_manager.paused && !game_manager.lost && !game_manager.won) {
    game_manager.draw();
  } else if (game_manager.lost || game_manager.won) {
    var message = "";
    if (game_manager.lost) {
      message = "You lost!";
    } else if (game_manager.won) {
      message = "You won!";
    }
    clearInterval(interval);
    game_manager.clear_canvas();
    game_manager.input_manager.write_score();
    game_manager.input_manager.write_message(message);
  }
}

function start_game() {
  interval = setInterval(loop_game, 40);
}

start_game();
