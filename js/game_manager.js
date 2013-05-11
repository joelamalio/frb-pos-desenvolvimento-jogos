var GameManager = Class.extend({
  canvas: null,
  context: null,
  enemies: [],
  players: [],
  weapons: [],
  shots: 0,
  position_y: 0,
  pontuacao: 0,

  init: function(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  },

  add_enemy: function(enemy) {
    this.enemies.push(enemy);
  },

  add_player: function(player) {
    this.players.push(player);
  },

  add_weapon: function(weapon) {
    this.weapons = [];
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
      player.draw();
    }
  },

  draw_enemies: function() {
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
	  if (enemy.get_ativo()) {
		enemy.update_location();
		enemy.draw();
	  }
    }
  },

  draw_weapons: function() {	
    for (var i = 0; i < this.weapons.length; i++) {
		var weapon = this.weapons[i];
		if (weapon.get_ativo()) {
			if (weapon.get_position().y > 0) {
				weapon.update_position_y(weapon.get_velocity());
				this.position_y = weapon.get_position().y;
				
				for (var i = 0; i < this.enemies.length; i++) {
					var enemy = this.enemies[i];
					if (enemy.get_ativo()) {
						var acertou = (weapon.get_position().x >= enemy.get_position().x && weapon.get_position().x <= (enemy.get_position().x + 30)) &&
							(weapon.get_position().y >= enemy.get_position().y && weapon.get_position().y <= (enemy.get_position().y + 10))
						if (acertou) {
							this.pontuacao = this.pontuacao + 1;
							console.log("pontuacao: " + this.pontuacao);
							this.enemies[i].set_ativo(false);
							this.weapons[0].set_ativo(false);
							var enemy1 = new Enemy(this.context);
							this.add_enemy(enemy1);
							this.shots = 0;
							this.players[0].use_weapon();
						}
					}
				}
				weapon.draw();
		  }else {
				this.weapons[0].set_ativo(false);
		  }
	  }
    }
  },

  use_weapon: function() {
	if (this.shots <=0 ) {
		for (var i = 0; i < this.players.length; i++) {
			var player = this.players[i];
			player.use_weapon();
			this.add_weapon(player.weapon);
		}
		this.shots = this.shots + 1;
	}else {
		if (this.position_y == 0) {
			this.shots = 0;
		}
	}
  },

  clear_canvas: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

});
