var Player = Entity.extend({

  keys: {left: 37, right: 39, space: 32},
  weapon: null,

  init: function() {
    this.image = new Image();
    this.image.src = "images/BRA.BMP";
    this.set_position({x: 380, y: 570});

  },

  use_weapon: function() {
    var position = this.get_position();
    this.weapon = new Weapon();
    this.weapon.use(position.x, position.y);
  },

});
