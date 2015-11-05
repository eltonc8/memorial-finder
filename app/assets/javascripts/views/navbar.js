GraveFinder.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  initialize: function () {
    this.render();
  },

  events: {},

  render: function () {
    var content = this.template();
    this.$el.html(content);
  },
});

GraveFinder.Views.navbar = new GraveFinder.Views.Navbar();
