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
    var game = GameManager.instance;
    if (e.keyCode == this.keys.enter) {
      game.paused = !game.paused;
      if (game.paused) {
        game.input_manager.write_message({text : 'Paused...' , context : game.context});
      } else {
        game.input_manager.write_message({text : '' , context : game.context});
      }
    }
  },

  onkey_tab: function(e) {
    if (e.keyCode == this.keys.tab) {
      GameManager.instance.started = true;
    }
  },

  write_text: function(options) {
    var x = options.x;
    var y = options.y;
    var font = options.font;
    var color = options.color;
    var text = options.text;
    var context = options.context;
    context.save();
    if('shadow' in options) {
      context.shadowColor = options.shadow.color;
      context.shadowOffsetX = options.shadow.x;
      context.shadowOffsetY = options.shadow.y;
      context.shadowBlur = options.shadow.blur;
    }
    context.font = font;
    context.fillStyle = color;
    if('align' in options) {
      context.textAlign = options.align;
    }
    context.fillText(text , x , y);
    context.restore();
  },

  write_score: function(parameters) {
    options = {x : 15 , y : 25 , font : 'bold 15px arial' , color : '#fff' , text: parameters.text, context: parameters.context}
    this.write_text(options);
  },

  write_message: function(parameters) {
    options = {x : 700 , y : 25 , font : 'bold 15px arial' , color : '#fff' , text: parameters.text, context: parameters.context}
    this.write_text(options);
  },

});
