var Player = Entity.extend({

  init: function(context) {
    this.context = context;
    this.set_image("images/flag/brazil.bmp");
    this.set_position({x: 380, y: 570});
    this.set_size({width: 39, height: 29});
    this.set_velocity(5);
  },

  load_weapon: function() {
  console.log('novo tiro');
    var weapon = new SimpleSoccerBall(this.context);
    var position = this.get_position();
    weapon.prepare(position.x, position.y);
    GameManager.instance.weapons.push(weapon);
  },

  action: function() {
    var input = GameManager.instance.input_manager;

    if (input.key_state[input.keys.left]) {
      if (this.get_position().x > 0) {
        this.update_position_x(-this.get_velocity());
      }
    }

    if (input.key_state[input.keys.right]) {
      if (this.get_position().x < (LIMIT_AXIS_X - this.get_size().width)) {
        this.update_position_x(this.get_velocity());
      }
    }

    if (input.key_state[input.keys.space]) {
      if (GameManager.instance.weapon_free()) {
        this.load_weapon();
      }
    }
  },


});
