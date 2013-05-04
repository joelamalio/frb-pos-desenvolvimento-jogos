var SimpleSoccerBall = Weapon.extend({

  init: function(context) {
    this.context = context;
    this.set_image("images/ball.jpg");
    this.set_size({width: 12, height: 12});
    this.set_velocity(-5);
  },

});
