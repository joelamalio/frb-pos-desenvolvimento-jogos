var Entity = Class.extend({
  image: null,
  position: {x: 0, y: 0},
  vel: {x: 0, y: 0},

  update: function() {
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;
  }
});
