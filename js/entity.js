var Entity = Class.extend({
  image: null,
  position: {x: 0, y: 0},
  velocity: 5,

  move: function(update_x_axis) {
    this.position.x += update_x_axis;
  },

  get_position: function() {
    return this.position;
  },

  set_position: function(position) {
    this.position = position;
  },

});
