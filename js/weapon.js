var Weapon = Entity.extend({

  init: function() {
    this.image = new Image();
    this.image.src = "images/ball.jpg";
  },

  use: function(x, y) {
    this.set_position({x: x, y: y});
  },

  update_position_y: function() {
    return --this.get_position().y;
  },

});
