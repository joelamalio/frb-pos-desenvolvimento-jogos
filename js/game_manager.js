var GameManager = Class.extend({
  canvas: null,
  context: null,
  entities: [],

  init: function(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  },

  addEntity: function(entity) {
    this.entities.push(entity);
  },

  update: function() {
    for (var i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }
  },

  draw: function() {
    for (var i = 0; i < this.entities.length; i++) {
      var entity = this.entities[i];
      this.context.drawImage(entity.image, entity.position.x, entity.position.y);
    }
  }
});
