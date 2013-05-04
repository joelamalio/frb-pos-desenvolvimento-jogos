var GameManager = Class.extend({
  canvas: null,
  context: null,
  enemies: [],
  players: [],
  weapons: [],

  init: function(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  },

  add_enemy: function(enemy) {
    this.enemies.push(enemy);
  },

  add_player: function(player) {
    this.players.push(player);
  },

  add_weapon: function(weapon) {
    this.weapons.push(weapon);
  },

  draw: function() {
    this.clear_canvas();
    this.draw_players();
    this.draw_weapons();
    this.draw_enemies();
  },

  draw_players: function() {
    for (var i = 0; i < this.players.length; i++) {
      var player = this.players[i];
      this.context.drawImage(player.image, player.get_position().x, player.get_position().y);
    }
  },

  draw_enemies: function() {
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      this.context.drawImage(enemy.image, enemy.get_position().x, enemy.get_position().y);
    }
  },

  draw_weapons: function() {
    for (var i = 0; i < this.weapons.length; i++) {
      var weapon = this.weapons[i];
      this.context.drawImage(weapon.image, weapon.get_position().x, weapon.update_position_y(), 15 , 15);
    }
  },

  use_weapon: function() {
    for (var i = 0; i < this.players.length; i++) {
      var player = this.players[i];
      player.use_weapon();
      this.add_weapon(player.weapon);
    }
  },

  clear_canvas: function() {
    //this.canvas.width = canvas.width;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

});
