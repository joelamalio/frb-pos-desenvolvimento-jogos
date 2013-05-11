var Entity = Class.extend({
  context: null,
  image: null,
  position: {x: 0, y: 0},
  size: {width: 0, height: 0},
  velocity: 0,
  activo: true,

  update_position_x: function(value) {
    this.position.x += value;
  },

  update_position_y: function(value) {
    this.position.y += value;
  },

  draw: function() {
    this.context.drawImage(this.get_image(), this.position.x, this.position.y, this.size.width, this.size.height);
  },

  get_image: function() {
    return this.image;
  },

  set_image: function(source_image) {
    this.image = new Image();
    this.image.src = source_image;
  },

  get_position: function() {
    return this.position;
  },

  set_position: function(position) {
    this.position = position;
  },

  get_size: function() {
    return this.size;
  },

  set_size: function(size) {
    this.size = size;
  },

  get_velocity: function() {
    return this.velocity;
  },

  set_velocity: function(velocity) {
    this.velocity = velocity;
  },

  get_activo: function() {
    return this.activo;
  },

  set_activo: function(activo) {
    this.activo = activo;
  },

});
