var InputManager = Class.extend({
  canvas: null,
  keys: {left: 37, right: 39, space: 32, enter: 13, tab: 9},
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
    if (!this.key_state[this.keys.space]) {
      this.key_state[e.keyCode] = true;
    }
  },

  onkeyup: function(e) {
    this.key_state[e.keyCode] = false;
    this.onkey_enter(e);
    this.onkey_tab(e);
  },

  onkey_enter: function(e) {
    if (e.keyCode == this.keys.enter) {
      GameManager.instance.paused = !GameManager.instance.paused;
    }
  },

  onkey_tab: function(e) {
    if (e.keyCode == this.keys.tab) {
      GameManager.instance.started = true;
    }
  },
});
