var Weapon = Entity.extend({

  prepare: function(x, y) {
    this.set_position({x: x, y: y});
  },

  hit: function(position) {
    if (this.hit_x_axis(position.x) && this.hit_y_axis(position.y)) {
      this.set_activo(false);
      return true;
    }
    return false;
  },

  hit_x_axis: function(x) {
    if (this.get_position().x >= x
        && this.get_position().x <= (x + 30)) {
      return true;
    }
    return false;
  },

  hit_y_axis: function(y) {
    if (this.get_position().y >= y
        && this.get_position().y <= (y + 10)) {
      return true;
    }
    return false;
  },

});
