GraveFinder.Views.MemorialListItem = Backbone.View.extend({
  tagName: "li",
  className: "memorial-list-item list-group-item",
  template: JST['root/memorial_list_item'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
