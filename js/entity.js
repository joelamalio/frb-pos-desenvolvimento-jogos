var Entity = Class.extend({
  image: null,
  position: {x: 0, y: 0},
  velocity: 5,

  move: function(positions) {
    this.position.x += positions;
  },

});
