var GameManager = Class.extend({
  canvas: null,
  context: null,
  enemies: [],
  players: [],

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

  update: function() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].move(1);
    }

    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].move(1);
    }
  },

  draw: function() {
    for (var i = 0; i < this.players.length; i++) {
    this.clear_canvas();
      var player = this.players[i];
      this.context.drawImage(player.image, player.position.x, player.position.y);
    }

    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      this.context.drawImage(enemy.image, enemy.position.x, enemy.position.y);
    }
  },

  clear_canvas: function() {
    this.canvas.width = canvas.width;
  },

});
