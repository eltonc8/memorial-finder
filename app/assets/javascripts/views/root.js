GraveFinder.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/root"],

  initialize: function () {
    this.render();
  },

  render: function () {
    var content = this.template();
    this.$el.html( content );
    this.attachSubviews();
    return this;
  },
});
