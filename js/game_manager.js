var LIMIT_AXIS_X = 800;
var LIMIT_AXIS_Y = 600;

var GameManager = Class.extend({
  canvas: null,
  context: null,
  enemies: [],
  player: null,
  weapons: [],
  score: 0,
  input_manager: null,
  shots: 0,
  paused: false,
  started: false,
  lost: false,
  won: false,
  final_message: "",

  init: function(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.input_manager = new InputManager(canvas);

    GameManager.instance = this;
  },

  add_enemy: function(enemy_image, x, y) {
    var enemy = new Enemy(this.context, enemy_image, {x: x, y: y});
    this.enemies.push(enemy);
  },

  set_player: function(player) {
    this.player = player;
  },

  draw: function() {
    this.clear_canvas();
    this.player.draw();
    this.player.action();
    this.draw_weapons();
    this.draw_enemies();
    this.input_manager.write_score()
  },

  draw_enemies: function() {
    var counter_enemies_inactive = 0;
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      if (enemy.get_activo()) {
        enemy.update_location();
        enemy.draw();
      } else {
          counter_enemies_inactive++;
      }
    }

    if (counter_enemies_inactive == this.enemies.length) {
      this.won = true;
    }
  },

  draw_weapons: function() {
    for (var i = 0; i < this.weapons.length; i++) {
      var weapon = this.weapons[i];
      if (weapon.get_activo()) {
        if (weapon.get_position().y > 0) {
          weapon.update_position_y(weapon.get_velocity());
          weapon.draw();
          for (var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            this.hit_enemy(enemy, weapon);
          }
        } else {
          weapon.set_activo(false);
        }
      }
    }
  },

  clear_canvas: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  hit_enemy: function(enemy, weapon) {
    if (enemy.get_activo()) {
      if (weapon.hit(enemy.get_position())) {
        enemy.set_activo(false);
        this.score++;
        console.log("score: " + this.score);
      }
    }
  },

  weapon_free: function() {
    for (var i = 0; i < this.weapons.length; i++) {
      var weapon = this.weapons[i];
      if (weapon.get_activo()) {
        return false;
      }
    }
    return true;
  },

  finalized: function() {
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      if (enemy.get_activo()) {
        return false;
      }

    }
  }

});
