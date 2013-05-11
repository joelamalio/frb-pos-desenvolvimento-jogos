var LIMIT_AXIS_X = 800;
var LIMIT_AXIS_Y = 600;

var Enemy = Entity.extend({

  init: function(context) {
    this.context = context;
    this.set_image("images/flag_germany.bmp");
    this.set_position({x: 30, y: 10});
    this.set_size({width: 39, height: 29});
    this.set_velocity(5);
  },

  update_location: function() {
    this.update_position_x(this.get_velocity());
    var x = this.get_position().x;
    var y = this.get_position().y;

    if (x < 0) {
      this.set_position({x: 0, y: y + 30});
      this.update_direction();
    }

    if (x > this.get_limit_axis_x()) {
      this.set_position({x: this.get_limit_axis_x(), y: y + 30});
      this.update_direction();
    }

    if (y > this.get_limit_axis_y()) {
      console.log("O Brasil foi derrotado!")
    }
  },

  update_direction: function() {
    this.set_velocity(-this.get_velocity());
  },

  get_limit_axis_x: function() {
    return (LIMIT_AXIS_X - this.get_size().width);
  },

  get_limit_axis_y: function() {
    return (LIMIT_AXIS_Y - this.get_size().height);
  },

});
