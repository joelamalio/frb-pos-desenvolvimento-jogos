var Player = Entity.extend({
  keys: {left: 37, right: 39, space: 32},

  init: function() {
    this.image = new Image();
    this.image.src = "images/BRA.BMP";
    this.position.x = 498;
    this.position.y = 610;
  },

});
