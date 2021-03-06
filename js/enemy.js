var Enemy = Entity.extend({

  init: function(context, image, position) {
    this.context = context;
    this.set_image(image);
    this.set_position(position);
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
      GameManager.instance.lost = true;
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
