GraveFinder.Views.Memorial = Backbone.View.extend({
  template: JST['memorial/memorial'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);
    return this;
  },
});
