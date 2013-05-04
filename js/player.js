var Player = Entity.extend({

  keys: {left: 37, right: 39, space: 32},
  weapon: null,

  init: function(context) {
    this.context = context;
    this.set_image("images/flag_brazil.bmp");
    this.set_position({x: 380, y: 570});
    this.set_size({width: 39, height: 29});
    this.set_velocity(5);
  },

  use_weapon: function() {
    var position = this.get_position();
    this.weapon = new SimpleSoccerBall(this.context);
    this.weapon.use(position.x, position.y);
  },

});
