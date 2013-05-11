var InputManager = Class.extend({
  canvas: null,
  key_state: {},

  init: function(canvas) {
    this.canvas = canvas;
    var that = this;
    window.addEventListener("keydown", function(e) {
      that.onkeydown(e);
    });
    window.addEventListener("keyup", function(e) {
      that.onkeyup(e);
    });
  },

  onkeydown: function(e) {
    this.key_state[e.keyCode] = true;
  },

  onkeyup: function(e) {
    this.key_state[e.keyCode] = false;
  },
});
